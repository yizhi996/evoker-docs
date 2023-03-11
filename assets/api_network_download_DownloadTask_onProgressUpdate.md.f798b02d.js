import{r as l,o,c as e,b as p,a as s}from"./app.f4d26b80.js";const t=s('<h1 id="downloadtask-onprogressupdate" tabindex="-1"><a href="./../DownloadTask.html">DownloadTask</a>.onProgressUpdate <a class="header-anchor" href="#downloadtask-onprogressupdate" aria-hidden="true">#</a></h1><p>\u76D1\u542C\u4E0B\u8F7D\u8FDB\u5EA6\u53D8\u5316\u4E8B\u4EF6\u3002</p><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3>',3),r=s(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> task </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/file/test.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePath</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">errMsg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">task</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onProgressUpdate</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">progress: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">progress</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),C=JSON.parse('{"title":"DownloadTask.onProgressUpdate","description":"","frontmatter":{},"headers":[{"level":3,"title":"Result","slug":"result","link":"#result","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/network/download/DownloadTask/onProgressUpdate.md","lastUpdated":1663688878000}'),c={name:"api/network/download/DownloadTask/onProgressUpdate.md"},d=Object.assign(c,{setup(D){const a=[{name:"progress",type:"number",desc:"\u4E0B\u8F7D\u8FDB\u5EA6\u767E\u5206\u6BD4, 0 - 100"},{name:"totalBytesWritten",type:"number",desc:"\u5DF2\u7ECF\u4E0B\u8F7D\u7684\u6570\u636E\u957F\u5EA6\uFF0C\u5355\u4F4D Bytes"},{name:"totalBytesExpectedToWrite",type:"number",desc:"\u9884\u671F\u9700\u8981\u4E0B\u8F7D\u7684\u6570\u636E\u603B\u957F\u5EA6\uFF0C\u5355\u4F4D Bytes"}];return(y,A)=>{const n=l("Results");return o(),e("div",null,[t,p(n,{data:a}),r])}}});export{C as __pageData,d as default};