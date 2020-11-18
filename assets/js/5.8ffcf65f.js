(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{324:function(t,e,s){},327:function(t,e,s){},328:function(t,e,s){},329:function(t,e,s){},330:function(t,e,s){"use strict";s(312);var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter:function(){var t=this;return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((function(e){return e.path===t.href}))))}}},n=s(43),a=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)(this.isRouter?"router-link":"a",{tag:"component",attrs:{href:this.isRouter?null:this.href,to:this.isRouter?this.to||this.href:null}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},334:function(t,e,s){"use strict";s(315),s(313);var i={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:function(){return{opacity:0,zIndex:null,top:null}},computed:{style:function(){var t=this.top,e=this.zIndex,s=this.transitionMs,i=this.opacity;return{top:t,transition:"opacity ".concat(s,"ms linear"),opacity:i,zIndex:e}}},methods:{hide:function(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll:function(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible:function(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity:function(t){var e=this;0===t?setTimeout((function(){e.top=e.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted:function(){var t=this;this.isVisible&&(setTimeout((function(){t.opacity=null}),this.transitionMs),this.lockBodyScroll())}},n=(s(340),s(43)),a=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"backdrop",style:this.style,on:{click:this.hide}})}),[],!1,null,null,null);e.a=a.exports},335:function(t,e,s){"use strict";s(65),s(317),s(44),s(333),s(66),s(314);var i=s(318),n=s(92),a=s(45),r=s(344),o=s(309),c=s(342),l=s.n(c),u={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:function(){return Object(r.a)({zoom:null,big:800},o.$ecomConfig.get("default_img_size")||"normal",400)}},lozadOptions:{type:Object,default:function(){return{rootMargin:"350px 0px",threshold:0}}}},data:function(){return{sources:[],height:null,opacity:null}},computed:{defaultImgObj:function(){return"object"===Object(a.a)(this.src)&&this.src?Object(o.img)(this.src)||this.src:{}},localFallbackSrc:function(){var t=this.src,e=this.defaultImgObj,s=this.fallbackSrc;if(s)return s;var i="object"===Object(a.a)(t)?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt:function(){var t=this.alt,e=this.src,s=this.defaultImgObj;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources:function(){var t,e=[];if("object"===Object(a.a)(this.src)){var s=this.$el,i=s.clientWidth,r=s.clientHeight,o=function(t,e,s,i){var n,a;for(var r in i){var o=i[r];if(void 0!==o&&t[r]){if(void 0!==a)if(null===o){if(a>=e)continue}else if(o<e||o-50<=s||null!==a&&o>a)continue;n=r,a=o}}return n}(this.src,i,r,this.containerBreakpoints),c=this.src[o]||this.defaultImgObj,l=c.url,u=c.size;if(t=l,i&&u&&this.canCalcHeight){var d=u.split("x").map((function(t){return parseInt(t,10)})),h=Object(n.a)(d,2),p=h[0],f=h[1];f&&(this.height="".concat(i>=p?f:i*f/p,"px"))}}else t=this.src;t&&(t.endsWith(".webp")?e.push({srcset:t,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(t)?t.replace(/\/imgs\/[0-9]{3}px/,""):t.replace(/\.webp$/,""),type:"image/".concat(".png"===t.substr(-9,4)?"png":"jpeg")}):e.push({srcset:t})),this.sources=e}},mounted:function(){var t=this;this.updateSources(),this.$nextTick((function(){var e=t.$el;l()(e,Object(i.a)(Object(i.a)({},t.lozadOptions),{},{loaded:function(e){var s=t.localFallbackSrc,i="IMG"===e.tagName?e:e.lastChild;i.style.opacity=0,i.onerror=function(){console.error(new Error("Image load error"),this),e.style.display="none";var t=document.createElement("IMG");t.src=s,e.parentNode.insertBefore(t,e.nextSibling)},i.onload=function(){t.opacity=0,e.classList.add("loaded"),t.$nextTick((function(){t.opacity=i.style.opacity=null,t.$emit("load")}))}}})).observe()}))}},d=(s(345),s(43)),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,n=t.type;return s("source",{key:e,attrs:{srcset:i,type:n}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=h.exports},336:function(t,e,s){"use strict";s(95),s(317);var i=s(45),n=s(538),a=s(309),r=function(t,e){var s=e.type,i=e.value;if(i)return"percentage"===s?t*(100-i)/100:t-i},o={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data:function(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:function(){return Object(a.i18n)(n.c)},i19from:function(){return Object(a.i18n)(n.v)},i19interestFree:function(){return Object(a.i18n)(n.y)},i19of:function(){return Object(a.i18n)(n.H)},i19to:function(){return Object(a.i18n)(n.mb)},i19upTo:function(){return Object(a.i18n)(n.qb)},price:function(){var t=Object(a.price)(this.product);return this.extraDiscount.value?r(t,this.extraDiscount):t},comparePrice:function(){return Object(a.onPromotion)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.price)(this.product):void 0},priceWithDiscount:function(){return r(this.price,this.discount)},installmentValue:function(){if(this.installmentsNumber>=2){if(this.monthlyInterest){var t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:a.formatMoney,updateInstallments:function(t){if(t){this.monthlyInterest=t.monthly_interest;var e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount:function(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler:function(t){this.$emit("fix-price",t)},immediate:!0}},created:function(){var t=this,e="object"===("undefined"==typeof window?"undefined":Object(i.a)(window))&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(e){var s=function(){var s=e.info&&e.info.apply_discount;if(s){var i=s.available_extra_discount;return i&&(t.extraDiscount=i),Object.keys(s).length>0}return!1};s()||e.on("info:apply_discount",s)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(e){var n=function(){var s=e.info&&e.info.list_payments;return!!s&&(t.updateInstallments(s.installments_option),t.updateDiscount(s.discount_option),Object.keys(s).length>0)};n()||e.on("info:list_payments",n)}}},c=(s(346),s(43)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(t._s(t.i19from))]),t._v(" "),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),t._v(" "),s("small",[t._v(t._s(t.i19to))])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),t._v(" "),s("strong",{staticClass:"prices__value"},[t._v("\n    "+t._s(t.formatMoney(t.price))+"\n  ")]),t._v(" "),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v("\n        "+t._s(t.i19upTo)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.installmentsNumber)+"x\n      "),t.isLiteral?s("small",[t._v("\n        "+t._s(t.i19of)+"\n      ")]):t._e(),t._v(" "),s("span",[t._v("\n        "+t._s(t.formatMoney(t.installmentValue))+"\n      ")]),t._v(" "),!t.monthlyInterest&&t.isLiteral?s("small",[t._v("\n        "+t._s(t.i19interestFree)+"\n      ")]):t._e()]):t._e(),t._v(" "),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")]),t._v(" "),s("small",[t._v("\n          "+t._s(t.discountLabel)+"\n        ")])]:[s("small",[t._v("\n          "+t._s(t.i19asOf)+"\n        ")]),t._v(" "),s("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=l.exports},340:function(t,e,s){"use strict";s(324)},345:function(t,e,s){"use strict";s(327)},346:function(t,e,s){"use strict";s(328)},347:function(t,e,s){"use strict";s(329)},348:function(t,e,s){"use strict";s(67),s(10);var i=s(318),n=s(45),a=s(538),r=s(309),o=s(0),c=s(325),l=s(326),u=s.n(l),d=s(330),h=s(335),p=s(336),f={name:"ProductCard",components:{ALink:d.a,APicture:h.a,APrices:p.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:function(){return{body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}},computed:{i19outOfStock:function(){return Object(r.i18n)(a.N)},i19unavailable:function(){return Object(r.i18n)(a.nb)},buyHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(n.a)(window))&&window.productCardBuyHtml},footerHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(n.a)(window))&&window.productCardFooterHtml},name:function(){return Object(r.name)(this.body)},strBuy:function(){return this.buyText||"object"===("undefined"==typeof window?"undefined":Object(n.a)(window))&&window.productCardBuyText||Object(r.i18n)(a.f)},isInStock:function(){return Object(r.inStock)(this.body)},isActive:function(){return this.body.available&&this.body.visible&&this.isInStock},discount:function(){var t=this.body;return Object(r.onPromotion)(t)?Math.round(100*(t.base_price-Object(r.price)(t))/t.base_price):0}},methods:{setBody:function(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem:function(){var t=this;this.productId&&(this.isLoading=!0,Object(c.store)({url:"/products/".concat(this.productId,".json")}).then((function(e){var s=e.data;t.$emit("update:product",s),t.setBody(s),t.$emit("update:is-loaded",!0)})).catch((function(e){console.error(e),t.body.name&&t.body.slug&&t.body.pictures||(t.error=Object(r.i18n)(a.m))})).finally((function(){t.isLoading=!1})))},buy:function(){var t=this,e=this.body;this.$emit("buy",{product:e}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(c.store)({url:"/products/".concat(e._id,".json")}).then((function(n){for(var a=n.data,r=["variations","customizations","kit_composition"],c=0;c<r.length;c++){var l=a[r[c]];if(l&&l.length)return Promise.all([s.e(0),s.e(2),s.e(8),s.e(6)]).then(s.bind(null,453)).then((function(e){new o.a({render:function(t){return t(e.default,{props:{product:a}})}}).$mount(t.$refs.quickview)}))}var d=a.quantity,h=a.price;u.a.addProduct(Object(i.a)(Object(i.a)({},e),{},{quantity:d,price:h}))})).catch((function(t){console.error(t),window.location="/".concat(e.slug)})).finally((function(){t.isWaitingBuy=!1})))}},created:function(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},m=(s(347),s(43)),_=Object(m.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():s("section",[t._t("discount-tag",[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("%\n        ")]):t._e()],null,{discount:t.discount}),t._v(" "),t._t("body",[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),t._v(" "),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._v(" "),t._t("title",[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v("\n              "+t._s(t.name)+"\n            ")])])],2)]),t._v(" "),t._t("rating",[t._m(0)]),t._v(" "),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),t._v(" "),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),t._v(" "),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?s("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._v(" "),t._t("buy-button-content",[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v("\n                "+t._s(t.strBuy)+"\n              ")])],2)])],2)]:t._t("out-of-stock",[s("p",{staticClass:"badge badge-dark"},[t._v("\n          "+t._s(t.i19outOfStock)+"\n        ")])]):t._t("unavailable",[s("p",{staticClass:"badge badge-warning"},[t._v("\n          "+t._s(t.i19unavailable)+"\n        ")])]),t._v(" "),t._t("footer",[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t._v(" "),t.isLoading?[t._t("default"),t._v(" "),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()]:t._e(),t._v(" "),s("div",{ref:"quickview"})],2)}),[function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"product-card__rating",attrs:{"data-sku":this.body.sku}})}],!1,null,null,null);e.a=_.exports},374:function(t,e,s){},375:function(t,e,s){},433:function(t,e,s){"use strict";s(374)},434:function(t,e,s){"use strict";s(375)},454:function(t,e,s){"use strict";s.r(e);s(24),s(168),s(46),s(67),s(315),s(10),s(313);var i=s(538),n=s(309),a=s(334),r=(s(169),s(312),s(341),s(93),s(181),s(321),s(407),s(111),s(331),s(44),s(96),s(66),s(94),s(45)),o=s(342),c=s.n(o),l=s(408),u=s.n(l),d=s(343),h=s(348),p=function(t){var e=t.ecomSearch,s=t.term,i=t.page,n=t.defaultSort;e.reset(),n&&e.setSortOrder(n),s&&e.setSearchTerm(s),i&&e.setPageNumber(i)},f={name:"SearchEngine",components:{Portal:d.a,ABackdrop:a.a,ProductCard:h.a},props:{term:String,page:{type:Number,default:1},pageSize:{type:Number,default:24},brands:Array,categories:Array,isFixedBrands:Boolean,isFixedCategories:Boolean,defaultSort:String,autoFixScore:{type:Number,default:.6},isFilterable:{type:Boolean,default:!0},hasPopularItems:{type:Boolean,default:!0},canLoadMore:{type:Boolean,default:!0},loadMoreSelector:String,canRetry:{type:Boolean,default:!0},canShowItems:{type:Boolean,default:!0},productCardProps:Object,gridsData:{type:Array,default:function(){if("object"===("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.storefront&&window.storefront.data)return window.storefront.data.grids}}},data:function(){return{suggestedTerm:"",resultItems:[],totalSearchResults:0,hasSearched:!1,noResultsTerm:"",keepNoResultsTerm:!1,filters:[],lastSelectedFilter:null,selectedOptions:{},selectedSortOption:null,countOpenRequests:0,lastRequestId:null,isScheduled:!1,isLoadingMore:!1,hasNetworkError:!1,popularItems:[],hasSetPopularItems:!1,isAsideVisible:!1,searchFilterId:0}},computed:{i19clearFilters:function(){return Object(n.i18n)(i.j)},i19closeFilters:function(){return Object(n.i18n)(i.l)},i19didYouMean:function(){return Object(n.i18n)(i.o)},i19filter:function(){return Object(n.i18n)(i.r)},i19filterResults:function(){return Object(n.i18n)(i.s)},i19itemsFound:function(){return Object(n.i18n)(i.A)},i19noResultsFor:function(){return Object(n.i18n)(i.G)},i19popularProducts:function(){return Object(n.i18n)(i.Q)},i19refineSearch:function(){return Object(n.i18n)(i.T)},i19relevance:function(){return Object(n.i18n)(i.V)},i19results:function(){return Object(n.i18n)(i.W)},i19searchAgain:function(){return Object(n.i18n)(i.ab)},i19searchingFor:function(){return Object(n.i18n)(i.db)},i19searchOfflineErrorMsg:function(){return Object(n.i18n)(i.bb)},i19sort:function(){return Object(n.i18n)(i.lb)},ecomSearch:function(){return new u.a},isSearching:function(){return this.countOpenRequests>0},hasEmptyResult:function(){return this.hasSearched&&!this.resultItems.length},sortOptions:function(){return[{value:null,label:Object(n.i18n)(i.V)},{value:"sales",label:Object(n.i18n)(i.Y)},{value:"lowest_price",label:Object(n.i18n)(i.C)},{value:"highest_price",label:Object(n.i18n)(i.x)},{value:"news",label:Object(n.i18n)(i.U)}]},hasSelectedOptions:function(){for(var t in this.selectedOptions)if(this.selectedOptions[t]&&this.selectedOptions[t].length)return!0;return!1},isNavVisible:function(){return this.hasSearched&&this.isFilterable&&(this.isSearching||this.totalSearchResults>8||this.hasSelectedOptions)},isResultsVisible:function(){return this.hasSearched&&!this.isSearching||this.suggestedItems.length},hasFilters:function(){return this.hasSelectedOptions||this.filters.find((function(t){return t.options.length}))},suggestedItems:function(){return this.resultItems.length?this.resultItems:this.popularItems},loadObserver:function(){var t=this;return this.canLoadMore&&c()("#search-engine-load-more",{load:function(){t.isLoadingMore=!0,t.fetchItems()}})}},methods:{fetchItems:function(t,e){var s=this,i=e?new u.a:this.ecomSearch,n=Date.now();this.countOpenRequests++,this.lastRequestId=n,this.isLoadingMore&&i.setPageNumber(this.page+Math.ceil(this.resultItems.length/this.pageSize));var a=i.setPageSize(this.pageSize).fetch().then((function(t){return s.lastRequestId===n&&(s.hasNetworkError=!1,e||s.handleSearchResult()),!e&&(s.term||s.brands||s.categories)||(s.hasSetPopularItems=!0,s.popularItems=i.getItems()),t})).catch((function(i){console.error(i),(s.lastRequestId===n||e)&&(!s.canRetry||t||i.response&&400===i.response.status?s.hasNetworkError=!0:s.fetchItems(!0,e))})).finally((function(){s.countOpenRequests--,s.isLoadingMore=!1}));this.$emit("fetch",{ecomSearch:i,fetching:a})},updateFilters:function(){var t=this,e=[],s=function(s,i,n){var a=t.filters.findIndex((function(t){return t.filter===s}));if(s!==t.lastSelectedFilter){if(-1===a&&(a=t.filters.length),t["isFixed".concat(s)]){var r=t[s.toLowerCase()];r&&(i=i.filter((function(t){var e=t.key;return-1===r.indexOf(e)})))}t.filters[a]={filter:s,options:i,isSpec:n};var o=t.selectedOptions[s]?t.selectedOptions[s].filter((function(t){return i.find((function(e){return e.key===t}))})):[];t.$set(t.selectedOptions,s,o)}e.push(a)};s("Brands",this.ecomSearch.getBrands()),s("Categories",this.ecomSearch.getCategories()),this.ecomSearch.getSpecs().forEach((function(t,e){var i=t.key,n=t.options;s(i,n,!0)})),this.filters=this.filters.filter((function(t,s){return e.includes(s)})),this.searchFilterId=Date.now()},handleSuggestions:function(){var t=this;if(this.term){var e=this.ecomSearch,s=this.term.toLowerCase(),i=s,n=!1;this.suggestedTerm="",e.getTermSuggestions().forEach((function(e){var a=e.options,r=e.text;if(a.length){var o=a[0],c=o.text.toLowerCase();!t.totalSearchResults&&t.autoFixScore>0&&o.score>=t.autoFixScore&&-1===c.indexOf(s)&&(n=!0),i=i.replace(new RegExp(r,"i"),c)}})),this.keepNoResultsTerm?this.keepNoResultsTerm=!1:this.noResultsTerm="",i!==s&&(n?(this.noResultsTerm=s,this.keepNoResultsTerm=!0,this.$emit("update:term",i)):this.suggestedTerm=i,e.history.shift())}},handleSearchResult:function(){var t=this,e=this.ecomSearch;this.totalSearchResults=e.getTotalCount(),this.resultItems=this.isLoadingMore?this.resultItems.concat(e.getItems()):e.getItems(),this.updateFilters(),this.handleSuggestions(),this.totalSearchResults||!this.hasPopularItems||this.hasSetPopularItems||this.fetchItems(!1,!0),this.$emit(this.isLoadingMore?"load-more":"search",{ecomSearch:e}),this.hasSearched||this.$nextTick((function(){setTimeout((function(){t.hasSearched=!0}),100)}))},scheduleFetch:function(){var t=this;this.isScheduled||(this.isScheduled=!0,this.$nextTick((function(){setTimeout((function(){t.fetchItems(),t.isScheduled=!1}),30)})))},resetAndFetch:function(){p(this),this.handlePresetedOptions(),this.scheduleFetch()},toggleFilters:function(t){this.isAsideVisible="boolean"==typeof t?t:!this.isAsideVisible},getFilterLabel:function(t){switch(t){case"Brands":return Object(n.i18n)(i.e);case"Categories":return Object(n.i18n)(i.i);default:if(this.gridsData){var e=this.gridsData.find((function(e){return e.grid_id===t}));if(e)return e.title||e.grid_id}}return t},handlePresetedOptions:function(){var t=this;["brands","categories"].forEach((function(e){if(t[e]&&t[e].length){var s=e.charAt(0).toUpperCase()+e.slice(1);t["isFixed".concat(s)]||(t.selectedOptions[s]=t[e]),t.updateSearchFilter(s)}}))},updateSearchFilter:function(t){var e=this.ecomSearch,s=this.selectedOptions[t];switch(void 0!==s&&s.length||(s=null),t){case"Brands":this.isFixedBrands&&this.brands&&(s=s?s.concat(this.brands):this.brands),e.setBrandNames(s);break;case"Categories":e.setCategoryNames(s),this.isFixedCategories&&this.categories&&e.mergeFilter({terms:{"categories.name":this.categories}});break;default:e.setSpec(t,s)}},setFilterOption:function(t,e,s){var i=this.selectedOptions[t];if(s)this.lastSelectedFilter=t,i.push(e);else{var n=i.indexOf(e);n>-1&&i.splice(n,1),i.length||this.lastSelectedFilter!==t||(this.lastSelectedFilter=null)}this.updateSearchFilter(t),this.scheduleFetch()},clearFilters:function(){var t=this.selectedOptions;for(var e in t)t[e]&&(t[e]=[],this.updateSearchFilter(e));this.fetchItems()},setSortOrder:function(t){this.selectedSortOption=t,this.ecomSearch.setSortOrder(t),this.page>1?this.page=1:this.scheduleFetch()}},watch:{term:function(){this.resetAndFetch()},brands:function(){this.resetAndFetch()},categories:function(){this.resetAndFetch()},page:function(t){this.ecomSearch.setPageNumber(t),this.scheduleFetch()},isSearching:function(t){var e=this;!t&&this.loadObserver&&this.$nextTick((function(){e.loadObserver.observe()}))}},created:function(){p(this),this.handlePresetedOptions(),this.fetchItems()}},m=(s(433),s(43)),_=Object(m.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"search-engine"},[s("a-backdrop",{attrs:{"is-visible":t.isAsideVisible},on:{"update:isVisible":function(e){t.isAsideVisible=e},"update:is-visible":function(e){t.isAsideVisible=e}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[s("aside",{directives:[{name:"show",rawName:"v-show",value:t.isAsideVisible,expression:"isAsideVisible"}],staticClass:"search-engine__aside card shadow"},[t._t("filters",[s("header",{staticClass:"card-header"},[t._v("\n          "+t._s(t.i19refineSearch)+"\n          "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19closeFilters},on:{click:t.toggleFilters}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{key:t.searchFilterId,staticClass:"card-body"},t._l(t.filters,(function(e,i){var n=e.filter,a=e.options,r=e.isSpec;return a.length?s("div",{key:"filters-"+n,staticClass:"search-engine__filter",class:"search-engine__filter--"+n},[t._o([s("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-"+n,"aria-expanded":i<5?"true":"false","aria-controls":"collapse-"+n}},[s("i",{staticClass:"fas fa-chevron-down"}),t._v(" "),s("i",{staticClass:"fas fa-chevron-up"}),t._v("\n                "+t._s(t.getFilterLabel(n))+"\n              ")]),t._v(" "),s("div",{staticClass:"collapse",class:i<5?"show":null,attrs:{id:"collapse-"+n}},t._l(a,(function(e,i){return s("div",{key:n+"-"+i,staticClass:"search-engine__option custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:n+"-"+i},domProps:{checked:t.selectedOptions[n].indexOf(e.key)>-1},on:{change:function(s){return t.setFilterOption(n,e.key,s.target.checked)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:n+"-"+i}},[t._v("\n                    "+t._s(e.key)+"\n                    "),r?t._e():s("small",[t._v("\n                      ("+t._s(e.doc_count)+")\n                    ")])])])})),0)],0,"filters-"+n)],2):t._e()})),0),t._v(" "),s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:t.clearFilters}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-trash-alt"})]),t._v("\n            "+t._s(t.i19clearFilters)+"\n          ")])])])],2)]),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slower","leave-active-class":"animated fadeOutRight"}},[t.isNavVisible&&t.hasFilters?s("button",{staticClass:"search-engine__aside-open btn btn-secondary",attrs:{type:"button","aria-label":t.i19filterResults,disabled:t.isSearching},on:{click:function(e){return t.toggleFilters(!0)}}},[t.isSearching?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):s("span",[s("span",{staticClass:"d-none d-md-inline"},[s("i",{staticClass:"fas fa-search"})]),t._v(" "),s("i",{staticClass:"fas fa-filter"})])]):t._e()]),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast position-absolute"}},[t.isNavVisible?s("div",{staticClass:"search-engine__nav"},[s("div",{staticClass:"container"},[t._t("nav",[s("div",{staticClass:"search-engine__count"},[s("strong",[t._v(t._s(t.totalSearchResults))]),t._v("\n            "+t._s(t.i19itemsFound)+"\n            "),t.isSearching?s("div",{staticClass:"search-engine__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()]),t._v(" "),t.isFilterable?s("div",{staticClass:"search-engine__toggles"},[t.hasFilters?s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.toggleFilters(!0)}}},[s("i",{staticClass:"fas fa-filter mr-1"}),t._v(" "),s("span",{staticClass:"d-none d-md-inline"},[t._v("\n                "+t._s(t.i19filterResults)+"\n              ")]),t._v(" "),s("span",{staticClass:"d-md-none"},[t._v("\n                "+t._s(t.i19filter)+"\n              ")])]):t._e(),t._v(" "),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"search-engine-sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-sort mr-1"}),t._v("\n                "+t._s(t.i19sort)+"\n              ")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"search-engine-sort"}},t._l(t.sortOptions,(function(e,i){var n=e.value,a=e.label;return s("a",{key:"sort-"+i,staticClass:"dropdown-item",attrs:{href:"#",active:t.selectedSortOption===n},on:{click:function(e){return e.preventDefault(),t.setSortOrder(n)}}},[t._v("\n                  "+t._s(a)+"\n                ")])})),0)])]):t._e()],null,{totalSearchResults:t.totalSearchResults,toggleFilters:t.toggleFilters})],2)]):t._e()]),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.isResultsVisible?s("div",{staticClass:"search-engine__results fade",style:{opacity:t.isSearching&&!t.isLoadingMore?.4:1}},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-engine__info px-lg-4"},[t.term?[t.hasEmptyResult?s("div",{staticClass:"search-engine__no-results"},[s("div",{staticClass:"lead mb-2"},[t.suggestedTerm?s("span",[t._v("\n                  "+t._s(t.i19didYouMean)+"\n                  "),s("a",{attrs:{href:"#"},domProps:{textContent:t._s(t.suggestedTerm)},on:{click:function(e){return e.preventDefault(),t.$emit("update:term",t.suggestedTerm)}}}),t._v("\n                  ?\n                ")]):t._e(),t._v("\n                "+t._s(t.i19noResultsFor)+"\n                "),s("em",[t._v(t._s(t.term))])]),t._v(" "),t.popularItems.length?s("h4",[t._v("\n                "+t._s(t.i19popularProducts)+"\n              ")]):t._e()]):s("div",{staticClass:"search-engine__terms"},[t.noResultsTerm?s("span",{staticClass:"d-none d-lg-inline"},[t._v("\n                "+t._s(t.i19noResultsFor)+"\n                "),s("s",[t._v(t._s(t.noResultsTerm))]),t._v(".\n              ")]):t._e(),t._v(" "),s("span",{staticClass:"d-none d-md-inline"},[t._v("\n                "+t._s(t.i19searchingFor)+":\n              ")]),t._v(" "),s("h1",[t._v(t._s(t.term))])])]:t.popularItems.length?s("h3",[t._v("\n            "+t._s(t.i19popularProducts)+"\n          ")]):t._e(),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[t.hasSelectedOptions&&t.isFilterable?s("div",[s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.clearFilters}},[s("i",{staticClass:"fas fa-trash-alt mr-1"}),t._v("\n                "+t._s(t.i19clearFilters)+"\n              ")]),t._v(" "),t._l(t.selectedOptions,(function(e,i){return t._l(e,(function(e){return s("button",{staticClass:"search-engine__selected btn btn-sm btn-light",attrs:{type:"button"},on:{click:function(s){return t.setFilterOption(i,e,!1)}}},[s("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  "+t._s(e)+"\n                  "),s("small",[t._v(t._s(t.getFilterLabel(i)))])])}))}))],2):t._e()])],2),t._v(" "),t.canShowItems?s("article",{staticClass:"search-engine__retail"},[s("div",{staticClass:"row"},t._l(t.suggestedItems,(function(e){return s("div",{key:e._id,staticClass:"col-6 col-md-4 col-lg-3"},[t._t("product-card",[s("product-card",t._b({staticClass:"search-engine__item",attrs:{product:e}},"product-card",t.productCardProps,!1))],null,{product:e})],2)})),0)]):t._e(),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasNetworkError?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("i",{staticClass:"fas fa-wifi mr-2"}),t._v("\n            "+t._s(t.i19searchOfflineErrorMsg)+"\n            "),s("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.fetchItems(e)}}},[t._v("\n              "+t._s(t.i19searchAgain)+"\n            ")])]):t._e()])],1)]):t._e()]),t._v(" "),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[!t.hasSearched||t.isLoadingMore?t._t("default"):t._e()],2),t._v(" "),s(t.loadMoreSelector?"portal":"div",{tag:"component",attrs:{selector:t.loadMoreSelector}},[t.resultItems.length<t.totalSearchResults?s("div",{key:t.lastRequestId,staticStyle:{width:"100%","margin-top":"20px",height:"5px"},attrs:{id:"search-engine-load-more"}}):t._e()])],1)}),[],!1,null,null,null).exports,b={name:"InstantSearch",components:{ABackdrop:a.a,SearchEngine:_},props:{term:{type:String,default:""},isVisible:{type:Boolean,default:!0},pageSize:{type:Number,default:8},autoFixScore:{type:Number,default:.83},searchEngineProps:Object,productCardProps:{type:Object,default:function(){return{isSmall:!0}}}},data:function(){return{localTerm:this.term,searchTriggerTimer:null,searchTerm:"",history:[],totalSearchResults:0,isSearching:!1,hasSearched:!1}},computed:{i19close:function(){return Object(n.i18n)(i.k)},i19items:function(){return Object(n.i18n)(i.z)},i19search:function(){return Object(n.i18n)(i.Z)},i19searchProducts:function(){return Object(n.i18n)(i.cb)},i19seeAll:function(){return Object(n.i18n)(i.eb)}},methods:{hide:function(){this.$emit("update:is-visible",!1)},setSearchTerm:function(t){var e=this.$el.parentElement;if(e&&"FORM"===e.tagName){for(var s=e.elements,i=0;i<s.length;i++)if("term"===s[i].name){s[i].value=t;break}e.submit()}else this.localTerm=t},handleFetching:function(t){var e=this,s=t.fetching;this.isSearching=!0,s.finally((function(){e.isSearching=!1}))},handleSearch:function(t){var e=this,s=t.ecomSearch;this.totalSearchResults=s.getTotalCount(),this.history=s.history.filter((function(t){return t.length>2&&-1===e.localTerm.indexOf(t)})).slice(0,6),this.hasSearched||(this.hasSearched=!0)}},watch:{isVisible:{handler:function(t){var e=this;t&&this.$nextTick((function(){e.$refs.input&&e.$refs.input.focus()}))},immediate:!0},localTerm:{handler:function(t){var e=this,s=t.length>2?t:"";s!==this.searchTerm&&(clearTimeout(this.searchTriggerTimer),this.searchTriggerTimer=setTimeout((function(){e.searchTerm=s}),400)),this.$emit("update:term",t)},immediate:!0}}},v=(s(434),{name:"DemoInstantSearch",components:{InstantSearch:Object(m.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[t.isVisible||t.hasSearched?s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"search__box card"},[t._t("header",[s("header",{staticClass:"search__header card-header"},[s("div",{staticClass:"search__input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localTerm,expression:"localTerm"}],ref:"input",staticClass:"search__input form-control form-control-lg",attrs:{type:"search",autocomplete:"off",placeholder:t.i19searchProducts},domProps:{value:t.localTerm},on:{input:function(e){e.target.composing||(t.localTerm=e.target.value)}}}),t._v(" "),s("button",{staticClass:"search__submit",attrs:{type:"submit","aria-label":t.i19search}},[s("i",{staticClass:"fas fa-search"})])]),t._v(" "),s("div",{staticClass:"search__status"},[t.isSearching?s("div",{staticClass:"search__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[s("i",{staticClass:"fas fa-times-circle"})])])])],null,{isSearching:t.isSearching}),t._v(" "),s("article",{staticClass:"search__body card-body"},[t._t("search-engine",[s("SearchEngine",t._b({attrs:{term:t.searchTerm,"is-filterable":!1,"product-card-props":t.productCardProps},on:{"update:term":function(e){t.searchTerm=e},fetch:t.handleFetching,search:t.handleSearch}},"SearchEngine",Object.assign({},t.searchEngineProps,{pageSize:t.pageSize,autoFixScore:t.autoFixScore}),!1),[s("div",{staticClass:"search__loading spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])],null,{term:t.searchTerm})],2),t._v(" "),s("footer",{staticClass:"search__footer card-footer"},[t._t("count-results",[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasSearched?s("div",{staticClass:"search__count"},[s("strong",[t._v(t._s(t.totalSearchResults))]),t._v("\n              "+t._s(t.i19items.toLowerCase())+"\n              "),t.totalSearchResults>t.pageSize?s("button",{staticClass:"ml-2 btn btn-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t.i19seeAll)+"\n              ")]):t._e()]):t._e()])],null,{hasSearched:t.hasSearched,totalSearchResults:t.totalSearchResults}),t._v(" "),t._t("history",[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.history.length?s("div",{staticClass:"search__history d-none d-lg-block"},[s("i",{staticClass:"fas fa-history"}),t._v(" "),t._l(t.history,(function(e){return s("a",{staticClass:"search__history-link",attrs:{href:"#"},domProps:{textContent:t._s(e)},on:{click:function(s){return s.preventDefault(),t.setSearchTerm(e)}}})}))],2):t._e()])],null,{history:t.history})],2)],2):t._e()])],1)}),[],!1,null,null,null).exports},data:function(){return{isVisible:!1}}}),g=Object(m.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo"},[s("button",{staticClass:"btn btn-primary my-4",attrs:{type:"button"},on:{click:function(e){t.isVisible=!0}}},[t._v("\n    Click here to search products\n  ")]),t._v(" "),s("InstantSearch",{attrs:{"is-visible":t.isVisible},on:{"update:isVisible":function(e){t.isVisible=e},"update:is-visible":function(e){t.isVisible=e}}})],1)}),[],!1,null,null,null);e.default=g.exports}}]);