(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{473:function(t,s,r){"use strict";r.r(s);var a=r(21),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("h2",{attrs:{id:"nginx-负载均衡算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-负载均衡算法"}},[t._v("#")]),t._v(" NGINX 负载均衡算法")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("轮询")]),t._v(" （默认） 每个请求按时间顺序逐一分配到不同的后端服务")]),t._v(" "),r("li",[r("strong",[t._v("weight")]),t._v(" （轮询权值） weight的值越大分配到的访问概率越高")]),t._v(" "),r("li",[r("strong",[t._v("ip_hash")]),t._v(" 每个请求按访问IP的哈希结果分配，使来自同一个IP的访客固定访问一台后端服务器，并且可以有效解决动态网页存在的session共享问题。")]),t._v(" "),r("li",[r("strong",[t._v("fair")]),t._v("（第三方） 比 weight、ip_hash更加智能的负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，也就是根据后端服务器的响应时间 来分配请求，响应时间短的优先分配。")]),t._v(" "),r("li",[r("strong",[t._v("url_hash")]),t._v(" （第三方） 按访问的URL的哈希结果来分配请求，使每个URL定向到一台后端服务器，可以进一步提高后端缓存服务器的效率。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);