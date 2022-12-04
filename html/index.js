const Pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}};Pe();function x(){}function Ge(n){return n()}function ye(){return Object.create(null)}function ce(n){n.forEach(Ge)}function Ie(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function qe(n){return Object.keys(n).length===0}function Fe(n,...e){if(n==null)return x;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function U(n,e,r){n.$$.on_destroy.push(Fe(e,r))}function ke(n){return n==null?"":n}function u(n,e){n.appendChild(e)}function E(n,e,r){n.insertBefore(e,r||null)}function S(n){n.parentNode.removeChild(n)}function Oe(n,e){for(let r=0;r<n.length;r+=1)n[r]&&n[r].d(e)}function v(n){return document.createElement(n)}function z(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function q(n){return document.createTextNode(n)}function N(){return q(" ")}function Ke(){return q("")}function ve(n,e,r,t){return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)}function o(n,e,r){r==null?n.removeAttribute(e):n.getAttribute(e)!==r&&n.setAttribute(e,r)}function Ue(n){return Array.from(n.childNodes)}function le(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let ie;function ne(n){ie=n}function Te(){if(!ie)throw new Error("Function called outside component initialization");return ie}function We(n){Te().$$.on_mount.push(n)}function Ye(n){Te().$$.on_destroy.push(n)}const te=[],Le=[],oe=[],je=[],Qe=Promise.resolve();let ge=!1;function Xe(){ge||(ge=!0,Qe.then(De))}function he(n){oe.push(n)}const me=new Set;let se=0;function De(){const n=ie;do{for(;se<te.length;){const e=te[se];se++,ne(e),Ze(e.$$)}for(ne(null),te.length=0,se=0;Le.length;)Le.pop()();for(let e=0;e<oe.length;e+=1){const r=oe[e];me.has(r)||(me.add(r),r())}oe.length=0}while(te.length);for(;je.length;)je.pop()();ge=!1,me.clear(),ne(n)}function Ze(n){if(n.fragment!==null){n.update(),ce(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(he)}}const ae=new Set;let K;function O(){K={r:0,c:[],p:K}}function T(){K.r||ce(K.c),K=K.p}function p(n,e){n&&n.i&&(ae.delete(n),n.i(e))}function w(n,e,r,t){if(n&&n.o){if(ae.has(n))return;ae.add(n),K.c.push(()=>{ae.delete(n),t&&(r&&n.d(1),t())}),n.o(e)}else t&&t()}function j(n){n&&n.c()}function k(n,e,r,t){const{fragment:l,on_mount:i,on_destroy:c,after_update:s}=n.$$;l&&l.m(e,r),t||he(()=>{const a=i.map(Ge).filter(Ie);c?c.push(...a):ce(a),n.$$.on_mount=[]}),s.forEach(he)}function L(n,e){const r=n.$$;r.fragment!==null&&(ce(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function et(n,e){n.$$.dirty[0]===-1&&(te.push(n),Xe(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function H(n,e,r,t,l,i,c,s=[-1]){const a=ie;ne(n);const f=n.$$={fragment:null,ctx:null,props:i,update:x,not_equal:l,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ye(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};c&&c(f.root);let m=!1;if(f.ctx=r?r(n,e.props||{},(d,_,...h)=>{const M=h.length?h[0]:_;return f.ctx&&l(f.ctx[d],f.ctx[d]=M)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](M),m&&et(n,d)),_}):[],f.update(),m=!0,ce(f.before_update),f.fragment=t?t(f.ctx):!1,e.target){if(e.hydrate){const d=Ue(e.target);f.fragment&&f.fragment.l(d),d.forEach(S)}else f.fragment&&f.fragment.c();e.intro&&p(n.$$.fragment),k(n,e.target,e.anchor,e.customElement),De()}ne(a)}class R{$destroy(){L(this,1),this.$destroy=x}$on(e,r){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(r),()=>{const l=t.indexOf(r);l!==-1&&t.splice(l,1)}}$set(e){this.$$set&&!qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function tt(n){let e,r,t,l,i,c,s,a,f,m,d,_;var h=n[0];function M(g){return{}}return h&&(l=new h(M())),{c(){e=v("div"),r=v("div"),t=v("div"),l&&j(l.$$.fragment),i=N(),c=v("div"),s=v("p"),a=q(n[1]),f=q(`:
			`),m=v("span"),d=q(n[2]),o(t,"class",n[3]),o(r,"class","w-full flex justify-center text-white"),o(m,"class","text-[var(--color-green)]"),o(s,"class","text-xs"),o(c,"class","text-center"),o(e,"class","flex flex-1 flex-col items-center gap-2 b-2 b-rd-2 border-[var(--color-darkblue)] pt-[14px] pb-[14px]")},m(g,C){E(g,e,C),u(e,r),u(r,t),l&&k(l,t,null),u(e,i),u(e,c),u(c,s),u(s,a),u(s,f),u(s,m),u(m,d),_=!0},p(g,[C]){if(h!==(h=g[0])){if(l){O();const b=l;w(b.$$.fragment,1,0,()=>{L(b,1)}),T()}h?(l=new h(M()),j(l.$$.fragment),p(l.$$.fragment,1),k(l,t,null)):l=null}(!_||C&8)&&o(t,"class",g[3]),(!_||C&2)&&le(a,g[1]),(!_||C&4)&&le(d,g[2])},i(g){_||(l&&p(l.$$.fragment,g),_=!0)},o(g){l&&w(l.$$.fragment,g),_=!1},d(g){g&&S(e),l&&L(l)}}}function nt(n,e,r){let{icon:t=null}=e,{detail:l}=e,{value:i}=e,{svgSize:c}=e;return n.$$set=s=>{"icon"in s&&r(0,t=s.icon),"detail"in s&&r(1,l=s.detail),"value"in s&&r(2,i=s.value),"svgSize"in s&&r(3,c=s.svgSize)},[t,l,i,c]}class de extends R{constructor(e){super(),H(this,e,nt,tt,J,{icon:0,detail:1,value:2,svgSize:3})}}function rt(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M160 0C177.7 0 192 14.33 192 32V67.68C193.6 67.89 195.1 68.12 196.7 68.35C207.3 69.93 238.9 75.02 251.9 78.31C268.1
    82.65 279.4 100.1 275 117.2C270.7 134.3 253.3 144.7 236.1 140.4C226.8 137.1 198.5 133.3 187.3 131.7C155.2 126.9 127.7 129.3
    108.8 136.5C90.52 143.5 82.93 153.4 80.92 164.5C78.98 175.2 80.45 181.3 82.21 185.1C84.1 189.1 87.79 193.6 95.14 198.5C111.4
    209.2 136.2 216.4 168.4 225.1L171.2 225.9C199.6 233.6 234.4 243.1 260.2 260.2C274.3 269.6 287.6 282.3 295.8 299.9C304.1 317.7
    305.9 337.7 302.1 358.1C295.1 397 268.1 422.4 236.4 435.6C222.8 441.2 207.8 444.8 192 446.6V480C192 497.7 177.7 512 160 512C142.3
    512 128 497.7 128 480V445.1C127.6 445.1 127.1 444.1 126.7 444.9L126.5 444.9C102.2 441.1 62.07 430.6 35 418.6C18.85 411.4 11.58
    392.5 18.76 376.3C25.94 360.2 44.85 352.9 60.1 360.1C81.9 369.4 116.3 378.5 136.2 381.6C168.2 386.4 194.5 383.6 212.3 376.4C229.2
    369.5 236.9 359.5 239.1 347.5C241 336.8 239.6 330.7 237.8 326.9C235.9 322.9 232.2 318.4 224.9 313.5C208.6 302.8 183.8 295.6 151.6
    286.9L148.8 286.1C120.4 278.4 85.58 268.9 59.76 251.8C45.65 242.4 32.43 229.7 24.22 212.1C15.89 194.3 14.08 174.3 17.95 153C25.03
    114.1 53.05 89.29 85.96 76.73C98.98 71.76 113.1 68.49 128 66.73V32C128 14.33 142.3 0 160 0V0z`),o(e,"fill","currentColor"),o(e,"viewBox","0 0 320 512")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class lt extends R{constructor(e){super(),H(this,e,null,rt,J,{})}}function it(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4
    551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9
    435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9
    22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9
    78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6
    387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7
    199.3 343.9 194.3 340.5 187.2L287.9 78.95z`),o(e,"fill","currentColor"),o(e,"viewBox","0 0 576 512")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class ct extends R{constructor(e){super(),H(this,e,null,it,J,{})}}function st(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61
    304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z`),o(e,"fill","currentColor"),o(e,"viewBox","0 0 448 512")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class ot extends R{constructor(e){super(),H(this,e,null,st,J,{})}}function at(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M547.3,112.1c-98,98.1-196,196.2-294,294.2c-11.9,11.9-23.7,23.8-35.6,35.6c-6,6-9.3,6-15.3,0
    C141.5,381.1,80.7,320.2,19.8,259.3c-6-6-6-9.2,0-15.2c13.6-13.6,27.2-27.2,40.8-40.8c6-6,9.2-6,15.2,0
    c43.2,43.2,86.5,86.4,129.7,129.7c1.3,1.3,2.4,3,3.8,4.8c2-1.9,3.4-3.1,4.7-4.4c90.5-90.5,181-181,271.5-271.5
    c7.7-7.7,10-7.7,17.8,0.1c12.7,12.7,25.5,25.5,38.2,38.2c2.1,2.1,3.9,4.4,5.8,6.6C547.3,108.6,547.3,110.4,547.3,112.1z`),o(e,"fill","currentColor"),o(e,"x","0px"),o(e,"y","0px"),o(e,"viewBox","0 0 562.7 502.7"),o(e,"xml:space","preserve")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class fe extends R{constructor(e){super(),H(this,e,null,at,J,{})}}function ft(n){let e,r,t;return{c(){e=z("svg"),r=z("path"),t=z("path"),o(r,"d","M0 0h24v24H0z"),o(r,"fill","none"),o(t,"d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"),o(e,"fill","currentColor"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"height","24px"),o(e,"viewBox","0 0 24 24"),o(e,"width","24px")},m(l,i){E(l,e,i),u(e,r),u(e,t)},p:x,i:x,o:x,d(l){l&&S(e)}}}class ze extends R{constructor(e){super(),H(this,e,null,ft,J,{})}}function ut(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0
    8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24
    10.7-24 24z`),o(e,"fill","currentColor"),o(e,"viewBox","0 0 512 512")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class Se extends R{constructor(e){super(),H(this,e,null,ut,J,{})}}function mt(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M352 0C369.7 0 384 14.33 384 32V64L384 64.15C422.6 66.31 456.3 91.49 469.2 128.3L504.4 228.8C527.6 238.4 544
    261.3 544 288V480C544 497.7 529.7 512 512 512H480C462.3 512 448 497.7 448 480V432H128V480C128 497.7 113.7 512 96 512H64C46.33
    512 32 497.7 32 480V288C32 261.3 48.36 238.4 71.61 228.8L106.8 128.3C119.7 91.49 153.4 66.31 192 64.15L192 64V32C192 14.33
    206.3 0 224 0L352 0zM197.4 128C183.8 128 171.7 136.6 167.2 149.4L141.1 224H434.9L408.8 149.4C404.3 136.6 392.2 128 378.6
    128H197.4zM128 352C145.7 352 160 337.7 160 320C160 302.3 145.7 288 128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352
    128 352zM448 288C430.3 288 416 302.3 416 320C416 337.7 430.3 352 448 352C465.7 352 480 337.7 480 320C480 302.3 465.7 288
    448 288z`),o(e,"fill","currentColor"),o(e,"viewBox","0 0 576 512")},m(t,l){E(t,e,l),u(e,r)},p:x,i:x,o:x,d(t){t&&S(e)}}}class Me extends R{constructor(e){super(),H(this,e,null,mt,J,{})}}const Z=[];function re(n,e=x){let r;const t=new Set;function l(s){if(J(n,s)&&(n=s,r)){const a=!Z.length;for(const f of t)f[1](),Z.push(f,n);if(a){for(let f=0;f<Z.length;f+=2)Z[f][0](Z[f+1]);Z.length=0}}}function i(s){l(s(n))}function c(s,a=x){const f=[s,a];return t.add(f),t.size===1&&(r=e(l)||x),s(n),()=>{t.delete(f),t.size===0&&(r(),r=null)}}return{set:l,update:i,subscribe:c}}async function pe(n,e={}){const r={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},l=(()=>{try{return window.GetParentResourceName()}catch{return"ps-multijob"}})();try{return await(await fetch(`https://${l}/${n}`,r)).json()}catch{}}const dt={whitelist:[{name:"police person",label:"blah",description:`Generate Lorem lpsum placeholder text.
      Select the number of characters, words, sentences or paragraphs, and hit generate!`,salary:250,grade_label:"Regular",grade:0,active:0,icon:""},{name:"police chief",label:"blah",description:"Blah blah blah",salary:500,grade_label:"Boss",grade:0,active:1,icon:""}],civilian:[{name:"taxi driver",label:"blah",description:`Generate Lorem lpsum placeholder text.
        Select the number of characters, words, sentences or paragraphs, and hit generate!`,salary:150,grade_label:"Regular",grade:0,active:0,icon:""},{name:"murdershot cashier",label:"blah",description:"Take people's order and serve them food",salary:100,grade_label:"Cashier",grade:0,active:0,icon:""}]},gt=()=>{const n={jobManifest:re(dt),activeJob:re("")};return{...n,...{deleteJob(r,t,l){pe("removejob",{name:t,grade:l})},receiveOpenMessage(r){n.jobManifest.set(r.jobs),n.activeJob.set(r.activeJob)},setActiveJob(r,t,l){n.activeJob.set(r),pe("selectjob",{name:t,grade:l})},setOffDuty(){n.activeJob.set("")}}}},_e=gt();function Ae(n){let e,r,t,l,i,c,s,a;var f=fe;function m(d){return{}}return f&&(t=new f(m())),{c(){e=v("button"),r=v("div"),t&&j(t.$$.fragment),l=N(),i=v("p"),i.textContent="select",o(r,"class","w-4"),o(i,"class","ml-[5px] uppercase tracking-wide"),o(e,"class","bg-[var(--color-green)] flex flex-row h-11 items-center justify-center gap-1 b-rd-[5px] py-[10px] font-medium text-black flex-1 w-full")},m(d,_){E(d,e,_),u(e,r),t&&k(t,r,null),u(e,l),u(e,i),c=!0,s||(a=ve(e,"click",n[13]),s=!0)},p(d,_){if(f!==(f=fe)){if(t){O();const h=t;w(h.$$.fragment,1,0,()=>{L(h,1)}),T()}f?(t=new f(m()),j(t.$$.fragment),p(t.$$.fragment,1),k(t,r,null)):t=null}},i(d){c||(t&&p(t.$$.fragment,d),c=!0)},o(d){t&&w(t.$$.fragment,d),c=!1},d(d){d&&S(e),t&&L(t),s=!1,a()}}}function Ve(n){let e,r,t,l,i,c,s,a,f,m,d,_,h,M,g,C;var b=fe;function $(B){return{}}b&&(l=new b($()));var I=Se;function P(B){return{}}return I&&(d=new I(P())),{c(){e=v("div"),r=v("div"),t=v("div"),l&&j(l.$$.fragment),i=N(),c=v("p"),c.textContent="selected",s=N(),a=v("div"),f=v("button"),m=v("div"),d&&j(d.$$.fragment),_=N(),h=v("p"),h.textContent="off duty",o(t,"class","w-5"),o(c,"class","uppercase tracking-wide"),o(r,"class","flex flex-1 flex-row gap-2 border-1 b-rd-[5px] justify-center items-center h-11"),o(m,"class","w-5"),o(h,"class","ml-[5px] uppercase tracking-wide"),o(f,"class","flex flex-row justify-center items-center gap-1 h-11 text-[var(--color-orange)] border-1 border-[var(--color-orange)] b-rd-[5px] py-[10px] font-medium flex-1 w-full hover:bg-[var(--color-orange)] hover:text-black"),o(a,"class","flex-1"),o(e,"class","flex flex-row justify-between gap-2")},m(B,F){E(B,e,F),u(e,r),u(r,t),l&&k(l,t,null),u(r,i),u(r,c),u(e,s),u(e,a),u(a,f),u(f,m),d&&k(d,m,null),u(f,_),u(f,h),M=!0,g||(C=ve(f,"click",n[14]),g=!0)},p(B,F){if(b!==(b=fe)){if(l){O();const G=l;w(G.$$.fragment,1,0,()=>{L(G,1)}),T()}b?(l=new b($()),j(l.$$.fragment),p(l.$$.fragment,1),k(l,t,null)):l=null}if(I!==(I=Se)){if(d){O();const G=d;w(G.$$.fragment,1,0,()=>{L(G,1)}),T()}I?(d=new I(P()),j(d.$$.fragment),p(d.$$.fragment,1),k(d,m,null)):d=null}},i(B){M||(l&&p(l.$$.fragment,B),d&&p(d.$$.fragment,B),M=!0)},o(B){l&&w(l.$$.fragment,B),d&&w(d.$$.fragment,B),M=!1},d(B){B&&S(e),l&&L(l),d&&L(d),g=!1,C()}}}function ht(n){let e,r,t,l,i,c,s,a,f,m,d,_,h,M,g,C,b,$,I,P,B,F,G,ue,Y;var Q=ze;function be(y){return{}}Q&&(t=new Q(be()));var X=Me;function we(y){return{}}X&&(s=new X(we())),C=new de({props:{icon:lt,detail:"Salary",value:n[3],svgSize:"w-[0.8rem]"}}),$=new de({props:{icon:ct,detail:"Rank",value:n[4],svgSize:"w-[1.4rem]"}}),P=new de({props:{icon:ot,detail:"Active",value:n[6],svgSize:"w-[1.1rem]"}});let A=!n[7]&&Ae(n),V=n[7]&&Ve(n);return{c(){e=v("main"),r=v("div"),t&&j(t.$$.fragment),l=N(),i=v("div"),c=v("div"),s&&j(s.$$.fragment),a=N(),f=v("p"),m=q(n[0]),d=N(),_=v("p"),h=q(n[2]),M=N(),g=v("div"),j(C.$$.fragment),b=N(),j($.$$.fragment),I=N(),j(P.$$.fragment),B=N(),F=v("div"),G=v("div"),A&&A.c(),ue=N(),V&&V.c(),o(r,"class","text-[var(--color-darkblue)] absolute right-[10px] top-[10px] cursor-pointer"),o(c,"class","w-6 text-[var(--color-green)]"),o(f,"class","text-xl tracking-wide mt-[8px] capitalize"),o(_,"class","text-sm mt-[2px] text-[var(--color-lightestgrey)]"),o(i,"class","job-about"),o(g,"class","job-details flex gap-[12px] justify-stretch mt-[30px]"),o(G,"class","job-select"),o(F,"class","mt-8"),o(e,"class","job w-full flex flex-col mt-[30px] b-rd-[10px] px-[22px] py-[33px] relative select-none svelte-12d82fz")},m(y,D){E(y,e,D),u(e,r),t&&k(t,r,null),u(e,l),u(e,i),u(i,c),s&&k(s,c,null),u(i,a),u(i,f),u(f,m),u(i,d),u(i,_),u(_,h),u(e,M),u(e,g),k(C,g,null),u(g,b),k($,g,null),u(g,I),k(P,g,null),u(e,B),u(e,F),u(F,G),A&&A.m(G,null),u(G,ue),V&&V.m(G,null),Y=!0},p(y,[D]){if(Q!==(Q=ze)){if(t){O();const ee=t;w(ee.$$.fragment,1,0,()=>{L(ee,1)}),T()}Q?(t=new Q(be()),j(t.$$.fragment),p(t.$$.fragment,1),k(t,r,null)):t=null}if(X!==(X=Me)){if(s){O();const ee=s;w(ee.$$.fragment,1,0,()=>{L(ee,1)}),T()}X?(s=new X(we()),j(s.$$.fragment),p(s.$$.fragment,1),k(s,c,null)):s=null}(!Y||D&1)&&le(m,y[0]),(!Y||D&4)&&le(h,y[2]);const Ce={};D&8&&(Ce.value=y[3]),C.$set(Ce);const $e={};D&16&&($e.value=y[4]),$.$set($e);const xe={};D&64&&(xe.value=y[6]),P.$set(xe),y[7]?A&&(O(),w(A,1,1,()=>{A=null}),T()):A?(A.p(y,D),D&128&&p(A,1)):(A=Ae(y),A.c(),p(A,1),A.m(G,ue)),y[7]?V?(V.p(y,D),D&128&&p(V,1)):(V=Ve(y),V.c(),p(V,1),V.m(G,null)):V&&(O(),w(V,1,1,()=>{V=null}),T())},i(y){Y||(t&&p(t.$$.fragment,y),s&&p(s.$$.fragment,y),p(C.$$.fragment,y),p($.$$.fragment,y),p(P.$$.fragment,y),p(A),p(V),Y=!0)},o(y){t&&w(t.$$.fragment,y),s&&w(s.$$.fragment,y),w(C.$$.fragment,y),w($.$$.fragment,y),w(P.$$.fragment,y),w(A),w(V),Y=!1},d(y){y&&S(e),t&&L(t),s&&L(s),L(C),L($),L(P),A&&A.d(),V&&V.d()}}}function pt(n,e,r){let t,{name:l}=e,{nuiName:i}=e,{icon:c}=e,{description:s}=e,{salary:a}=e,{rank:f}=e,{nuiRank:m}=e,{active:d}=e;const{activeJob:_,setActiveJob:h,setOffDuty:M}=_e;U(n,_,$=>r(12,t=$));let g=!1;const C=()=>h(l,i,m),b=()=>M();return n.$$set=$=>{"name"in $&&r(0,l=$.name),"nuiName"in $&&r(1,i=$.nuiName),"icon"in $&&r(11,c=$.icon),"description"in $&&r(2,s=$.description),"salary"in $&&r(3,a=$.salary),"rank"in $&&r(4,f=$.rank),"nuiRank"in $&&r(5,m=$.nuiRank),"active"in $&&r(6,d=$.active)},n.$$.update=()=>{n.$$.dirty&4097&&r(7,g=t==l)},[l,i,s,a,f,m,d,g,_,h,M,c,t,C,b]}class vt extends R{constructor(e){super(),H(this,e,pt,ht,J,{name:0,nuiName:1,icon:11,description:2,salary:3,rank:4,nuiRank:5,active:6})}}function _t(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d","M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"),o(e,"fill",n[0]),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 448 512")},m(t,l){E(t,e,l),u(e,r)},p(t,[l]){l&1&&o(e,"fill",t[0])},i:x,o:x,d(t){t&&S(e)}}}function bt(n,e,r){let{color:t="black"}=e;return n.$$set=l=>{"color"in l&&r(0,t=l.color)},[t]}class wt extends R{constructor(e){super(),H(this,e,bt,_t,J,{color:0})}}function Ct(n){let e,r;return{c(){e=z("svg"),r=z("path"),o(r,"d",`M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05
    160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08
    101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43
    316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4
    229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64
    256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3
    238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160
    398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0
    416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z`),o(e,"fill",n[0]),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 512 512")},m(t,l){E(t,e,l),u(e,r)},p(t,[l]){l&1&&o(e,"fill",t[0])},i:x,o:x,d(t){t&&S(e)}}}function $t(n,e,r){let{color:t="black"}=e;return n.$$set=l=>{"color"in l&&r(0,t=l.color)},[t]}class xt extends R{constructor(e){super(),H(this,e,$t,Ct,J,{color:0})}}const yt=[{name:"whitelist",icon:xt},{name:"civilian",icon:wt}],kt=()=>{const n={show:re(!1),panelActive:re(""),panels:re(yt)},e={handleKeyUp(r){r.key=="Escape"&&(e.setShow(!1),pe("closemenu",null))},setActive(r){n.panelActive.set(r)},setShow(r){n.show.set(r)}};return{...n,...e}},W=kt();function Ne(n,e,r){const t=n.slice();return t[4]=e[r],t}function Ee(n){let e,r;return e=new vt({props:{name:n[4].label,nuiName:n[4].name,nuiRank:n[4].grade,icon:n[4].icon,description:n[4].description,salary:n[4].salary,rank:n[4].grade_label,active:n[4].active}}),{c(){j(e.$$.fragment)},m(t,l){k(e,t,l),r=!0},p(t,l){const i={};l&3&&(i.name=t[4].label),l&3&&(i.nuiName=t[4].name),l&3&&(i.nuiRank=t[4].grade),l&3&&(i.icon=t[4].icon),l&3&&(i.description=t[4].description),l&3&&(i.salary=t[4].salary),l&3&&(i.rank=t[4].grade_label),l&3&&(i.active=t[4].active),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Lt(n){let e,r,t,l,i,c,s,a,f,m,d,_=n[1][n[0]],h=[];for(let g=0;g<_.length;g+=1)h[g]=Ee(Ne(n,_,g));const M=g=>w(h[g],1,1,()=>{h[g]=null});return{c(){e=v("main"),r=v("div"),t=v("span"),t.textContent="CATEGORY",l=N(),i=v("br"),c=N(),s=v("span"),a=q(n[0]),f=q(" Jobs"),m=N();for(let g=0;g<h.length;g+=1)h[g].c();o(t,"class","category svelte-164hciw"),o(s,"class","category-name text-white block mt-[-5px] font-medium capitalize svelte-164hciw"),o(r,"class","text-white"),o(e,"class","w-[380px] min-h-screen block px-[28px] pt-[40px] select-none svelte-164hciw")},m(g,C){E(g,e,C),u(e,r),u(r,t),u(r,l),u(r,i),u(r,c),u(r,s),u(s,a),u(s,f),u(e,m);for(let b=0;b<h.length;b+=1)h[b].m(e,null);d=!0},p(g,[C]){if((!d||C&1)&&le(a,g[0]),C&3){_=g[1][g[0]];let b;for(b=0;b<_.length;b+=1){const $=Ne(g,_,b);h[b]?(h[b].p($,C),p(h[b],1)):(h[b]=Ee($),h[b].c(),p(h[b],1),h[b].m(e,null))}for(O(),b=_.length;b<h.length;b+=1)M(b);T()}},i(g){if(!d){for(let C=0;C<_.length;C+=1)p(h[C]);d=!0}},o(g){h=h.filter(Boolean);for(let C=0;C<h.length;C+=1)w(h[C]);d=!1},d(g){g&&S(e),Oe(h,g)}}}function jt(n,e,r){let t,l;const{panelActive:i}=W;U(n,i,s=>r(0,t=s));const{jobManifest:c}=_e;return U(n,c,s=>r(1,l=s)),[t,l,i,c]}class zt extends R{constructor(e){super(),H(this,e,jt,Lt,J,{})}}function St(n){let e,r,t,l,i,c,s;var a=n[0];function f(m){return{props:{color:m[1]?"#02f1b5":"#7f7f7e"}}}return a&&(t=new a(f(n))),{c(){e=v("div"),r=v("div"),t&&j(t.$$.fragment),o(r,"class","icon svelte-1jmblc8"),o(e,"class",l=ke("navitem w-full h-[60px] flex justify-center items-center cursor-pointer duration-200 "+(n[1]?"border-r-4 border-r-[#02f1b5] bg-[var(--color-darkestblue)]":"border-r-4 border-r-transparent"))+" svelte-1jmblc8")},m(m,d){E(m,e,d),u(e,r),t&&k(t,r,null),i=!0,c||(s=ve(e,"click",n[4]),c=!0)},p(m,[d]){const _={};if(d&2&&(_.color=m[1]?"#02f1b5":"#7f7f7e"),a!==(a=m[0])){if(t){O();const h=t;w(h.$$.fragment,1,0,()=>{L(h,1)}),T()}a?(t=new a(f(m)),j(t.$$.fragment),p(t.$$.fragment,1),k(t,r,null)):t=null}else a&&t.$set(_);(!i||d&2&&l!==(l=ke("navitem w-full h-[60px] flex justify-center items-center cursor-pointer duration-200 "+(m[1]?"border-r-4 border-r-[#02f1b5] bg-[var(--color-darkestblue)]":"border-r-4 border-r-transparent"))+" svelte-1jmblc8"))&&o(e,"class",l)},i(m){i||(t&&p(t.$$.fragment,m),i=!0)},o(m){t&&w(t.$$.fragment,m),i=!1},d(m){m&&S(e),t&&L(t),c=!1,s()}}}function Mt(n,e,r){let{icon:t}=e,{isActive:l}=e,{name:i}=e;function c(a){l?W.setActive(""):W.setActive(a)}const s=()=>c(i);return n.$$set=a=>{"icon"in a&&r(0,t=a.icon),"isActive"in a&&r(1,l=a.isActive),"name"in a&&r(2,i=a.name)},[t,l,i,c,s]}class At extends R{constructor(e){super(),H(this,e,Mt,St,J,{icon:0,isActive:1,name:2})}}function Je(n,e,r){const t=n.slice();return t[4]=e[r],t}function Be(n){let e,r;return e=new At({props:{name:n[4].name,isActive:n[4].name==n[1],icon:n[4].icon}}),{c(){j(e.$$.fragment)},m(t,l){k(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.name=t[4].name),l&3&&(i.isActive=t[4].name==t[1]),l&1&&(i.icon=t[4].icon),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Vt(n){let e,r,t,l,i=n[0],c=[];for(let a=0;a<i.length;a+=1)c[a]=Be(Je(n,i,a));const s=a=>w(c[a],1,1,()=>{c[a]=null});return{c(){e=v("nav"),r=v("div"),t=N();for(let a=0;a<c.length;a+=1)c[a].c();o(r,"class","ps-logo w-full h-[80px]"),o(e,"class","w-[80px] min-h-screen nav float-right flex flex-col svelte-zpuozb")},m(a,f){E(a,e,f),u(e,r),u(e,t);for(let m=0;m<c.length;m+=1)c[m].m(e,null);l=!0},p(a,[f]){if(f&3){i=a[0];let m;for(m=0;m<i.length;m+=1){const d=Je(a,i,m);c[m]?(c[m].p(d,f),p(c[m],1)):(c[m]=Be(d),c[m].c(),p(c[m],1),c[m].m(e,null))}for(O(),m=i.length;m<c.length;m+=1)s(m);T()}},i(a){if(!l){for(let f=0;f<i.length;f+=1)p(c[f]);l=!0}},o(a){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)w(c[f]);l=!1},d(a){a&&S(e),Oe(c,a)}}}function Nt(n,e,r){let t,l;const{panelActive:i,panels:c}=W;return U(n,i,s=>r(1,l=s)),U(n,c,s=>r(0,t=s)),[t,l,i,c]}class Et extends R{constructor(e){super(),H(this,e,Nt,Vt,J,{})}}function Jt(){function n(e){switch(e.data.action){case"sendjobs":_e.receiveOpenMessage(e.data),W.setShow(!0);break}}We(()=>window.addEventListener("message",n)),Ye(()=>window.removeEventListener("message",n))}function He(n){let e,r,t,l,i=n[1]!=""&&Re();return t=new Et({}),{c(){e=v("main"),i&&i.c(),r=N(),j(t.$$.fragment),o(e,"class","min-h-screen flex justify-end bg-transparent")},m(c,s){E(c,e,s),i&&i.m(e,null),u(e,r),k(t,e,null),l=!0},p(c,s){c[1]!=""?i?s&2&&p(i,1):(i=Re(),i.c(),p(i,1),i.m(e,r)):i&&(O(),w(i,1,1,()=>{i=null}),T())},i(c){l||(p(i),p(t.$$.fragment,c),l=!0)},o(c){w(i),w(t.$$.fragment,c),l=!1},d(c){c&&S(e),i&&i.d(),L(t)}}}function Re(n){let e,r;return e=new zt({}),{c(){j(e.$$.fragment)},m(t,l){k(e,t,l),r=!0},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Bt(n){let e,r,t=n[0]&&He(n);return{c(){t&&t.c(),e=Ke()},m(l,i){t&&t.m(l,i),E(l,e,i),r=!0},p(l,[i]){l[0]?t?(t.p(l,i),i&1&&p(t,1)):(t=He(l),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(O(),w(t,1,1,()=>{t=null}),T())},i(l){r||(p(t),r=!0)},o(l){w(t),r=!1},d(l){t&&t.d(l),l&&S(e)}}}function Ht(n,e,r){let t,l;const{panelActive:i,show:c}=W;return U(n,i,s=>r(1,l=s)),U(n,c,s=>r(0,t=s)),Jt(),document.onkeyup=W.handleKeyUp,[t,l,i,c]}class Rt extends R{constructor(e){super(),H(this,e,Ht,Bt,J,{})}}new Rt({target:document.getElementById("app")});
