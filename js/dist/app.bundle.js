!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,r){"use strict";function e(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}function o(t){var n=t,r=[],e=[],o=!0,a=!1,u=void 0;try{for(var l,f=c.Notes[Symbol.iterator]();!(o=(l=f.next()).done);o=!0)for(var s=l.value;n>=s;)n>=s&&(r.push(s),n-=s)}catch(t){a=!0,u=t}finally{try{!o&&f.return&&f.return()}finally{if(a)throw u}}var d=!0,v=!1,m=void 0;try{for(var y,p=c.Coins[Symbol.iterator]();!(d=(y=p.next()).done);d=!0)for(var b=y.value;n>=b.val;)n>=b.val&&(e.push(b.val),n-=b.val)}catch(t){v=!0,m=t}finally{try{!d&&p.return&&p.return()}finally{if(v)throw m}}var h=[].concat(r,e);i(h),console.log(h),console.log(h.reduce(function(t,n){return t+n},0))}function i(t){var n=Math.min.apply(Math,e(c.Notes)),r=!0,o=!1,i=void 0;try{for(var a,u=function(){var t=a.value;if(t>=n)$("<li></li>").text(t).appendTo("#notes");else if(t<n){var r=c.Coins.find(function(n){return n.val==t}).diameter;r>20?$("<li></li>").text(t).appendTo("#bigCoins"):$("<li></li>").text(t).appendTo("#smallCoins")}},l=t[Symbol.iterator]();!(r=(a=l.next()).done);r=!0)u()}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}}function a(t){var n=2,r=$("#amountField").val();Array.from("0123456789").indexOf(t)>-1?r.length<6&&(r.length==n&&"0"==t||($("#amountField").val(r+t),u(!0))):(r.length>n&&$("#amountField").val(r.slice(0,-1)),r.length-1==n&&u(!1))}function u(t){t?($("#submitButton").prop("disabled",!1),$("#submitButton").css("opacity","1.0")):($("#submitButton").prop("disabled",!0),$("#submitButton").css("opacity","0.5"))}function l(){var t=$("#amountField").val();return Number(t.slice(2))}$(document).ready(function(){$("#amountField").val("£ "),u(!1)}),$("#amountField").on("keydown keypress keyup mousedown mouseup",!1),$("#numberpad").on("click","li",function(t){var n=t.target,r=function(t,n,r){t.style.background=n,t.style.color=r};r(n,"white","#2bbed3"),setTimeout(function(){return r(n,"#2bbed3","white")},100),a(n.innerText)}),$("#submitButton").on("click",function(){var t=l();$("#amount").text("£ "+t),o(t)});var c={Notes:[1e3,500,200,100,50],Coins:[{val:20,diameter:40},{val:10,diameter:20},{val:5,diameter:50},{val:2,diameter:30},{val:1,diameter:10}]}}]);