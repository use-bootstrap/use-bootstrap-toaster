import{r as J,d as lt,e as Q,f as X,g as ot,h as rt,i as n,c as s,t as f,a as ct,j as dt,o as bt,k as ht,b as mt}from"./index-BvNjziax.js";var Z={exports:{}},K={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function ut(){return G||(G=1,function(t,c){(function(b,i){i(c,J(),lt(),Q())})(X,function(b,i,C,$){const k=(g,v="hide")=>{const w=`click.dismiss${g.EVENT_KEY}`,L=g.NAME;i.on(document,w,`[data-bs-dismiss="${L}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),$.isDisabled(this))return;const H=C.getElementFromSelector(this)||this.closest(`.${L}`);g.getOrCreateInstance(H)[v]()})};b.enableDismissTrigger=k,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})})}(K,K.exports)),K.exports}/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,c){(function(b,i){t.exports=i(ot(),J(),ut(),Q())})(X,function(b,i,C,$){const k="toast",v=".bs.toast",w=`mouseover${v}`,L=`mouseout${v}`,E=`focusin${v}`,H=`focusout${v}`,I=`hide${v}`,y=`hidden${v}`,h=`show${v}`,j=`shown${v}`,x="fade",A="hide",S="show",N="showing",q={animation:"boolean",autohide:"boolean",delay:"number"},B={animation:!0,autohide:!0,delay:5e3};class O extends b{constructor(l,p){super(l,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return B}static get DefaultType(){return q}static get NAME(){return k}show(){if(i.trigger(this._element,h).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(x);const p=()=>{this._element.classList.remove(N),i.trigger(this._element,j),this._maybeScheduleHide()};this._element.classList.remove(A),$.reflow(this._element),this._element.classList.add(S,N),this._queueCallback(p,this._element,this._config.animation)}hide(){if(!this.isShown()||i.trigger(this._element,I).defaultPrevented)return;const p=()=>{this._element.classList.add(A),this._element.classList.remove(N,S),i.trigger(this._element,y)};this._element.classList.add(N),this._queueCallback(p,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(S),super.dispose()}isShown(){return this._element.classList.contains(S)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,p){switch(l.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=p;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=p;break}}if(p){this._clearTimeout();return}const D=l.relatedTarget;this._element===D||this._element.contains(D)||this._maybeScheduleHide()}_setListeners(){i.on(this._element,w,l=>this._onInteraction(l,!0)),i.on(this._element,L,l=>this._onInteraction(l,!1)),i.on(this._element,E,l=>this._onInteraction(l,!0)),i.on(this._element,H,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const p=O.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof p[l]>"u")throw new TypeError(`No method named "${l}"`);p[l](this)}})}}return C.enableDismissTrigger(O),$.defineJQueryPlugin(O),O})})(Z);var pt=Z.exports;const gt=rt(pt),ft={animation:!0,autohide:!0,delay:4e3,gap:16,margin:"1rem",placement:"top-right",classes:"",body:""};function P(t,c){const b=document.createElement(t);return Object.assign(b,c)}function Y(t,c){const b=document.body.querySelectorAll(`:scope > .toast-${t}`),C=t.split("-")[0],$=[];b.forEach((k,g)=>{g===0&&$.push(0),b[g+1]instanceof HTMLElement&&$.push($[g]+k.offsetHeight),k.style[C]=`${$[g]+c*g}px`})}function tt(t){var c;return t||((c=window.bootstrap)==null?void 0:c.Toast)}const u=(t,c)=>{const b=tt(c);if(b===void 0)throw new Error("Bootstrap Toast is not defined.");{const{animation:i,autohide:C,body:$,delay:k,gap:g,margin:v,placement:w,classes:L,header:E}={...ft,...window.UseBootstrapToasterOptions,...typeof t=="string"?{}:t},H=w.split("-"),I=H[0],y=H[1],h=P("div",{className:`use-bootstrap-toaster toast position-fixed toast-${w} ${L}`,role:"alert",ariaLive:"assertive",ariaAtomic:"true"});if(h.style.margin=v,h.style.zIndex="var(--bs-toast-zindex)",h.style[I]="0",h.style[y]=i?"-50%":"0",E!==void 0){const x=P("div",{className:"toast-header"});if(typeof E=="string")x.insertAdjacentHTML("beforeend",E);else{const{icon:A,title:S,ago:N,closeBtn:q}=E;if(A&&x.insertAdjacentHTML("beforeend",A),S&&x.insertAdjacentElement("beforeend",P("strong",{className:"me-auto",textContent:S})),N&&x.insertAdjacentElement("beforeend",P("small",{textContent:N})),q){const B=P("button",{type:"button",className:"btn-close",ariaLabel:"Close"});B.setAttribute("data-bs-dismiss","toast"),x.insertAdjacentElement("beforeend",B)}}h.append(x)}h.insertAdjacentElement("beforeend",P("div",{className:"toast-body",innerHTML:typeof t=="string"?t:$})),document.body.insertAdjacentElement("afterbegin",h);const j=b.getOrCreateInstance(h,{animation:i,autohide:C,delay:k});return h.addEventListener("hidden.bs.toast",()=>{h.remove(),Y(w,g)}),h.addEventListener("show.bs.toast",()=>{const x=setInterval(A,0);function A(){if(h.offsetHeight>0){if(clearInterval(x),i){const S=Number.parseFloat(getComputedStyle(h).transitionDuration)*1e3;h.style.transition=`all ${S*4}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${S}ms linear`,h.style[y]="0"}Y(w,g)}}}),j.show(),{hide:()=>j.hide()}}};u.hide=t=>{const c=tt(t);if(c===void 0)throw new Error("Bootstrap Toast is not defined.");document.body.querySelectorAll(":scope > .toast").forEach(b=>{c.getOrCreateInstance(b).hide()})};const vt=`toast('Event has been created')
`,_t=`toast('<strong>Success!</strong> Event has been created')
`,$t=`toast({
  header: 'Success',
  body: 'Event has been created',
})
`,yt=`toast({
  header: {
    icon: '<svg width="1.5em" height="1.5em" class="text-success me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    title: 'Success',
    ago: '11 mins ago',
    closeBtn: true,
  },
  body: 'Event has been created',
})
`,xt=`toast({
  header: '<strong class="me-auto">Event has been created</strong><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="toast">Close</button>',
  body: 'Monday, January 3rd at 6:00pm',
})
`,St=`toast({
  body: 'Event has been created',
  placement: 'top-left',
})
`,Ct=`toast({
  body: 'Event has been created',
  placement: 'bottom-left',
})
`,kt=`toast({
  body: 'Event has been created',
  placement: 'bottom-right',
})
`,wt=`toast({
  body: 'Event has been created',
  animation: false,
})
`,Et=`toast({
  header: {
    title: 'Success',
    closeBtn: true,
  },
  body: 'Event has been created',
  autohide: false,
})
`,Tt=`toast({
  body: 'Event has been created',
  delay: 1000,
})
`,At=`toast({
  body: 'Event has been created',
  gap: 64,
  delay: 1000,
})
`,Nt=`toast({
  body: 'Event has been created',
  margin: '5rem',
  delay: 1000,
})
`,Dt=`toast({
  classes: \`text-bg-primary border-0\`,
  body: \`
  <div class="d-flex w-100" data-bs-theme="dark">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Lt=`toast({
  classes: \`text-bg-secondary border-0\`,
  body: \`
  <div class="d-flex w-100" data-bs-theme="dark">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Ht=`toast({
  classes: \`text-bg-success border-0\`,
  body: \`
  <div class="d-flex w-100" data-bs-theme="dark">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Mt=`toast({
  classes: \`text-bg-danger border-0\`,
  body: \`
  <div class="d-flex w-100" data-bs-theme="dark">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Ot=`toast({
  classes: \`text-bg-warning border-0\`,
  body: \`
  <div class="d-flex w-100">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,It=`toast({
  classes: \`text-bg-info border-0\`,
  body: \`
  <div class="d-flex w-100">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,jt=`toast({
  classes: \`text-bg-dark border-0\`,
  body: \`
  <div class="d-flex w-100" data-bs-theme="dark">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Bt=`toast({
  classes: \`text-bg-light border-0\`,
  body: \`
  <div class="d-flex w-100">
    <div class="flex-grow-1">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>\`,
})
`,Pt=`const example = toast({
  body: 'Event has been created',
  autohide: false,
})

setTimeout(() => {
  example.hide()
}, 1000)
`,Vt=`toast.hide()
`;var qt=f('<ul class="nav nav-pills"id=basicTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=basic-default-tab data-bs-toggle=tab data-bs-target=#basic-default-tab-pane type=button role=tab aria-controls=basic-default-tab-pane aria-selected=true>Default</button></li><li class=nav-item role=presentation><button class=nav-link id=basic-custom-tab data-bs-toggle=tab data-bs-target=#basic-custom-tab-pane type=button role=tab aria-controls=basic-custom-tab-pane aria-selected=false>Custom'),Ft=f('<div class="tab-content mt-3"id=basicTabContent><div class="tab-pane show active"id=basic-default-tab-pane role=tabpanel aria-labelledby=basic-default-tab tabindex=0></div><div class=tab-pane id=basic-custom-tab-pane role=tabpanel aria-labelledby=basic-custom-tab tabindex=0>'),Ut=f('<ul class="nav nav-pills"id=headerTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=header-default-tab data-bs-toggle=tab data-bs-target=#header-default-tab-pane type=button role=tab aria-controls=header-default-tab-pane aria-selected=true>Simple</button></li><li class=nav-item role=presentation><button class=nav-link id=header-object-tab data-bs-toggle=tab data-bs-target=#header-object-tab-pane type=button role=tab aria-controls=header-object-tab-pane aria-selected=false>Object</button></li><li class=nav-item role=presentation><button class=nav-link id=header-custom-tab data-bs-toggle=tab data-bs-target=#header-custom-tab-pane type=button role=tab aria-controls=header-custom-tab-pane aria-selected=false>Custom'),Kt=f('<div class="tab-content mt-3"id=headerTabContent><div class="tab-pane show active"id=header-default-tab-pane role=tabpanel aria-labelledby=header-default-tab tabindex=0></div><div class=tab-pane id=header-object-tab-pane role=tabpanel aria-labelledby=header-object-tab tabindex=0></div><div class=tab-pane id=header-custom-tab-pane role=tabpanel aria-labelledby=header-custom-tab tabindex=0>'),Rt=f('<ul class="nav nav-pills"id=placementTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=placement-top-left-tab data-bs-toggle=tab data-bs-target=#placement-top-left-tab-pane type=button role=tab aria-controls=placement-top-left-tab-pane aria-selected=true>TopLeft</button></li><li class=nav-item role=presentation><button class=nav-link id=placement-bottom-left-tab data-bs-toggle=tab data-bs-target=#placement-bottom-left-tab-pane type=button role=tab aria-controls=placement-bottom-left-tab-pane aria-selected=false>BottomLeft</button></li><li class=nav-item role=presentation><button class=nav-link id=placement-bottom-right-tab data-bs-toggle=tab data-bs-target=#placement-bottom-right-tab-pane type=button role=tab aria-controls=placement-bottom-right-tab-pane aria-selected=false>BottomRight'),Wt=f('<div class="tab-content mt-3"id=placementTabContent><div class="tab-pane show active"id=placement-top-left-tab-pane role=tabpanel aria-labelledby=placement-top-left-tab tabindex=0></div><div class=tab-pane id=placement-bottom-left-tab-pane role=tabpanel aria-labelledby=placement-bottom-left-tab tabindex=0></div><div class=tab-pane id=placement-bottom-right-tab-pane role=tabpanel aria-labelledby=placement-bottom-right-tab tabindex=0>'),zt=f('<ul class="nav nav-pills"id=optionsTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=options-no-animation-tab data-bs-toggle=tab data-bs-target=#options-no-animation-tab-pane type=button role=tab aria-controls=options-no-animation-tab-pane aria-selected=true>NoAnimation</button></li><li class=nav-item role=presentation><button class=nav-link id=options-no-autohide-tab data-bs-toggle=tab data-bs-target=#options-no-autohide-tab-pane type=button role=tab aria-controls=options-no-autohide-tab-pane aria-selected=false>NoAutohide</button></li><li class=nav-item role=presentation><button class=nav-link id=options-delay-tab data-bs-toggle=tab data-bs-target=#options-delay-tab-pane type=button role=tab aria-controls=options-delay-tab-pane aria-selected=false>Delay</button></li><li class=nav-item role=presentation><button class=nav-link id=options-gap-tab data-bs-toggle=tab data-bs-target=#options-gap-tab-pane type=button role=tab aria-controls=options-gap-tab-pane aria-selected=false>Gap</button></li><li class=nav-item role=presentation><button class=nav-link id=options-margin-tab data-bs-toggle=tab data-bs-target=#options-margin-tab-pane type=button role=tab aria-controls=options-margin-tab-pane aria-selected=false>Margin'),Gt=f('<div class="tab-content mt-3"id=optionsTabContent><div class="tab-pane show active"id=options-no-animation-tab-pane role=tabpanel aria-labelledby=options-no-animation-tab tabindex=0></div><div class=tab-pane id=options-no-autohide-tab-pane role=tabpanel aria-labelledby=options-no-autohide-tab tabindex=0></div><div class=tab-pane id=options-delay-tab-pane role=tabpanel aria-labelledby=options-delay-tab tabindex=0></div><div class=tab-pane id=options-gap-tab-pane role=tabpanel aria-labelledby=options-gap-tab tabindex=0></div><div class=tab-pane id=options-margin-tab-pane role=tabpanel aria-labelledby=options-margin-tab tabindex=0>'),Yt=f('<ul class="nav nav-pills"id=schemeTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=scheme-primary-tab data-bs-toggle=tab data-bs-target=#scheme-primary-tab-pane type=button role=tab aria-controls=scheme-primary-tab-pane aria-selected=true>Primary</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-secondary-tab data-bs-toggle=tab data-bs-target=#scheme-secondary-tab-pane type=button role=tab aria-controls=scheme-secondary-tab-pane aria-selected=false>Secondary</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-success-tab data-bs-toggle=tab data-bs-target=#scheme-success-tab-pane type=button role=tab aria-controls=scheme-success-tab-pane aria-selected=false>Success</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-danger-tab data-bs-toggle=tab data-bs-target=#scheme-danger-tab-pane type=button role=tab aria-controls=scheme-danger-tab-pane aria-selected=false>Danger</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-warning-tab data-bs-toggle=tab data-bs-target=#scheme-warning-tab-pane type=button role=tab aria-controls=scheme-warning-tab-pane aria-selected=false>Warning</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-info-tab data-bs-toggle=tab data-bs-target=#scheme-info-tab-pane type=button role=tab aria-controls=scheme-info-tab-pane aria-selected=false>Info</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-dark-tab data-bs-toggle=tab data-bs-target=#scheme-dark-tab-pane type=button role=tab aria-controls=scheme-dark-tab-pane aria-selected=false>Dark</button></li><li class=nav-item role=presentation><button class=nav-link id=scheme-light-tab data-bs-toggle=tab data-bs-target=#scheme-light-tab-pane type=button role=tab aria-controls=scheme-light-tab-pane aria-selected=false>Light'),Jt=f('<div class="tab-content mt-3"id=schemeTabContent><div class="tab-pane show active"id=scheme-primary-tab-pane role=tabpanel aria-labelledby=scheme-primary-tab tabindex=0></div><div class=tab-pane id=scheme-secondary-tab-pane role=tabpanel aria-labelledby=scheme-secondary-tab tabindex=0></div><div class=tab-pane id=scheme-success-tab-pane role=tabpanel aria-labelledby=scheme-success-tab tabindex=0></div><div class=tab-pane id=scheme-danger-tab-pane role=tabpanel aria-labelledby=scheme-danger-tab tabindex=0></div><div class=tab-pane id=scheme-warning-tab-pane role=tabpanel aria-labelledby=scheme-warning-tab tabindex=0></div><div class=tab-pane id=scheme-info-tab-pane role=tabpanel aria-labelledby=scheme-info-tab tabindex=0></div><div class=tab-pane id=scheme-dark-tab-pane role=tabpanel aria-labelledby=scheme-dark-tab tabindex=0></div><div class=tab-pane id=scheme-light-tab-pane role=tabpanel aria-labelledby=scheme-light-tab tabindex=0>'),Qt=f('<ul class="nav nav-pills"id=methodsTab role=tablist><li class=nav-item role=presentation><button class="nav-link active"id=methods-hide-tab data-bs-toggle=tab data-bs-target=#methods-hide-tab-pane type=button role=tab aria-controls=methods-hide-tab-pane aria-selected=true>Hide a toast</button></li><li class=nav-item role=presentation><button class=nav-link id=methods-hide-all-tab data-bs-toggle=tab data-bs-target=#methods-hide-all-tab-pane type=button role=tab aria-controls=methods-hide-all-tab-pane aria-selected=false>Hide all toasts'),Xt=f('<div class="tab-content mt-3"id=methodsTabContent><div class="tab-pane show active"id=methods-hide-tab-pane role=tabpanel aria-labelledby=methods-hide-tab tabindex=0></div><div class=tab-pane id=methods-hide-all-tab-pane role=tabpanel aria-labelledby=methods-hide-all-tab tabindex=0>'),Zt=f('<div><h2 class="fw-bold mb-4">Demo</h2><div class="row g-4">'),te=f('<div><div class="card h-100"><div class=card-header></div><div class=card-body>'),ee=f('<div class="overflow-auto w-100"><pre><code class=language-js>');window.bootstrap={Toast:gt};function ne(){const t="Event has been created";function c(){u(t)}function b(){u(`<strong>Success!</strong> ${t}`)}function i(){u({header:"Success",body:t})}function C(){u({header:{icon:'<svg width="1.5em" height="1.5em" class="text-success me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',title:"Success",ago:"11 mins ago",closeBtn:!0},body:t})}function $(){u({header:'<strong class="me-auto">Event has been created</strong><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="toast">Close</button>',body:"Monday, January 3rd at 6:00pm"})}function k(){u({body:t,placement:"top-left"})}function g(){u({body:t,placement:"bottom-left"})}function v(){u({body:t,placement:"bottom-right"})}function w(){u({body:t,animation:!1})}function L(){u({header:{title:"Success",closeBtn:!0},body:t,autohide:!1})}function E(){u({body:t,delay:1e3})}function H(){u({body:t,gap:64,delay:1e3})}function I(){u({body:t,margin:"5rem",delay:1e3})}function y(l,p=!0){u({classes:`text-bg-${l} border-0`,body:`
      <div class="d-flex w-100"${p?' data-bs-theme="dark"':""}>
        <div class="flex-grow-1">
        Hello, world! This is a toast message.
        </div>
        <button type="button" class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`})}function h(){y("primary")}function j(){y("secondary")}function x(){y("success")}function A(){y("danger")}function S(){y("warning",!1)}function N(){y("info",!1)}function q(){y("dark")}function B(){y("light",!1)}function O(){const l=u({body:t,autohide:!1});setTimeout(()=>{l.hide()},1e3)}function et(){u.hide()}return(()=>{var l=Zt(),p=l.firstChild,D=p.nextSibling;return n(D,s(V,{title:"Basic",get children(){return[(()=>{var e=qt(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild;return o.$$click=c,m.$$click=b,e})(),(()=>{var e=Ft(),a=e.firstChild,o=a.nextSibling;return n(a,s(d,{children:vt})),n(o,s(d,{children:_t})),e})()]}}),null),n(D,s(V,{title:"Header",get children(){return[(()=>{var e=Ut(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild,_=r.nextSibling,T=_.firstChild;return o.$$click=i,m.$$click=C,T.$$click=$,e})(),(()=>{var e=Kt(),a=e.firstChild,o=a.nextSibling,r=o.nextSibling;return n(a,s(d,{children:$t})),n(o,s(d,{children:yt})),n(r,s(d,{children:xt})),e})()]}}),null),n(D,s(V,{title:"Placement",get children(){return[(()=>{var e=Rt(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild,_=r.nextSibling,T=_.firstChild;return o.$$click=k,m.$$click=g,T.$$click=v,e})(),(()=>{var e=Wt(),a=e.firstChild,o=a.nextSibling,r=o.nextSibling;return n(a,s(d,{children:St})),n(o,s(d,{children:Ct})),n(r,s(d,{children:kt})),e})()]}}),null),n(D,s(V,{title:"Option",className:"col-12 col-lg-6 col-xxl-4",get children(){return[(()=>{var e=zt(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild,_=r.nextSibling,T=_.firstChild,M=_.nextSibling,F=M.firstChild,U=M.nextSibling,R=U.firstChild;return o.$$click=w,m.$$click=L,T.$$click=E,F.$$click=H,R.$$click=I,e})(),(()=>{var e=Gt(),a=e.firstChild,o=a.nextSibling,r=o.nextSibling,m=r.nextSibling,_=m.nextSibling;return n(a,s(d,{children:wt})),n(o,s(d,{children:Et})),n(r,s(d,{children:Tt})),n(m,s(d,{children:At})),n(_,s(d,{children:Nt})),e})()]}}),null),n(D,s(V,{title:"Color schemes",className:"col-12 col-xxl-8",get children(){return[(()=>{var e=Yt(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild,_=r.nextSibling,T=_.firstChild,M=_.nextSibling,F=M.firstChild,U=M.nextSibling,R=U.firstChild,W=U.nextSibling,at=W.firstChild,z=W.nextSibling,nt=z.firstChild,st=z.nextSibling,it=st.firstChild;return o.$$click=h,m.$$click=j,T.$$click=x,F.$$click=A,R.$$click=S,at.$$click=N,nt.$$click=q,it.$$click=B,e})(),(()=>{var e=Jt(),a=e.firstChild,o=a.nextSibling,r=o.nextSibling,m=r.nextSibling,_=m.nextSibling,T=_.nextSibling,M=T.nextSibling,F=M.nextSibling;return n(a,s(d,{children:Dt})),n(o,s(d,{children:Lt})),n(r,s(d,{children:Ht})),n(m,s(d,{children:Mt})),n(_,s(d,{children:Ot})),n(T,s(d,{children:It})),n(M,s(d,{children:jt})),n(F,s(d,{children:Bt})),e})()]}}),null),n(D,s(V,{title:"Methods",get children(){return[(()=>{var e=Qt(),a=e.firstChild,o=a.firstChild,r=a.nextSibling,m=r.firstChild;return o.$$click=O,m.$$click=et,e})(),(()=>{var e=Xt(),a=e.firstChild,o=a.nextSibling;return n(a,s(d,{children:Pt})),n(o,s(d,{children:Vt})),e})()]}}),null),l})()}function V(t){return(()=>{var c=te(),b=c.firstChild,i=b.firstChild,C=i.nextSibling;return n(i,()=>t.title),n(C,()=>t.children),ct(()=>dt(c,t.className??"col-12 col-lg-6 col-xxl-4")),c})()}function d(t){return bt(()=>{mt.highlightAll()}),(()=>{var c=ee(),b=c.firstChild,i=b.firstChild;return n(i,()=>t.children),c})()}ht(["click"]);export{ne as default};
