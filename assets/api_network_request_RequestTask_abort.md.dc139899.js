import{_ as s,o as a,c as n,a as l}from"./app.f4d26b80.js";const i=JSON.parse('{"title":"RequestTask.abort","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/network/request/RequestTask/abort.md","lastUpdated":1663688878000}'),p={name:"api/network/request/RequestTask/abort.md"},o=l(`<h1 id="requesttask-abort" tabindex="-1"><a href="./../RequestTask.html">RequestTask</a>.abort <a class="header-anchor" href="#requesttask-abort" aria-hidden="true">#</a></h1><p>\u4E2D\u65AD\u8BF7\u6C42\u4EFB\u52A1\u3002</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> task </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/api/test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abort</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">task</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abort</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(r,c,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};