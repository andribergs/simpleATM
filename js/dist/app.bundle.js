!function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,r){"use strict";function e(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}function a(t){var n=t,r=[],e=[],a=!0,i=!1,l=void 0;try{for(var u,f=c.notes[Symbol.iterator]();!(a=(u=f.next()).done);a=!0)for(var s=u.value;n>=s;)n>=s&&(r.push(s),n-=s)}catch(t){i=!0,l=t}finally{try{!a&&f.return&&f.return()}finally{if(i)throw l}}var d=!0,v=!1,m=void 0;try{for(var p,y=c.coins[Symbol.iterator]();!(d=(p=y.next()).done);d=!0)for(var h=p.value;n>=h.val;)n>=h.val&&(e.push(h.val),n-=h.val)}catch(t){v=!0,m=t}finally{try{!d&&y.return&&y.return()}finally{if(v)throw m}}o([].concat(r,e))}function o(t){var n=Math.min.apply(Math,e(c.notes)),r={},a=Array.from(new Set(t));t.forEach(function(t){r[t]=(r[t]||0)+1});var o=!0,i=!1,l=void 0;try{for(var u,f=function(){var t=u.value;if(t>=n)$("<li></li>").html("<span></span>"+r[t]+" x "+t).appendTo("#notes");else if(t<n){var e=c.coins.find(function(n){return n.val==t}).diameter;e>20?$("<li></li>").html("<span></span>"+r[t]+" x "+t).appendTo("#bigCoins"):$("<li></li>").html("<span></span>"+r[t]+" x "+t).appendTo("#smallCoins")}},s=a[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)f()}catch(t){i=!0,l=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw l}}}function i(t){var n=2,r=$("#amountField").val();Array.from("0123456789").indexOf(t)>-1?r.length<6&&(r.length==n&&"0"==t||($("#amountField").val(r+t),l(!0))):(r.length>n&&$("#amountField").val(r.slice(0,-1)),r.length-1==n&&l(!1))}function l(t){t?($("#submitButton").prop("disabled",!1),$("#submitButton").css("opacity","1.0")):($("#submitButton").prop("disabled",!0),$("#submitButton").css("opacity","0.5"))}function u(){var t=$("#amountField").val();return Number(t.slice(2))}$(document).ready(function(){$("#amountField").val("£ "),l(!1)}),$("#amountField").on("keydown keypress keyup mousedown mouseup",!1),$("#numberpad").on("click tap","li",function(t){var n=t.target,r=function(t,n,r){t.style.background=n,t.style.color=r};r(n,"white","#2bbed3"),setTimeout(function(){return r(n,"#2bbed3","white")},100),i(n.innerText)}),$("#submitButton").on("click",function(){var t=u();$("#amount").text("£ "+t),$("#amountField").val("£ "),l(!1),$(".withdrawal ul").empty(),$("#atmInterface").hide(),$("#withdrawalInterface").show(),a(t)}),$("#backButton").on("click",function(){$("#atmInterface").show(),$("#withdrawalInterface").hide()});var c={notes:[1e3,500,200,100,50],coins:[{val:20,diameter:40},{val:10,diameter:20},{val:5,diameter:50},{val:2,diameter:30},{val:1,diameter:10}]}}]);