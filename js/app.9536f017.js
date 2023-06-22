(function(){"use strict";var t={279:function(t,e,a){var n=a(9242),s=a(3396);const o={id:"app"};function r(t,e){const a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(a)])}var i=a(89);const u={},c=(0,i.Z)(u,[["render",r],["__scopeId","data-v-3bbc5c08"]]);var l=c,d=a(2483);a(7658);const k=t=>((0,s.dD)("data-v-04658c31"),t=t(),(0,s.Cn)(),t),p={class:"container"},v=k((()=>(0,s._)("h1",null,"Welcome to Task Manager App!",-1)));function m(t,e){return(0,s.wg)(),(0,s.iD)("div",p,[v,(0,s._)("button",{class:"btn-tasks",onClick:e[0]||(e[0]=e=>t.$router.push("/tasks"))}," See tasks list ")])}const f={},b=(0,i.Z)(f,[["render",m],["__scopeId","data-v-04658c31"]]);var _=b,g=a(4870),h=a(65),w=a(7139);const T=t=>((0,s.dD)("data-v-187be341"),t=t(),(0,s.Cn)(),t),y={class:"li-task"},O={key:0},D=T((()=>(0,s._)("button",{type:"submit"},"Save",-1))),j={key:2};var S=(0,s.aZ)({__name:"TaskItem",props:{task:{type:Object,required:!0}},setup(t){const e=t,a=(0,h.oR)(),o=(0,g.iH)(null),r=(0,g.qj)({name:e.task.name}),i=t=>{a.dispatch("deleteTask",t)},u=t=>{if(o.value===t.id){const e={id:t.id,name:r.name};a.dispatch("updateTask",e),o.value=null}},c=t=>{o.value=t.id};return(e,a)=>((0,s.wg)(),(0,s.iD)("li",y,[o.value!==t.task.id?((0,s.wg)(),(0,s.iD)("span",O,(0,w.zw)(t.task.name),1)):((0,s.wg)(),(0,s.iD)("form",{key:1,onSubmit:a[1]||(a[1]=(0,n.iM)((e=>u(t.task)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>r.name=t)},null,512),[[n.nr,r.name]]),D],32)),o.value!==t.task.id?((0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("button",{onClick:a[2]||(a[2]=e=>c(t.task))},"Edit"),(0,s._)("button",{onClick:a[3]||(a[3]=e=>i(t.task.id))},"Delete")])):(0,s.kq)("",!0)]))}});const C=(0,i.Z)(S,[["__scopeId","data-v-187be341"]]);var I=C;const Z=t=>((0,s.dD)("data-v-3ab45214"),t=t(),(0,s.Cn)(),t),P={class:"list-container"},x=["onSubmit"],M=Z((()=>(0,s._)("button",{class:"btn-create-task",type:"submit"},"Create task",-1)));var q=(0,s.aZ)({__name:"TaskList",setup(t){const e=(0,h.oR)(),a=(0,s.Fl)((()=>e.state.tasks)),o=(0,g.qj)({name:""}),r=()=>{if(!o.name)return;const t={id:Date.now(),name:o.name};e.dispatch("addTask",t),o.name=""};return(t,e)=>((0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("form",{onSubmit:(0,n.iM)(r,["prevent"])},[(0,s._)("label",null,[(0,s.wy)((0,s._)("input",{class:"input-create-task","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t)},null,512),[[n.nr,o.name]])]),M],40,x),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.value,(t=>((0,s.wg)(),(0,s.j4)(I,{key:t.id,task:t},null,8,["task"])))),128))])]))}});const J=(0,i.Z)(q,[["__scopeId","data-v-3ab45214"]]);var N=J;const H=t=>((0,s.dD)("data-v-25cd762b"),t=t(),(0,s.Cn)(),t),L={class:"container"},W=H((()=>(0,s._)("h2",null,"Tasks",-1)));var E=(0,s.aZ)({__name:"TaskListPage",setup(t){return(t,e)=>((0,s.wg)(),(0,s.iD)("div",L,[W,(0,s.Wm)(N)]))}});const F=(0,i.Z)(E,[["__scopeId","data-v-25cd762b"]]);var R=F;const U=[{path:"/",name:"HomePage",component:_},{path:"/tasks",name:"TaskListPage",component:R}],V=(0,d.p7)({history:(0,d.PO)("/todo-vuejs/"),routes:U});var z=V;const A="tasks",K=(0,h.MT)({state:{tasks:[]},mutations:{addTask(t,e){t.tasks.push(e),localStorage.setItem(A,JSON.stringify(t.tasks))},deleteTask(t,e){t.tasks=t.tasks.filter((t=>t.id!==e)),localStorage.setItem(A,JSON.stringify(t.tasks))},updateTask(t,e){const a=t.tasks.find((t=>t.id===e.id));a&&(a.name=e.name),localStorage.setItem(A,JSON.stringify(t.tasks))},setTasks(t,e){t.tasks=e}},actions:{addTask({commit:t},e){t("addTask",e)},deleteTask({commit:t},e){t("deleteTask",e)},updateTask({commit:t},e){t("updateTask",e)}}}),Y=localStorage.getItem(A);null!=Y&&K.commit("setTasks",JSON.parse(Y));var $=K;(0,n.ri)(l).use(z).use($).mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],s=t[l][1],o=t[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,r=n[0],i=n[1],u=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(u)var l=u(a)}for(e&&e(n);c<r.length;c++)o=r[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},n=self["webpackChunktodo_vuejs"]=self["webpackChunktodo_vuejs"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(279)}));n=a.O(n)})();
//# sourceMappingURL=app.9536f017.js.map