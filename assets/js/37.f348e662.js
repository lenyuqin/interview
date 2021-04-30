(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{444:function(v,_,t){"use strict";t.r(_);var r=t(21),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"http和https的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http和https的区别"}},[v._v("#")]),v._v(" HTTP和HTTPS的区别")]),v._v(" "),t("ol",[t("li",[v._v("端口不同：HTTP使用的是80端口，HTTPS使用443端口；")]),v._v(" "),t("li",[v._v("HTTP认证机制，更加安全；")]),v._v(" "),t("li",[v._v("HTTPS由于加密解密会带来更大的CPU和内存开销；")]),v._v(" "),t("li",[v._v("HTTPS通信需要证书，一般需要向证书颁发机构（CA）购买")])]),v._v(" "),t("h3",{attrs:{id:"tls-握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tls-握手"}},[v._v("#")]),v._v(" TLS 握手")]),v._v(" "),t("p",[v._v("客户端发送一个 "),t("code",[v._v("ClientHello")]),v._v(" 消息到服务器端，消息中同时包含了它的 Transport Layer Security "),t("strong",[v._v("(TLS) 版本，可用的加密算法和压缩算法.")])]),v._v(" "),t("p",[v._v("服务器端向客户端返回一个 "),t("code",[v._v("ServerHello")]),v._v(" 消息，消息中包含了"),t("strong",[v._v("服务器端的TLS版本，服务器所选择的加密和压缩算法，以及数字证书认证机构.（Certificate Authority，缩写 CA）签发的服务器公开证书，证书中包含了公钥。客户端会使用这个公钥加密接下来的握手过程，直到协商生成一个新的对称密钥.")])]),v._v(" "),t("p",[v._v("客户端根据自己的信任CA列表，"),t("strong",[v._v("验证服务器端的证书是否可信。如果认为可信，客户端会生成一串伪随机数，使用服务器的公钥加密它。这串随机数会被用于生成新的对称密钥.")])]),v._v(" "),t("p",[v._v("服务器端使用自己的"),t("strong",[v._v("私钥解密上面提到的随机数，然后使用这串随机数生成自己的对称主密钥.")])]),v._v(" "),t("p",[v._v("客户端发送一个 "),t("code",[v._v("Finished")]),v._v(" 消息给服务器端，使用对称密钥加密这次通讯的一个散列值.")]),v._v(" "),t("p",[v._v("服务器端生成自己的 hash 值，然后解密客户端发送来的信息，检查这两个值是否对应。如果对应，就向客户端发送一个 "),t("code",[v._v("Finished")]),v._v(" 消息，也使用协商好的对称密钥加密.")]),v._v(" "),t("p",[v._v("从现在开始，接下来整个 TLS 会话都使用对称秘钥进行加密，传输应用层（HTTP）内容.")]),v._v(" "),t("h3",{attrs:{id:"http协议的响应码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http协议的响应码"}},[v._v("#")]),v._v(" HTTP协议的响应码")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("状态码")]),v._v(" "),t("th",[v._v("响应类别")]),v._v(" "),t("th",[v._v("原因短语")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1xx")]),v._v(" "),t("td",[v._v("信息性状态码（Informational）")]),v._v(" "),t("td",[v._v("服务器正在处理请求")])]),v._v(" "),t("tr",[t("td",[v._v("2xx")]),v._v(" "),t("td",[v._v("成功状态码（Success）")]),v._v(" "),t("td",[v._v("请求已正常处理完毕")])]),v._v(" "),t("tr",[t("td",[v._v("3xx")]),v._v(" "),t("td",[v._v("重定向状态码（Redirection）")]),v._v(" "),t("td",[v._v("需要进行额外操作以完成请求")])]),v._v(" "),t("tr",[t("td",[v._v("4xx")]),v._v(" "),t("td",[v._v("客户端错误状态码（Client Error）")]),v._v(" "),t("td",[v._v("客户端原因导致服务器无法处理请求")])]),v._v(" "),t("tr",[t("td",[v._v("5xx")]),v._v(" "),t("td",[v._v("服务器错误状态码（Server Error）")]),v._v(" "),t("td",[v._v("服务器原因导致处理请求出错")])])])]),v._v(" "),t("p",[v._v("下面是一些常见的")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("200 ok")]),v._v(" 这个是最常见的，表示请求在服务器被正确处理了。")]),v._v(" "),t("li",[t("strong",[v._v("204 no content")]),v._v(" 请求在服务器端被正确处理了，但是返回的响应报文中没有实体内容。一般用在只是客户端向服务器发送信息，而服务器不用向客户端返回什么信息的情况。")]),v._v(" "),t("li",[t("strong",[v._v("301 Moved Permanently")]),v._v(" 永久性重定向，代表资源的链接已经更换了url,在响应报文中会包含新的链接地址。")]),v._v(" "),t("li",[t("strong",[v._v("400 Bad Request")]),v._v(" 发送的请求中含有HTTP认证信息，认证未通过。 返回401的响应必须包含一个适用于被请求资源的WWW-Authenticate首部以质询用户信息")]),v._v(" "),t("li",[t("strong",[v._v("403 Forbidden")]),v._v(" 请求的资源拒绝被访问，一般是无权限访问。")]),v._v(" "),t("li",[t("strong",[v._v("404 Not Found")]),v._v(" 这个也很常见，请求的资源服务器找不到。")]),v._v(" "),t("li",[t("strong",[v._v("500 Internal Server Error")]),v._v(" 服务器在处理请求时，出错了。一般是服务器发生了异常状况")])]),v._v(" "),t("h3",{attrs:{id:"https连接的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https连接的过程"}},[v._v("#")]),v._v(" HTTPS连接的过程")]),v._v(" "),t("ol",[t("li",[v._v("客户端向服务器发送请求，同时发送客户端支持的一套加密规则（包括对称加密、非对称加密、摘要算法）；")]),v._v(" "),t("li",[v._v("服务器从中选出一组加密算法与HASH算法，并将自己的身份信息以证书的形式发回给浏览器。证书里面包含了网站地址，"),t("strong",[v._v("加密公钥")]),v._v("（用于非对称加密），以及证书的颁发机构等信息（证书中的私钥只能用于服务器端进行解密）；")]),v._v(" "),t("li",[v._v("客户端验证服务器的合法性，包括：证书是否过期，CA 是否可靠，发行者证书的公钥能否正确解开服务器证书的“发行者的数字签名”，服务器证书上的域名是否和服务器的实际域名相匹配；")]),v._v(" "),t("li",[v._v("如果证书受信任（不受信任会弹出警告），浏览器会生成一个"),t("strong",[v._v("随机密钥")]),v._v("（用于对称算法），并用服务器提供的公钥加密（采用非对称算法对密钥加密）；使用Hash算法对握手消息进行"),t("strong",[v._v("摘要")]),v._v("计算，并对摘要使用之前产生的密钥加密（对称算法）；将加密后的随机密钥和摘要一起发送给服务器；")]),v._v(" "),t("li",[v._v("服务器使用自己的私钥解密，得到对称加密的密钥，用这个密钥解密出Hash摘要值，并验证握手消息是否一致；如果一致，服务器使用对称加密的密钥加密握手消息发给浏览器；")]),v._v(" "),t("li",[v._v("浏览器解密并验证摘要，若一致，则握手结束。之后的数据传送都使用对称加密的密钥进行加密")])]),v._v(" "),t("p",[v._v("总结：非对称加密算法用于在握手过程中加密生成的密码；对称加密算法用于对真正传输的数据进行加密；HASH算法用于验证数据的完整性。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/22/c4a06e59470ca.jpg",alt:"preview"}})]),v._v(" "),t("h3",{attrs:{id:"http-1-1-相比-http-1-0-性能上的改进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-相比-http-1-0-性能上的改进"}},[v._v("#")]),v._v(" HTTP/1.1 相比 HTTP/1.0 性能上的改进")]),v._v(" "),t("ol",[t("li",[v._v("使用 TCP 长连接的方式改善了 HTTP/1.0 短连接造成的性能开销。")]),v._v(" "),t("li",[v._v("支持 管道（pipeline）网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。")]),v._v(" "),t("li",[v._v("HTTP/1.1还有缺点")]),v._v(" "),t("li",[v._v("请求 / 响应头部（Header）未经压缩就发送，首部信息越多延迟越大。只能压缩 "),t("code",[v._v("Body")]),v._v(" 的部分；")]),v._v(" "),t("li",[v._v("发送冗长的首部。每次互相发送相同的首部造成的浪费较多；")]),v._v(" "),t("li",[v._v("服务器是按请求的顺序响应的，如果服务器响应慢，会招致客户端一直请求不到数据，也就是队头阻塞；")]),v._v(" "),t("li",[v._v("没有请求优先级控制；")]),v._v(" "),t("li",[v._v("请求只能从客户端开始，服务器只能被动响应")])]),v._v(" "),t("h3",{attrs:{id:"http-2-0-的改进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0-的改进"}},[v._v("#")]),v._v(" HTTP/2.0 的改进")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("头部压缩")]),v._v(" 如果你同时发出多个请求，他们的头是一样的或是相似的，那么，协议会帮你"),t("strong",[v._v("消除重复的分")]),v._v("。（也叫HpaCK算法）")]),v._v(" "),t("li",[t("strong",[v._v("使用二进制格式来传输数据")]),v._v(" 并且统称为帧（frame）："),t("strong",[v._v("头信息帧和数据帧")]),v._v("，提高了是数据传输效率")]),v._v(" "),t("li",[t("strong",[v._v("HTTP/2 的数据包不是按顺序发送的")]),v._v(" 同一个连接里面连续的数据包，可能属于不同的回应。因此，必须要对数据包做标记，指出它属于哪个回应，每个请求或回应的所有数据包，称为一个数据流（"),t("code",[v._v("Stream")]),v._v("）。每个数据流都标记着一个独一无二的编号，其中规定客户端发出的数据流编号为奇数， 服务器发出的数据流编号为偶数")]),v._v(" "),t("li",[t("strong",[v._v("多路复用")]),v._v(" 在"),t("strong",[v._v("一个连接中并发多个请求或回应，而不用按照顺序一一对应")]),v._v("。不需要排队等待，也就不会再出现「队头阻塞」问题，"),t("strong",[v._v("降低了延迟，大幅度提高了连接的利用率")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("服务器推送")]),v._v(" HTTP/2 还在一定程度上改善了传统的「请求 - 应答」工作模式，服务不再是被动地响应，也可以"),t("strong",[v._v("主动")]),v._v("向客户端发送消息。举例来说，在浏览器刚请求 HTML 的时候，就提前把可能会用到的 JS、CSS 文件等静态资源主动发给客户端，"),t("strong",[v._v("减少延时的等待")]),v._v("，也就是服务器推送（Server Push，也叫 Cache Push）。")])]),v._v(" "),t("h3",{attrs:{id:"短连接和长连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短连接和长连接"}},[v._v("#")]),v._v(" 短连接和长连接")]),v._v(" "),t("p",[v._v("短连接：客户端和服务器每进行一次HTTP操作，就建立一次连接，任务结束时关闭连接")]),v._v(" "),t("p",[v._v("长连接：需要加上 "),t("code",[v._v("Connection:keep-alive")]),v._v(" 一个网页打开完成后，TCP连接不会关闭，客户端再次访问这个服务器时，会继续使用这一条已经建立的连接。Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件中设定这个时间。实现长连接需要客户端和服务端都支持长连接")]),v._v(" "),t("h3",{attrs:{id:"域名解析和区域复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名解析和区域复制"}},[v._v("#")]),v._v(" 域名解析和区域复制")]),v._v(" "),t("p",[v._v("域名解析使用的是UDP协议，因为传输非常快")]),v._v(" "),t("p",[v._v("DNS的规范规定了2种类型的DNS服务器，一个叫主DNS服务器，一个叫辅助DNS服务器。在一个区中主DNS服务器从自己本机的数据文件中读取该区的DNS数据信息，而辅助DNS服务器则从区的主DNS服务器中读取该区的DNS数据信息。当一个辅助DNS服务器启动时，它需要与主DNS服务器通信，并加载数据信息，这就叫做区传送（zone transfer）。 这种情况下，使用TCP协议。")])])}),[],!1,null,null,null);_.default=e.exports}}]);