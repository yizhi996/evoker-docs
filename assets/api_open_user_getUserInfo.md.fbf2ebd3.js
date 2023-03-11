import{_ as t,r as n,o as c,c as r,d as s,b as a,e as o,a as l}from"./app.f4d26b80.js";const I=JSON.parse('{"title":"ek.getUserInfo","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/open/user/getUserInfo.md","lastUpdated":1663688878000}'),y={name:"api/open/user/getUserInfo.md"},F=s("h1",{id:"ek-getuserinfo",tabindex:"-1"},[o("ek.getUserInfo "),s("a",{class:"header-anchor",href:"#ek-getuserinfo","aria-hidden":"true"},"#")],-1),D=o(" \u652F\u6301 Promise"),A=l('<blockquote><p>\u9700\u8981\u7528\u6237\u6388\u6743 <code>scope.userInfo</code>\u3002</p></blockquote><p>\u7EDF\u4E00\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u9700\u8981\u5728 Native \u81EA\u884C\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u672C\u63A5\u53E3\uFF0C\u76F4\u63A5\u5728 JS \u7AEF\u81EA\u884C\u5B9E\u73B0\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u63A5\u53E3\u53EA\u80FD\u5728\u5DF2\u7ECF\u6388\u6743\u7684\u60C5\u51B5\u4E0B\u76F4\u63A5\u8C03\u7528\uFF0C\u672A\u6388\u6743\u5C06\u8FD4\u56DE\u9519\u8BEF\u3002\u9996\u6B21\u8C03\u7528\u9700\u8981\u4F7F\u7528 <a href="./../../../component/button.html">button</a> \u7684 open-type \u6765\u5F39\u7A97\u83B7\u53D6\u6388\u6743\u548C\u7528\u6237\u4FE1\u606F\u3002\u4E00\u65E6\u7528\u6237\u540C\u610F\u6388\u6743\uFF0C\u4E4B\u540E\u4F7F\u7528 open-type \u5C06\u4E0D\u4F1A\u5F39\u7A97\u3002</p></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>',4),C=l(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">open-type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getUserInfo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">getuserinfo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">getUserInfo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u83B7\u53D6\u7528\u6237\u4FE1\u606F</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">// \u5728\u5DF2\u7ECF\u6388\u6743\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u65E0\u9700\u901A\u8FC7 open-type \u7684\u65B9\u5F0F\u83B7\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSetting</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUserInfo</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">userInfo</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u901A\u8FC7 open-type \u7684\u65B9\u5F0F\u6388\u6743\u5E76\u4E14\u83B7\u53D6\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getUserInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ev</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">userInfo</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2);function i(_,d,u,g,f,h){const p=n("Icon"),e=n("Props");return c(),r("div",null,[F,s("blockquote",null,[a(p,{type:"success"}),D]),A,a(e,{options:""}),C])}const E=t(y,[["render",i]]);export{I as __pageData,E as default};