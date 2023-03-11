import{r as l,o as e,c as p,b as o,a as s}from"./app.f4d26b80.js";const r=s('<h1 id="filesystemmanager-readsync" tabindex="-1">FileSystemManager.readSync <a class="header-anchor" href="#filesystemmanager-readsync" aria-hidden="true">#</a></h1><p><a href="./read.html">FileSystemManager.read</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>',3),t=s(`<h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><p><strong><a href="./../ReadResult.html">ReadResult</a></strong></p><p>\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> flag</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ab</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ArrayBuffer</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1024</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fd</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    arrayBuffer</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ab</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    length</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),d=JSON.parse('{"title":"FileSystemManager.readSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/readSync.md","lastUpdated":1663688878000}'),c={name:"api/file/FileSystemManager/readSync.md"},A=Object.assign(c,{setup(y){const a=[{name:"fd",type:"string",default:"",required:!0,desc:'\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002\u901A\u8FC7 <a href="./open">FileSystemManager.open</a> \u63A5\u53E3\u83B7\u5F97'},{name:"arrayBuffer",type:"ArrayBuffer",default:"",required:!0,desc:"\u6570\u636E\u5199\u5165\u7684\u7F13\u51B2\u533A\uFF0C\u5FC5\u987B\u662F ArrayBuffer \u5B9E\u4F8B"},{name:"offset",type:"number",default:"0",required:!1,desc:"\u7F13\u51B2\u533A\u4E2D\u7684\u5199\u5165\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA40"},{name:"length",type:"number",default:"0",required:!1,desc:"\u8981\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u7684\u5B57\u8282\u6570\uFF0C\u9ED8\u8BA40"},{name:"position",type:"number",default:"",required:!1,desc:"\u6587\u4EF6\u8BFB\u53D6\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u5982\u4E0D\u4F20\u6216\u4F20 null\uFF0C\u5219\u4F1A\u4ECE\u5F53\u524D\u6587\u4EF6\u6307\u9488\u7684\u4F4D\u7F6E\u8BFB\u53D6\u3002\u5982\u679C position \u662F\u6B63\u6574\u6570\uFF0C\u5219\u6587\u4EF6\u6307\u9488\u4F4D\u7F6E\u4F1A\u4FDD\u6301\u4E0D\u53D8\u5E76\u4ECE position \u8BFB\u53D6\u6587\u4EF6"}];return(F,D)=>{const n=l("Props");return e(),p("div",null,[r,o(n,{data:a}),t])}}});export{d as __pageData,A as default};