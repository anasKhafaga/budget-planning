!function(n){function e(e){for(var i,a,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(d&&d(e);p.length;)p.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var i={},o={2:0},r=[];function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;r.push([122,3,0]),t()}({122:function(n,e,t){t(123),n.exports=t(316)},309:function(n,e,t){var i=t(310),o=t(311);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1},a=(i(n.i,o,r),o.locals?o.locals:{});n.exports=a},311:function(n,e,t){(e=t(312)(!1)).push([n.i,"/**********************************************\n*** GENERAL\n**********************************************/\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    color: #555;\n    font-family: Open Sans;\n    position: relative;\n    height: 100vh;\n    font-weight: 400;\n}\n\n.right {\n    align-self: flex-end;\n    display: flex;\n}\n\n.red {\n    color: #FF5049 !important;\n}\n\n.red-focus:focus {\n    border: 1px solid #FF5049 !important;\n}\n\n/**********************************************\n*** TOP PART\n**********************************************/\n\n.top {\n    height: 40vh;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n}\n\n.budget {\n    position: absolute;\n    width: 30%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n}\n\n.budget__title {\n    font-size: 1.125rem;\n    text-align: center;\n    margin-bottom: 10px;\n    font-weight: 300;\n}\n\n.budget__value {\n    font-weight: 300;\n    font-size: 2.875rem;\n    text-align: center;\n    margin-bottom: 1.6rem;\n    letter-spacing: 2px;\n}\n\n.budget__income,\n.budget__expenses {\n    padding: 0.75rem;\n    text-transform: uppercase;\n}\n\n.budget__income {\n    margin-bottom: 0.625rem;\n    background-color: #28B9B5;\n    display: flex;\n    justify-content: space-between;\n}\n\n.budget__expenses {\n    background-color: #FF5049;\n    display: flex;\n    justify-content: space-between;\n}\n\n.budget__income--text,\n.budget__expenses--text {\n    font-size: 0.9rem;\n    color: #444;\n    margin-top: 2px;\n}\n\n.budget__income--value,\n.budget__expenses--value {\n    letter-spacing: 1px;\n    float: left;\n}\n\n\n\n\n\n\n/**********************************************\n*** BOTTOM PART\n**********************************************/\n\n/***** FORM *****/\n.add {\n    padding: 0.875rem;\n    border-bottom: 1px solid #e7e7e7;\n    background-color: #f7f7f7;\n}\n\n.add__container {\n    margin: 0 auto;\n    text-align: center;\n}\n\n.add__type {\n    width: 3.5rem;\n    border: 1px solid #e7e7e7;\n    height: 2.75rem;\n    font-size: 1.125rem;\n    color: inherit;\n    background-color: #fff;\n    margin-right: 0.625rem;\n    font-weight: 300;\n    transition: border 0.3s;\n}\n\n.add__description,\n.add__value {\n    border: 1px solid #e7e7e7;\n    background-color: #fff;\n    color: inherit;\n    font-family: inherit;\n    font-size: 0.875rem;\n    padding: 0.75rem 1rem;\n    margin-right: 10px;\n    border-radius: 5px;\n    transition: border 0.3s;\n}\n\n.add__description {\n    width: 50%;\n}\n\n.add__value {\n    width: 6.25rem;\n}\n\n.add__btn {\n    font-size: 2.2rem;\n    background: none;\n    border: none;\n    color: #28B9B5;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 1.1;\n    margin-left: 10px;\n}\n\n.add__btn:active {\n    transform: translateY(2px);\n}\n\n.add__type:focus,\n.add__description:focus,\n.add__value:focus {\n    outline: none;\n    border: 1px solid #28B9B5;\n}\n\n.add__btn:focus {\n    outline: none;\n}\n\n/***** LISTS *****/\n.container {\n    width: 80%;\n    margin: 3.75rem auto;\n    display: flex;\n    justify-content: space-between;\n    align-content: flex-start;\n    flex-flow: row wrap;\n    padding: 0 3rem;\n}\n\n.income {\n    width: 45%;\n}\n\n.expenses {\n    width: 45%;\n}\n\nh2 {\n    text-transform: uppercase;\n    font-size: 1.125rem;\n    font-weight: 400;\n    margin-bottom: 1rem;\n}\n\n.icome__title {\n    color: #28B9B5;\n}\n\n.expenses__title {\n    color: #FF5049;\n}\n\n.item {\n    padding: 0.8rem 0;\n    border-bottom: 1px solid #e7e7e7;\n    display: flex;\n    justify-content: space-between;\n}\n\n.item:first-child {\n    border-top: 1px solid #e7e7e7;\n}\n\n.item:nth-child(even) {\n    background-color: #f7f7f7;\n}\n\n.item__description {\n    align-self: flex-start;\n}\n\n.item__value {\n    align-self: flex-start;\n    transition: transform 0.3s;\n}\n\n\n\n.income .item__value,\n.income .item__delete--btn {\n    color: #28B9B5;\n}\n\n.expenses .item__value,\n.expenses .item__delete--btn {\n    color: #FF5049;\n}\n\n\n.item__delete {\n    align-self: flex-end;\n}\n\n.item__delete--btn {\n    font-size: 1.3rem;\n    background: none;\n    border: none;\n    cursor: pointer;\n    vertical-align: middle;\n    line-height: 1;\n    display: none;\n}\n\n.item__delete--btn:focus {\n    outline: none;\n}\n\n.item__delete--btn:active {\n    transform: translateY(2px);\n}\n\n.item:hover .item__delete--btn {\n    display: block;\n}\n\n.item:hover .item__value {\n    transform: translateX(-1rem);\n}\n\n.unpaid {\n    background-color: #FFDAD9 !important;\n    cursor: pointer;\n    color: #FF5049;\n\n}\n\n.unpaid:hover .item__description {\n    font-weight: 900;\n}\n\n.foot {\n    padding: 0.8rem 3rem;\n    border-top: 1px solid #e7e7e7;\n    width: 100%;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: space-between;\n    position: fixed;\n    bottom: 0;\n}\n\n.copyright {\n    font-size: 0.9rem;\n}\n\n\n@media (min-width: 768px) and (max-width: 1024px) {\n    html {\n        font-size: 18px;\n    }\n\n    .budget {\n        width: 50%;\n    }\n\n    .container {\n        padding: 0;\n    }\n\n    .item__delete--btn {\n        margin-left: 0.4rem;\n    }\n\n    .item__delete--btn {\n        display: inline-block;\n    }\n\n    .item:hover .item__value {\n        transform: none;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) and (max-height: 767px) {\n    html {\n        font-size: 16px;\n    }\n\n    .item__delete--btn {\n        margin-left: 0.4rem;\n    }\n\n    .item__delete--btn {\n        display: inline-block;\n    }\n\n    .item:hover .item__value {\n        transform: none;\n    }\n\n    .top {\n        height: 80vh;\n    }\n}\n\n@media (min-width: 320px) and (max-width: 767px){\n    html {\n        font-size: 14px;\n    }\n\n    .budget {\n        width: 80%;\n    }\n\n    .item__delete--btn {\n        margin-left: 0.4rem;\n    }\n\n    .item__delete--btn {\n        display: inline-block;\n    }\n\n    .item:hover .item__value {\n        transform: none;\n    }\n\n    .budget {\n        width: 80%;\n    }\n\n    .container {\n        display: block;\n        width: 100%;\n        padding: 0 2rem;\n    }\n\n    .income,\n    .expenses {\n        width: 100%;\n        margin-top: 0.5rem;\n    }\n\n    .income h2,\n    .expenses h2 {\n        text-align: center;\n    }\n\n    .add__container {\n        display: flex;\n        align-content: center;\n        justify-content: center;\n    }\n\n    .add__type {\n        margin: auto 1.25rem;\n        margin-left: 0;\n        width: 2rem;\n        font-size: 0.8rem;\n        height: 2rem;\n    }\n\n    .add__description,\n    .add__value {\n        padding: 0.3rem 0.7rem;\n    }\n\n    .add__value {\n        width: 3rem;\n    }\n\n    .foot {\n        font-size: 0.6rem;\n        padding: 0.8rem 1rem;\n    }\n    .copyright{\n        font-size: 0.7;\n    }\n}\n\n@media(max-height:450px){\n    .top{\n        height: 80vh;\n    }\n}",""]),n.exports=e},316:function(n,e,t){"use strict";t.r(e);t(309),t(313);var i,o={DOM:i={inputType:".add__type",inputDesc:".add__description",inputValue:".add__value",inputBtn:".add__btn",expList:".expenses__list",incList:".income__list",budValue:".budget__value",incs:".budget__income--value",exps:".budget__expenses--value",container:".container",del:"ion-ios-close-outline",month:".budget__title--month"},userInputs:function(){return{inputType:document.querySelector(i.inputType).value,inputDesc:document.querySelector(i.inputDesc).value,inputValue:parseFloat(document.querySelector(i.inputValue).value)}},clearFields:function(){var n=document.querySelectorAll("input"),e=Array.from(n);e.forEach((function(n){n.value="",e[0].focus(),console.log(e)}))}};function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}function l(n,e){return(l=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p,f,m,_,b,h,g=function(){var n=function n(e){return d(this,n),"exp"===e.TYPE?n.finances.eXp.push(e):"inc"===e.TYPE&&n.finances.iNc.push(e),e};u(n,"finances",{eXp:[],iNc:[]}),u(n,"totals",{sum:0,exp:0,inc:0}),u(n,"ids",[]);var e=function(n){function e(n,t,i,o){d(this,e);var r={ID:n,IDESC:t,IVALUE:i,TYPE:o};return a(this,c(e).call(this,r))}return s(e,n),e}(n),t=function(n){function e(n,t,i,o){d(this,e);var r={ID:n,IDESC:t,IVALUE:i,TYPE:o};return a(this,c(e).call(this,r))}return s(e,n),e}(n);return{Finances:n,addItem:function(i,o,r){var a,c;do{a=Math.round(1e3*Math.random())}while(n.ids.indexOf("e".concat(a))>-1);return n.ids.push("e".concat(a)),"exp"===i?c=new e("e".concat(a),o,r,i):"inc"===i&&(c=new t("e".concat(a),o,r,i)),c},calc:function(e){return e?("inc"===e.TYPE?(n.totals.sum+=e.IVALUE,n.totals.inc+=e.IVALUE):"exp"===e.TYPE&&(n.totals.sum-=e.IVALUE,n.totals.exp+=e.IVALUE),n):n}}}(),v=t(121);(p=g,m=(f=o).DOM,_=function(n){for(var e=0;e<4;e++)n=n.parentNode;var t,i=document.querySelector("#".concat(n.id)),o=p.calc(),r=o.ids.find((function(e){return n.id})),a=o.finances.iNc.find((function(e){return t="inc",e.ID===n.id}))||o.finances.eXp.find((function(e){return t="exp",e.ID===n.id}));if(o.ids.splice(o.ids.indexOf(r),1),"inc"===t){if(o.totals.sum-=a.IVALUE,console.log(o.totals.sum),o.totals.sum<0)return o.totals.sum+=a.IVALUE,alert("You can't remove this income before removing some expenses"),void console.log(o.totals.sum);o.totals.inc-=a.IVALUE,o.finances.iNc.splice(o.finances.iNc.indexOf(a),1)}else"exp"===t&&(o.totals.sum+=a.IVALUE,o.totals.exp-=a.IVALUE,o.finances.eXp.splice(o.finances.eXp.indexOf(a),1));h(o,a,"sub"),i.remove()},b=function(){var n=f.userInputs();if(!(""===n.inputDesc||isNaN(n.inputValue)||n.inputValue<=0))if("exp"===n.inputType&&n.inputValue>p.Finances.totals.sum)alert("Sorry, your balance isn't sufficient");else{var e,t,i=p.addItem(n.inputType,n.inputDesc,n.inputValue),o=p.calc(i);"inc"===i.TYPE?(e=m.incList,t='<div class="item" id="'.concat(i.ID,'">\n        <div class="item__description">').concat(i.IDESC,'</div>\n          <div class="right del">\n            <div class="item__value">+ ').concat(i.IVALUE,'</div>\n            <div class="item__delete">\n                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n            </div>\n          </div>\n          </div>')):"exp"===i.TYPE&&(e=m.expList,t='<div class="item" id="'.concat(i.ID,'">\n                            <div class="item__description">').concat(i.IDESC,'</div>\n                            <div class="right del">\n                                <div class="item__value">- ').concat(i.IVALUE,'</div>\n                                <div class="item__delete">\n                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n                                </div>\n                            </div>\n                        </div>')),document.querySelector(e).insertAdjacentHTML("beforeend",t),f.clearFields(),h(o,i,"add")}},h=function(n,e,t){document.querySelector(m.budValue).textContent="".concat(n.totals.sum),document.querySelector(m.incs).textContent="".concat(n.totals.inc),document.querySelector(m.exps).textContent="- ".concat(n.totals.exp)},{init:function(){console.log("it works"),Object(v.default)(),function(){var n,e=document.querySelector(m.month);switch((new Date).getMonth()){case 0:n="January ";break;case 1:n="February ";break;case 2:n="March ";break;case 3:n="April ";break;case 4:n="May ";break;case 5:n="June ";break;case 6:n="July ";break;case 7:n="August ";break;case 8:n="September ";break;case 9:n="October ";break;case 10:n="November ";break;case 11:n="December "}e.textContent=n}(),document.querySelector(m.inputBtn).addEventListener("click",b),document.addEventListener("keypress",(function(n){13!==n.keyCode&&13!==n.which||b()})),document.querySelector(m.container).addEventListener("click",(function(n){n.target.className===m.del&&_(n.target)}))}}).init()}});