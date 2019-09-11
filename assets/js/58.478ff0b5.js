(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{245:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v(t._s((t.$page.frontmatter.start=602,null)))]),t._v(" "),r("h3",{attrs:{id:"自动链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动链接")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#autolink",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动链接"),r("OutboundLink")],1),t._v("是"),r("code",[t._v("<")]),t._v("和"),r("code",[t._v(">")]),t._v("标签中的绝对 URI 和电子邮件地址。它们在链接标签中最终会被解析为 URL 或电子邮件地址。"),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.github.com/gfm/#uri-autolink",target:"_blank",rel:"noopener noreferrer"}},[t._v("URI 自动链接"),r("OutboundLink")],1),t._v("由"),r("code",[t._v("<")]),t._v("，后面是 "),r("code",[t._v(">")]),t._v("的"),r("a",{attrs:{href:"https://github.github.com/gfm/#absolute-uri",target:"_blank",rel:"noopener noreferrer"}},[t._v("绝对 URI"),r("OutboundLink")],1),t._v(" 组成。它被解析为 URI 的链接，URI 作为链接的标签。"),r("br"),t._v("\n出于这些目的，"),r("a",{attrs:{href:"https://github.github.com/gfm/#absolute-uri",target:"_blank",rel:"noopener noreferrer"}},[t._v("绝对 URI"),r("OutboundLink")],1),t._v(" 由一个 "),r("a",{attrs:{href:"https://github.github.com/gfm/#scheme",target:"_blank",rel:"noopener noreferrer"}},[t._v("scheme"),r("OutboundLink")],1),t._v(" + 冒号（"),r("code",[t._v(":")]),t._v("）后跟零个或多个字符而不是 ASCII "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("空格"),r("OutboundLink")],1),t._v("和控制字符, 和"),r("code",[t._v("<")]),t._v("与"),r("code",[t._v(">")]),t._v("组成。如果 URI 包含这些字符，则必须对其进行百分比编码（例如，空格为"),r("code",[t._v("%20")]),t._v("）。"),r("br"),t._v("\n出于本规范的目的，一个"),r("a",{attrs:{href:"https://github.github.com/gfm/#scheme",target:"_blank",rel:"noopener noreferrer"}},[t._v("方案"),r("OutboundLink")],1),t._v("是由 2-32 个字符组成的任何序列，以 ASCII 字母开头，后跟 ASCII 字母，数字或符号的任意组合或者加号（"),r("code",[t._v("+")]),t._v("），句点（"),r("code",[t._v(".")]),t._v("）或 连字符（"),r("code",[t._v("-")]),t._v("）。"),r("br"),t._v("\n这里是一些有效的自动链接："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("大写字母也可以："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("请注意，许多用于本规范的"),r("a",{attrs:{href:"https://github.github.com/gfm/#absolute-uri",target:"_blank",rel:"noopener noreferrer"}},[t._v("绝对 URI"),r("OutboundLink")],1),t._v(" 的字符串都不是有效的 URI，因为它们的方案未注册或由于其语法存在问题："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("自动链接中不允许使用空格："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("反斜杠转义在自动链接中不起作用："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#email-autolink",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子邮件自动链接"),r("OutboundLink")],1),t._v("包含"),r("code",[t._v("<")]),t._v("，后跟电子邮件地址和 "),r("code",[t._v(">")]),t._v("。 链接的标签是电子邮件地址，URL 是"),r("code",[t._v("mailto:")]),t._v("后跟电子邮件地址。"),r("br"),t._v("\n出于这些目的，"),r("a",{attrs:{href:"https://github.github.com/gfm/#email-address",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子邮件地址"),r("OutboundLink")],1),t._v("是与"),r("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/forms.html#e-mail-state-(type=email)",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 规范中的非规范正则表达式"),r("OutboundLink")],1),t._v("匹配的任何内容：")]),t._v(" "),r("pre",[r("code",[t._v("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\n(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/\n")])]),t._v(" "),r("p",[t._v("电子邮件链接示例："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("反斜杠转义在电子邮件自动链接中不起作用："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("这些不是自动链接："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1)},[],!1,null,null,null);e.default=n.exports}}]);