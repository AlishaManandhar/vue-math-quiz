import{o as a,c as l,a as r,t as _,F as m,r as f,n as w,w as b,b as h,d as p,e as v,f as y}from"./vendor.d33b6387.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};A();var u=(s,n)=>{const i=s.__vccOpts||s;for(const[c,e]of n)i[c]=e;return i};const x={props:["count","total","resetData"]},g={class:"nav mt-3 pb-3"},q=r("li",{class:"nav-item"},[r("a",{class:"nav-link disabled"},"Fancy Computer Quiz")],-1),Q={class:"nav-item"},k={class:"nav-link disabled"};function C(s,n,i,c,e,t){return a(),l("ul",g,[q,r("li",Q,[r("a",k,"Count "+_(i.count)+"/"+_(i.total),1)]),r("button",{type:"button",class:"btn btn-danger shadow-none",onClick:n[0]||(n[0]=o=>i.resetData())},"Reset")])}var L=u(x,[["render",C]]);const S={props:["question","next","increment"],data(){return{selectedAnswer:"",isAnswered:!1}},watch:{question(){this.isAnswered=!1,this.selectedAnswer=""}},computed:{shuffleAnswers(){let s=[...this.question.incorrect_answers,this.question.correct_answer];return s.sort(()=>Math.random()-.5),s}},methods:{selectAnswer(s){this.selectedAnswer=s},handleSubmit(){this.isAnswered=!0,this.selectedAnswer===this.question.correct_answer&&this.increment()},renderCSS(s){if(!this.isAnswered&&this.selectedAnswer===s)return"selected";if(this.isAnswered){if(this.selectedAnswer===s&&s!==this.question.correct_answer)return"incorrect";if(s===this.question.correct_answer)return"correct"}}}},B={class:"card text-center"},H={class:"card-body"},M=["innerHTML"],N={class:"list-group mb-3"},T=["onClick","innerHTML"],$=["disabled"],D=["disabled"];function O(s,n,i,c,e,t){return a(),l("div",B,[r("div",H,[r("div",{innerHTML:i.question.question,class:"card-text pb-2"},null,8,M),r("ul",N,[(a(!0),l(m,null,f(t.shuffleAnswers,o=>(a(),l("li",{class:w(["list-group-item",t.renderCSS(o)]),key:o,onClick:b(d=>!e.isAnswered&&t.selectAnswer(o),["prevent"]),innerHTML:o},null,10,T))),128))]),r("button",{type:"button",class:"btn btn-primary me-2 shadow-none",onClick:n[0]||(n[0]=o=>t.handleSubmit()),disabled:e.isAnswered||e.selectedAnswer.length<1}," Submit ",8,$),r("button",{type:"button",class:"btn btn-success shadow-none",onClick:n[1]||(n[1]=o=>e.isAnswered&&i.next()),disabled:!e.isAnswered}," Next ",8,D)])])}var E=u(S,[["render",O],["__scopeId","data-v-f4c45c7e"]]);const F={data(){return{totalQuestion:0,correctAnswer:0,questions:[]}},async mounted(){const n=await(await fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple",{method:"GET"})).json();this.questions=n.results},methods:{incrementIndex(){this.correctAnswer+=1},nextQuestion(){this.totalQuestion<=8?this.totalQuestion+=1:(alert("Score is "+this.correctAnswer+"/"+this.totalQuestion),this.reset())},async reset(){const n=await(await fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple",{method:"GET"})).json();this.questions=n.results,this.correctAnswer=0,this.totalQuestion=0}},components:{Header:L,QuestionBox:E}},I={key:0,class:"container"},V={class:"row"},j={class:"col-sm-6 offset-3"},z=r("hr",null,null,-1);function G(s,n,i,c,e,t){const o=h("Header"),d=h("QuestionBox");return e.questions.length?(a(),l("div",I,[r("div",V,[r("div",j,[p(o,{count:e.correctAnswer,total:e.totalQuestion,resetData:t.reset},null,8,["count","total","resetData"]),z,p(d,{question:e.questions[e.totalQuestion],next:t.nextQuestion,increment:t.incrementIndex},null,8,["question","next","increment"])])])])):v("",!0)}var P=u(F,[["render",G]]);const K=y(P);K.mount("#app");
