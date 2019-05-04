'use strict'

import dictionary from './lib/dictionary'
import storage from './lib/storage'

// E-Com Plus public APIs SDK
/* global EcomIo */

// get some methods from renderer object
// https://developers.e-com.plus/storefront-renderer/Ecom.methods.html
/* global Ecom */

// map items objects from Elasticsearch hits response
const mapItems = hits => hits.hits.map(({ _id, _source }) => {
  return Object.assign(_source, { _id })
})

export default {
  name: 'EcomSearch',

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: 'pt_br'
    },
    // native input attributes
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    // show only search button without input
    buttonOnly: {
      type: Boolean,
      default: false
    },
    // max items to suggest
    maxItems: {
      type: Number,
      default: 4
    },
    // optionally preset popular terms and items arrays
    presetedTerms: {
      type: Array
    },
    presetedItems: {
      type: Array
    },
    // min score (match) to fix search term automatically
    // zero to disable auto fix
    autoFixScore: {
      type: Number,
      default: 0.83
    },
    // options for money formatting
    decimalDelimiter: {
      type: String,
      default: ','
    },
    thousandsDelimiter: {
      type: String,
      default: '.'
    },
    currencyNumFixed: {
      type: Number,
      default: 2
    },
    // CSS classes for default item block
    itemClasses: {
      type: Array,
      default () {
        return [ 'col-12 col-sm-6 col-md-3' ]
      }
    }
  },

  data () {
    return {
      term: this.value,
      searching: 0,
      searchedTerm: null,
      totalSearchResults: 0,
      showSuggestions: false,
      showInput: !this.buttonOnly,
      // best matched search results
      suggestedItems: [],
      // suggested terms based on current term
      suggestedTerms: [],
      // general popular terms
      popularTerms: this.presetedTerms || [],
      // most popular or recommended items
      popularItems: this.presetedItems || []
    }
  },

  created () {
    if (!this.presetedTerms) {
      // TODO: get general popular terms on Search API
    }

    if (!this.presetedItems) {
      // get most popular items
      // query Search API without term
      this.searchProducts((err, body) => {
        if (err) {
          console.error(err)
        } else {
          this.popularItems = mapItems(body.hits)
        }
      })
    }
  },

  computed: {
    history () {
      return storage.get()
    },

    inputValue: {
      get () {
        return this.term
      },

      set (val) {
        this.term = val
        // handle v-model
        this.$emit('input', val)
        this.suggestedTerms = []

        if (val && val.length > 2) {
          let vm = this
          // get products and completed terms from E-Com Plus Search API
          let callback = (err, body) => {
            if (err) {
              console.error(err)
            } else if (val === vm.term) {
              // term checked
              vm.searchedTerm = val
              const { hits, suggest } = body
              // update suggested items
              vm.suggestedItems = mapItems(hits)
              vm.totalSearchResults = hits.total
              if (hits.total) {
                // add to history
                storage.add(val)
              }

              if (suggest) {
                // handle terms fix
                // 'did you mean?'
                let suggestTerm = val
                let autoFixTerm = val
                const { words } = suggest
                words.forEach(({ options, text }) => {
                  if (options.length) {
                    let opt = options[0]
                    // check score if auto fix enabled
                    if (vm.autoFixScore > 0 &&
                      opt.score >= vm.autoFixScore &&
                      // prevent autocomplete
                      opt.text.indexOf(text) === -1) {
                      autoFixTerm = autoFixTerm.replace(text, opt.text)
                    }
                    suggestTerm = suggestTerm.replace(text, opt.text)
                  }
                })

                if (autoFixTerm !== val) {
                  // update input value to handle search with fixed term
                  vm.inputValue = autoFixTerm
                } else if (suggestTerm !== val) {
                  // suggest fixed term
                  vm.suggestedTerms.push(suggestTerm)
                }
              }
            }
          }

          // search products by name and keywords
          // https://github.com/ecomclub/ecomplus-sdk-js#term
          this.searchProducts(callback, val)
        } else if (val === '') {
          this.suggestedItems = []
        }
      }
    },

    label () {
      // for input placeholder and aria-label
      return this.placeholder || dictionary('search_products', this.lang)
    },

    listTerms () {
      // list suggested or popular terms
      return this.suggestedTerms.length ? this.suggestedTerms : this.popularTerms
    },

    listItems () {
      // list suggested or popular items
      return this.suggestedItems.length ? this.suggestedItems : this.popularItems
    }
  },

  methods: {
    dictionary,

    blur () {
      if (!this.term || this.term.length < 3) {
        // unset suggestions
        this.suggestedItems = this.suggestedTerms = []
      }
    },

    change () {
      this.$emit('change', this.term)
    },

    submit () {
      this.toggleSuggestions()
      this.$emit('submit', this.term)
    },

    toggleInput () {
      this.showInput = !this.showInput
      setTimeout(() => {
        // auto show suggestions and focus input
        this.toggleSuggestions()
        this.$refs.input.focus()
      }, 100)
    },

    toggleSuggestions (state) {
      let vm = this
      // show or hide suggestions block
      vm.showSuggestions = typeof state === 'boolean' ? state : !vm.showSuggestions
      setTimeout(() => {
        // reset show input bool
        this.showInput = !this.buttonOnly
      }, 200)
    },

    searchProducts (cb, term) {
      this.searching++
      let callback = (err, body) => {
        this.searching--
        cb(err, body)
      }
      // https://github.com/ecomclub/ecomplus-sdk-js#search-products
      // apply from = 0 and size = maxItems
      EcomIo.searchProducts(callback, term, 0, this.maxItems)
    },

    truncateString (str, ln) {
      return str.length <= ln ? str : str.substring(0, ln) + '...'
    },

    name (item) {
      // get translated item name
      // https://developers.e-com.plus/storefront-renderer/methods_def_name.js.html
      return Ecom.methods.name(item, this.lang)
    },

    formatMoney (price) {
      // price number to money format string
      // https://developers.e-com.plus/storefront-renderer/methods_def_formatMoney.js.html
      return Ecom.methods.formatMoney(
        price,
        this.decimalDelimiter,
        this.thousandsDelimiter,
        this.currencyNumFixed
      )
    },

    price (item) {
      // get item current price
      // https://developers.e-com.plus/storefront-renderer/methods_def_price.js.html
      return Ecom.methods.price(item)
    },

    onPromotion (item) {
      // check if item has promotional price
      // https://developers.e-com.plus/storefront-renderer/methods_def_onPromotion.js.html
      return Ecom.methods.onPromotion(item)
    }
  },

  watch: {
    value (val) {
      if (val !== this.inputValue) {
        // value changed externally
        this.inputValue = val
      }
    },

    buttonOnly (val) {
      this.showInput = !val
    }
  }
}
