(()=>{"use strict";let t=window.wc.wcBlocksRegistry,e=window.wp.i18n,a=window.wc.wcSettings,o=window.wp.htmlEntities,c=window.React,n=(0,a.getSetting)("cardgatesofortbanking_data",{}),l=(0,e.__)("SOFORT Banking","wc_payment_method_cardgatesofortbanking"),s=(0,o.decodeEntities)(n.title)||l,r=t=>{let[e,a]=(0,c.useState)(""),{eventRegistration:l,emitResponse:s}=t,{onPaymentSetup:r}=l;return c.useEffect(()=>{let e=(t,e)=>{var a,o,c="<span class='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value'>"+(e+t)+"</span>";jQuery(".wc-block-components-totals-footer-item .wc-block-formatted-money-amount:first").replaceWith(c)},a=(t,e)=>{var a,o,c="<span class='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value'>"+(e+t)+"</span>";jQuery("div.wp-block-woocommerce-checkout-order-summary-taxes-block.wc-block-components-totals-wrapper > div > span.wc-block-formatted-money-amount.wc-block-components-formatted-money-amount.wc-block-components-totals-item__value:first").replaceWith(c)};jQuery.ajax({url:n.feeUrl,method:"POST",data:{action:"wp_ajax_cardgate_checkout_fees",method:t.activePaymentMethod},complete:function t(e,a){},success:function t(o,c,n){let l=jQuery(".wc-block-components-totals-fees");if(o.data.amount){let s="<div class='wc-block-components-totals-item wc-block-components-totals-fees'><span class='wc-block-components-totals-item__label'>"+o.data.name+"</span><span class='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value'>"+o.data.currency+o.data.amount.toFixed(2)+"</span><div class='wc-block-components-totals-item__description'></div></div>";l.length?(l.replaceWith(s),e(o.data.newTotal.toFixed(2).replace(".",","),o.data.currency),a(o.data.totalTax.toFixed(2).replace(".",","),o.data.currency)):(jQuery(".wc-block-components-totals-item:first").after(s),e(o.data.newTotal.toFixed(2).replace(".",","),o.data.currency),a(o.data.totalTax.toFixed(2).replace(".",","),o.data.currency))}else null==l||l.hide(),e(o.data.newTotal.toFixed(2).replace(".",","),o.data.currency),a(o.data.totalTax.toFixed(2).replace(".",","),o.data.currency)},error:function t(e,a,o){console.warn(a,o)}})}),c.createElement("div",null,(0,o.decodeEntities)(n.description||""))},m={name:"cardgatesofortbanking",label:c.createElement(t=>{var e=c.createElement("img",{src:n.icon,width:28,height:24,style:{display:"inline"}});return n.show_icon||(e=null),c.createElement("span",{className:"wc-block-components-payment-method-label wc-block-components-payment-method-label--with-icon"},e,(0,o.decodeEntities)(n.title)||l)},null),content:c.createElement(r,null),edit:c.createElement(r,null),icons:null,canMakePayment:t=>!0,ariaLabel:s,supports:{features:c.supports}};(0,t.registerPaymentMethod)(m)})();