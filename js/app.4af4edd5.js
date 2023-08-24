(function(){"use strict";var e={9817:function(e,t,a){var r=a(9242),n=a(3396);function o(e,t,a,r,o,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i)])}var s={},i=a(89);const c=(0,i.Z)(s,[["render",o]]);var d=c,l=a(2483),p=(a(7658),a(7139)),u=a.p+"img/gear.ce59f09a.svg",g=a.p+"img/alert-triangle.97a4aab0.svg";const h=e=>((0,n.dD)("data-v-0fe216d9"),e=e(),(0,n.Cn)(),e),_=h((()=>(0,n._)("img",{src:u,alt:"settings icon"},null,-1))),m=[_],v={key:0},f=h((()=>(0,n._)("div",{class:"homepageWrapper__warning"},[(0,n._)("img",{src:g,alt:"No locations added warning"}),(0,n._)("span",null,"No locations added")],-1))),w=[f];function y(e,t,a,r,o,s){const i=(0,n.up)("WeatherCard");return(0,n.wg)(),(0,n.iD)("div",{class:(0,p.C_)(["homepageWrapper",{homepageWrapper_empty:0===e.locations.length}])},[(0,n._)("div",{class:"homepageWrapper__settings",onClick:t[0]||(t[0]=t=>e.$router.push("/settings"))},m),0===e.locations.length?((0,n.wg)(),(0,n.iD)("div",v,w)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(e.locations.slice(0,2),(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.name},[(0,n.Wm)(i,{weatherData:e},null,8,["weatherData"])])))),128))],2)}var D=a.p+"img/wind.06f36e74.svg",W=a.p+"img/pressure.943cf410.svg",b=a.p+"img/humidity.73c7d686.svg",S=a.p+"img/visibility.b11c3a8f.svg";const T={class:"cardWrapper"},k={class:"cardWrapper__header"},E={class:"cardWrapper__pic"},O=["src"],N={class:"cardWrapper__dateString"},C=(0,n._)("span",null,"|",-1),I={class:"cardWrapper__degValue"},L={class:"cardWrapper__description"},F=(0,n._)("hr",null,null,-1),x={class:"cardWrapper__details"},z={class:"cardWrapper__wind"},Q=(0,n._)("img",{class:"cardWrapper__detailsImage",src:D,alt:""},null,-1),M={class:"cardWrapper__detailsData"},Z={class:"cardWrapper__detailsText"},j=(0,n._)("span",null,"Wind",-1),P={class:"cardWrapper__pressure"},q=(0,n._)("img",{class:"cardWrapper__detailsImage",src:W,alt:""},null,-1),J={class:"cardWrapper__detailsData"},$={class:"cardWrapper__detailsText"},H=(0,n._)("span",null,"Pressure",-1),K={class:"cardWrapper__humidity"},Y=(0,n._)("img",{class:"cardWrapper__detailsImage",src:b,alt:""},null,-1),A={class:"cardWrapper__detailsData"},U={class:"cardWrapper__detailsText"},V=(0,n._)("span",null,"Humidity",-1),X={class:"cardWrapper__visibility"},B=(0,n._)("img",{class:"cardWrapper__detailsImage",src:S,alt:""},null,-1),G={class:"cardWrapper__detailsData"},R={class:"cardWrapper__detailsText"},ee=(0,n._)("span",null,"Visibility",-1);function te(e,t,a,r,o,s){return(0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",k,[(0,n._)("h1",null,(0,p.zw)(a.weatherData.name)+", "+(0,p.zw)(a.weatherData.country),1)]),(0,n._)("div",E,[(0,n._)("img",{src:`http://openweathermap.org/img/wn/${a.weatherData.image}@2x.png`,alt:"weather icon"},null,8,O)]),(0,n._)("div",N,[(0,n._)("span",null,(0,p.zw)(a.weatherData.date[0]),1),C,(0,n._)("span",null,(0,p.zw)(a.weatherData.date[1].trim()),1)]),(0,n._)("div",I,(0,p.zw)(a.weatherData.temperature)+"°C",1),(0,n._)("div",L," Feels like "+(0,p.zw)(a.weatherData.feelTemperature)+"°C. "+(0,p.zw)(a.weatherData.description)+". ",1),F,(0,n._)("div",x,[(0,n._)("div",z,[Q,(0,n._)("div",M,[(0,n._)("div",Z,[(0,n._)("span",null,(0,p.zw)(a.weatherData.windSpeed)+" m/s "+(0,p.zw)(a.weatherData.windDirection),1),j])])]),(0,n._)("div",P,[q,(0,n._)("div",J,[(0,n._)("div",$,[(0,n._)("span",null,(0,p.zw)(a.weatherData.pressure)+" hPa ",1),H])])]),(0,n._)("div",K,[Y,(0,n._)("div",A,[(0,n._)("div",U,[(0,n._)("span",null,(0,p.zw)(a.weatherData.humidity)+" % ",1),V])])]),(0,n._)("div",X,[B,(0,n._)("div",G,[(0,n._)("div",R,[(0,n._)("span",null,(0,p.zw)(a.weatherData.visibility)+" km",1),ee])])])])])}var ae={props:{weatherData:{type:Object,required:!0}}};const re=(0,i.Z)(ae,[["render",te]]);var ne=re,oe=a(65),se=(0,n.aZ)({components:{WeatherCard:ne},methods:{...(0,oe.OI)({setError:"setError"}),...(0,oe.nv)(["checkLocations"])},computed:{...(0,oe.rn)({dataFetched:e=>e.dataFetched,locations:e=>e.locations})},mounted(){this.checkLocations(),this.setError(!1)}});const ie=(0,i.Z)(se,[["render",y],["__scopeId","data-v-0fe216d9"]]);var ce=ie,de=a.p+"img/close.45285362.svg",le=a.p+"img/arrow-enter.fca1751f.svg";const pe={class:"settingsWrapper"},ue={class:"settingsWrapper__header"},ge=(0,n._)("span",null,"Settings",-1),he={class:"settingsWrapper__locationControl"},_e=(0,n._)("span",null,"Add location:",-1),me={class:"settingsWrapper__locationInput"},ve=["value"],fe=(0,n._)("img",{src:le,alt:"Enter arrow"},null,-1);function we(e,t,a,o,s,i){const c=(0,n.up)("LocationCard");return(0,n.wg)(),(0,n.iD)("div",pe,[(0,n._)("div",ue,[ge,(0,n._)("img",{src:de,alt:"Close icon",onClick:t[0]||(t[0]=t=>e.$router.push("/"))})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.locations,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"settingsWrapper__locations",key:a.id},[(0,n.Wm)(c,{id:a.id,city:a.name,country:a.country,onDragstart:t=>e.startDrag(t,a),onDrop:t=>e.onDrop(t,a),onDragenter:t[1]||(t[1]=(0,r.iM)((()=>{}),["prevent"])),onDragover:t[2]||(t[2]=(0,r.iM)((e=>e.currentTarget.style.background="darkgray"),["prevent"])),onDragleave:t[3]||(t[3]=e=>e.currentTarget.style.background="lightgray"),onTouchstart:t=>e.onTouchDragStart(t,a),onTouchmove:e.onTouchDragMove,onTouchend:t=>e.onTouchDrop(t,a)},null,8,["id","city","country","onDragstart","onDrop","onTouchstart","onTouchmove","onTouchend"])])))),128)),(0,n._)("div",he,[_e,(0,n._)("div",me,[(0,n._)("input",{type:"text",value:e.searchQuery,onInput:t[4]||(t[4]=t=>e.setSearchQuery(t.target.value)),autofocus:!0,onKeyup:t[5]||(t[5]=(0,r.D2)((t=>e.fetchWeather(e.searchQuery)),["enter"]))},null,40,ve),fe]),(0,n._)("div",{class:(0,p.C_)(["settingsWrapper__warnMessage",{settingsWrapper__warnMessage_active:e.errors&&""===e.searchQuery}])}," No matching locations! ",2)])])}var ye=a.p+"img/hamburger.700a5639.svg",De=a.p+"img/bin.cda13b96.svg";const We=["data-id"],be={class:"locationCardWrapper__content"},Se=(0,n._)("img",{src:ye,alt:"Drag icon",draggable:"false",class:"test"},null,-1);function Te(e,t,a,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"locationCardWrapper",draggable:"true","data-id":a.id},[(0,n._)("div",be,[Se,(0,n._)("span",null,(0,p.zw)(a.city)+", "+(0,p.zw)(a.country),1),(0,n._)("img",{class:"locationCardWrapper__remove",src:De,alt:"Waste bin icon",onClick:t[0]||(t[0]=t=>e.removeLocation(a.id))})])],8,We)}var ke={props:{id:{type:Number,required:!0},city:{type:String,required:!0},country:{type:String,required:!0}},methods:{...(0,oe.OI)({removeLocation:"removeLocation"})}};const Ee=(0,i.Z)(ke,[["render",Te]]);var Oe=Ee,Ne=(0,n.aZ)({components:{LocationCard:Oe},data(){return{dropOverID:null}},methods:{...(0,oe.OI)({setSearchQuery:"setSearchQuery",setError:"setError"}),...(0,oe.nv)(["fetchWeather","checkLocations"]),startDrag(e,t){e.dataTransfer&&(e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("locationID",String(t.id)))},onDrop(e,t){const a=Number(e.dataTransfer?.getData("locationID")),r=this.locations.find((e=>e.id===a)),n=r.order;r.order=t.order,t.order=n,e.currentTarget&&(e.currentTarget.style.background="lightgray"),localStorage.setItem("locations",JSON.stringify(this.locations))},onTouchDragStart(e){e&&(this.currentId=e.currentTarget.dataset.id)},onTouchDragMove(e){if(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,r=document.elementFromPoint(t,a)?.parentElement;r?.parentElement?.matches(".locationCardWrapper")&&(r.parentElement.style.background="$shadow-gray",this.dropOverID=r.parentElement.dataset.id)}},onTouchDrop(e,t){if(!e.target.matches(".locationCardWrapper__remove")){const e=this.locations.find((e=>e.id===Number(this.dropOverID))),a=e.order;e.order=t.order,t.order=a,localStorage.setItem("locations",JSON.stringify(this.locations))}}},computed:{...(0,oe.rn)({searchQuery:e=>e.searchQuery,locations:e=>e.locations.sort(((e,t)=>e.order-t.order)),errors:e=>e.errors})},mounted(){this.checkLocations(),this.setSearchQuery(""),this.setError(!1)}});const Ce=(0,i.Z)(Ne,[["render",we]]);var Ie=Ce;const Le=[{path:"/",name:"home",component:ce},{path:"/settings",name:"settings",component:Ie}],Fe=(0,l.p7)({history:(0,l.PO)("/weather_widget/"),routes:Le});var xe=Fe,ze=a(4161),Qe=(0,oe.MT)({state:()=>({searchQuery:"",dataFetched:!1,locations:[],errors:!1}),getters:{},mutations:{loadLocations(e,t){e.locations=t},setSearchQuery(e,t){e.searchQuery=t},setDataFetched(e,t){e.dataFetched=t},setError(e,t){e.errors=t},addLocation(e,t){e.locations.push(t),localStorage.setItem("locations",JSON.stringify(e.locations)),e.searchQuery=""},removeLocation(e,t){e.locations=e.locations.filter((e=>e.id!==t)),localStorage.setItem("locations",JSON.stringify(e.locations))}},actions:{async checkLocations({commit:e,dispatch:t}){try{const a=JSON.parse(localStorage.getItem("locations")||"[]");if(0===a.length){const e=await ze.Z.get("https://ipinfo.io/json?token=cd8a4dfbd8ac98"),a=e.data.city;t("fetchWeather",a)}else e("loadLocations",a),e("setDataFetched",!0)}catch(a){console.log(a.message),e("setDataFetched",!1)}},async fetchWeather({state:e,commit:t},a){try{const r=await ze.Z.get(`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=5704f0cb613cd21160c1cce9de6f0e36`);t("setDataFetched",!0),t("setError",!1);const n={weekday:"long",month:"short",day:"numeric"},o=new Date(1e3*r.data.dt).toLocaleDateString("en-US",n),s=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],i=Number((r.data.wind.deg/22.5).toFixed(0));t("addLocation",{id:Date.now(),order:0!==e.locations.length?e.locations[e.locations.length-1].order+1:1,name:r.data.name,country:r.data.sys.country,date:o.split(","),temperature:Math.round(r.data.main.temp),feelTemperature:Math.round(r.data.main.feels_like),image:r.data.weather[0].icon,description:r.data.weather[0].description.slice(0,1).toUpperCase()+r.data.weather[0].description.slice(1),windSpeed:r.data.wind.speed.toFixed(1),windDirection:s[i],pressure:r.data.main.pressure,humidity:r.data.main.humidity,visibility:Number((r.data.visibility/1e3).toFixed(1))})}catch(r){console.log(r.message),t("setError",!0),t("setDataFetched",!1),t("setSearchQuery","")}}},modules:{}});(0,r.ri)(d).use(Qe).use(xe).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/weather_widget/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],c=r[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var l=c(a)}for(t&&t(r);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self["webpackChunkweather_widget"]=self["webpackChunkweather_widget"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(9817)}));r=a.O(r)})();
//# sourceMappingURL=app.4af4edd5.js.map