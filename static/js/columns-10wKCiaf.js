import{r as e}from"./rolldown-runtime-DMcso9tT.js";import{K as t,St as n,bt as r}from"./vue.runtime.esm-bundler-DIu5y9Tj.js";import{ia as i,mt as a,ra as o,ut as s}from"./index-0RTv-Lsw.js";import{t as c}from"./data-Cm0ZzBah.js";var l=e({useColumns:()=>u});i();function u(){let e=n([]),i=n(!0),l=[{label:`日期`,prop:`date`},{label:`姓名`,prop:`name`},{label:`地址`,prop:`address`}],u=r({pageSize:20,currentPage:1,pageSizes:[20,40,60],total:0,align:`right`,background:!0,size:`default`}),d=r({text:`正在加载第一页...`,viewBox:`-10, -10, 50, 50`,spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),f={offsetBottom:110};function p(e){}function m(e){d.text=`正在加载第${e}页...`,i.value=!0,a(600).then(()=>{i.value=!1})}return t(()=>{a(600).then(()=>{let t=[];Array.from({length:6}).forEach(()=>{t.push(s(c,!0))}),t.flat(1/0).forEach((t,n)=>{e.value.push(o({id:n},t))}),u.total=e.value.length,i.value=!1})}),{loading:i,columns:l,dataList:e,pagination:u,loadingConfig:d,adaptiveConfig:f,onSizeChange:p,onCurrentChange:m}}export{u as n,l as t};