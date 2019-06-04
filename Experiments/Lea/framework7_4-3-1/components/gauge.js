(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var n=e.$,a=(e.Template7,e.utils),o=(e.device,e.support,e.Class),r=(e.Modal,e.ConstructorMethods),i=(e.ModalMethods,function(e){function t(t,o){void 0===o&&(o={}),e.call(this,t,o);var r=a.extend({},t.params.gauge);this.useModulesParams(r),this.params=a.extend(r,o);var i=this.params.el;if(!i)return this;var l=n(i);return 0===l.length?this:l[0].f7Gauge?l[0].f7Gauge:(a.extend(this,{app:t,$el:l,el:l&&l[0]}),l[0].f7Gauge=this,this.useModules(),this.init(),this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.calcRadius=function(){var e=this.params;return e.size/2-e.borderWidth/2},t.prototype.calcBorderLength=function(){var e=this.calcRadius();return 2*Math.PI*e},t.prototype.render=function(){if(this.params.render)return this.params.render.call(this,this);var e=this.params,t=e.type,n=e.value,a=e.size,o=e.bgColor,r=e.borderBgColor,i=e.borderColor,l=e.borderWidth,s=e.valueText,u=e.valueTextColor,d=e.valueFontSize,g=e.valueFontWeight,c=e.labelText,f=e.labelTextColor,h=e.labelFontSize,p=e.labelFontWeight,v="semicircle"===t,x=this.calcRadius(),m=this.calcBorderLength(),b=Math.max(Math.min(n,1),0);return('\n      <svg class="gauge-svg" width="'+a+'px" height="'+(v?a/2:a)+'px" viewBox="0 0 '+a+" "+(v?a/2:a)+'">\n        '+(v?'\n          <path\n            class="gauge-back-semi"\n            d="M'+(a-l/2)+","+a/2+" a1,1 0 0,0 -"+(a-l)+',0"\n            stroke="'+r+'"\n            stroke-width="'+l+'"\n            fill="'+(o||"none")+'"\n          />\n          <path\n            class="gauge-front-semi"\n            d="M'+(a-l/2)+","+a/2+" a1,1 0 0,0 -"+(a-l)+',0"\n            stroke="'+i+'"\n            stroke-width="'+l+'"\n            stroke-dasharray="'+m/2+'"\n            stroke-dashoffset="'+m/2*(1+b)+'"\n            fill="'+(r?"none":o||"none")+'"\n          />\n        ':"\n          "+(r?'\n            <circle\n              class="gauge-back-circle"\n              stroke="'+r+'"\n              stroke-width="'+l+'"\n              fill="'+(o||"none")+'"\n              cx="'+a/2+'"\n              cy="'+a/2+'"\n              r="'+x+'"\n            ></circle>\n          ':"")+'\n          <circle\n            class="gauge-front-circle"\n            transform="rotate(-90 '+a/2+" "+a/2+')"\n            stroke="'+i+'"\n            stroke-width="'+l+'"\n            stroke-dasharray="'+m+'"\n            stroke-dashoffset="'+m*(1-b)+'"\n            fill="'+(r?"none":o||"none")+'"\n            cx="'+a/2+'"\n            cy="'+a/2+'"\n            r="'+x+'"\n          ></circle>\n        ')+"\n        "+(s?'\n          <text\n            class="gauge-value-text"\n            x="50%"\n            y="'+(v?"100%":"50%")+'"\n            font-weight="'+g+'"\n            font-size="'+d+'"\n            fill="'+u+'"\n            dy="'+(v?c?-h-15:-5:0)+'"\n            text-anchor="middle"\n            dominant-baseline="'+(!v&&"middle")+'"\n          >'+s+"</text>\n        ":"")+"\n        "+(c?'\n          <text\n            class="gauge-label-text"\n            x="50%"\n            y="'+(v?"100%":"50%")+'"\n            font-weight="'+p+'"\n            font-size="'+h+'"\n            fill="'+f+'"\n            dy="'+(v?-5:s?d/2+10:0)+'"\n            text-anchor="middle"\n            dominant-baseline="'+(!v&&"middle")+'"\n          >'+c+"</text>\n        ":"")+"\n      </svg>\n    ").trim()},t.prototype.update=function(e){void 0===e&&(e={});var t=this.params,n=this.$gaugeSvgEl;if(Object.keys(e).forEach(function(n){void 0!==e[n]&&(t[n]=e[n])}),0===n.length)return this;var a=t.value,o=t.size,r=t.bgColor,i=t.borderBgColor,l=t.borderColor,s=t.borderWidth,u=t.valueText,d=t.valueTextColor,g=t.valueFontSize,c=t.valueFontWeight,f=t.labelText,h=t.labelTextColor,p=t.labelFontSize,v=t.labelFontWeight,x=this.calcBorderLength(),m=Math.max(Math.min(a,1),0),b=this.calcRadius(),y="semicircle"===t.type,k={width:o+"px",height:(y?o/2:o)+"px",viewBox:"0 0 "+o+" "+(y?o/2:o)};if(Object.keys(k).forEach(function(e){n.attr(e,k[e])}),y){var w={d:"M"+(o-s/2)+","+o/2+" a1,1 0 0,0 -"+(o-s)+",0",stroke:i,"stroke-width":s,fill:r||"none"},C={d:"M"+(o-s/2)+","+o/2+" a1,1 0 0,0 -"+(o-s)+",0",stroke:l,"stroke-width":s,"stroke-dasharray":x/2,"stroke-dashoffset":x/2*(m-1),fill:i?"none":r||"none"};Object.keys(w).forEach(function(e){n.find(".gauge-back-semi").attr(e,w[e])}),Object.keys(C).forEach(function(e){n.find(".gauge-front-semi").attr(e,C[e])})}else{var M={stroke:i,"stroke-width":s,fill:r||"none",cx:o/2,cy:o/2,r:b},z={transform:"rotate(-90 "+o/2+" "+o/2+")",stroke:l,"stroke-width":s,"stroke-dasharray":x,"stroke-dashoffset":x*(1-m),fill:i?"none":r||"none",cx:o/2,cy:o/2,r:b};Object.keys(M).forEach(function(e){n.find(".gauge-back-circle").attr(e,M[e])}),Object.keys(z).forEach(function(e){n.find(".gauge-front-circle").attr(e,z[e])})}if(u){n.find(".gauge-value-text").length||n.append('<text class="gauge-value-text"></text>');var G={x:"50%",y:y?"100%":"50%","font-weight":c,"font-size":g,fill:d,dy:y?f?-p-15:-5:0,"text-anchor":"middle","dominant-baseline":!y&&"middle"};Object.keys(G).forEach(function(e){n.find(".gauge-value-text").attr(e,G[e])}),n.find(".gauge-value-text").text(u)}else n.find(".gauge-value-text").remove();if(f){n.find(".gauge-label-text").length||n.append('<text class="gauge-label-text"></text>');var T={x:"50%",y:y?"100%":"50%","font-weight":v,"font-size":p,fill:h,dy:y?-5:u?g/2+10:0,"text-anchor":"middle","dominant-baseline":!y&&"middle"};Object.keys(T).forEach(function(e){n.find(".gauge-label-text").attr(e,T[e])}),n.find(".gauge-label-text").text(f)}else n.find(".gauge-label-text").remove();return this},t.prototype.init=function(){var e=n(this.render()).eq(0);return e.f7Gauge=this,a.extend(this,{$gaugeSvgEl:e,gaugeSvgEl:e&&e[0]}),this.$el.append(e),this},t.prototype.destroy=function(){this.$el&&!this.destroyed&&(this.$el.trigger("gauge:beforedestroy",this),this.emit("local::beforeDestroy gaugeBeforeDestroy",this),this.$gaugeSvgEl.remove(),delete this.$el[0].f7Gauge,a.deleteProps(this),this.destroyed=!0)},t}(o)),l={name:"gauge",static:{Gauge:i},create:function(){var e=this;e.gauge=r({defaultSelector:".gauge",constructor:i,app:e,domProp:"f7Gauge"}),e.gauge.update=function(t,a){if(0!==n(t).length){var o=e.gauge.get(t);if(o)return o.update(a),o}}},params:{gauge:{el:null,type:"circle",value:0,size:200,bgColor:"transparent",borderBgColor:"#eeeeee",borderColor:"#000000",borderWidth:10,valueText:null,valueTextColor:"#000000",valueFontSize:31,valueFontWeight:500,labelText:null,labelTextColor:"#888888",labelFontSize:14,labelFontWeight:400}},on:{tabMounted:function(e){var t=this;n(e).find(".gauge-init").each(function(e,o){t.gauge.create(a.extend({el:o},n(o).dataset()||{}))})},tabBeforeRemove:function(e){n(e).find(".gauge-init").each(function(e,t){t.f7Gauge&&t.f7Gauge.destroy()})},pageInit:function(e){var t=this;e.$el.find(".gauge-init").each(function(e,o){t.gauge.create(a.extend({el:o},n(o).dataset()||{}))})},pageBeforeRemove:function(e){e.$el.find(".gauge-init").each(function(e,t){t.f7Gauge&&t.f7Gauge.destroy()})}},vnode:{"gauge-init":{insert:function(e){var t=e.elm;this.gauge.create(a.extend({el:t},n(t).dataset()||{}))},destroy:function(e){var t=e.elm;t.f7Gauge&&t.f7Gauge.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[l.name])return;e.use(l),e.instance&&(e.instance.useModuleParams(l,e.instance.params),e.instance.useModule(l))}return l}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
