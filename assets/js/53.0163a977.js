(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{257:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v(t._s((t.$page.frontmatter.start=321,null)))]),t._v(" "),r("h3",{attrs:{id:"实体和数字字符引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实体和数字字符引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 实体和数字字符引用")]),t._v(" "),r("p",[t._v("可以使用有效的 HTML 实体引用和数字字符引用来代替相应的 Unicode 字符，但以下情况除外：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("在代码块和行内代码中无法识别实体和字符引用。")])]),t._v(" "),r("li",[r("p",[t._v("实体和字符引用不能代替在 CommonMark 中定义结构元素的特殊字符。 例如，虽然 "),r("code",[t._v("&#42;")]),t._v(" 可用于代替字面量的 "),r("code",[t._v("*")]),t._v(" 字符，"),r("code",[t._v("&#42;")]),t._v(" 不能替代 在强调分隔符，无序列表标记或专门的换行中的 "),r("code",[t._v("*")]),t._v("。")])])]),t._v(" "),r("p",[t._v("符合 CommonMark 的解析器无需使用 Unicode 字符或实体引用，来存储有关特定字符是否在源中表示的信息。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#entity-references",target:"_blank",rel:"noopener noreferrer"}},[t._v("实体引用"),r("OutboundLink")],1),t._v("包含 "),r("code",[t._v("&")]),t._v(" + 任何有效的HTML5实体名 + "),r("code",[t._v(";")]),t._v("。文档"),r("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/entities.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://html.spec.whatwg.org/multipage/entities.json"),r("OutboundLink")],1),t._v("是一个有效实体引用和相应代码的权威来源。"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#decimal-numeric-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("十进制字符"),r("OutboundLink")],1),t._v("由"),r("code",[t._v("&#")]),t._v("+ 包含 1-7 个阿拉伯数字的字符串 + "),r("code",[t._v(";")]),t._v(" 组成，数字字符引用被解析为相应的 Unicode 字符。 无效的 Unicode 代码点将替换为 REPLACEMENT CHARACTER（"),r("code",[t._v("U+FFFD")]),t._v("）。 出于安全原因，代码点"),r("code",[t._v("U+0000")]),t._v("也将被"),r("code",[t._v("U+FFFD")]),t._v("替换。"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#hexadecimal-numeric-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("十六进制字符"),r("OutboundLink")],1),t._v("由 "),r("code",[t._v("&#")]),t._v(" + "),r("code",[t._v("X")]),t._v(" 或 "),r("code",[t._v("x")]),t._v(" + 1-6 个十六进制数字 + "),r("code",[t._v(";")]),t._v(" 组成，它们也被解析为相应的 Unicode 字符（这次使用十六进制数字而不是十进制数字）。"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("以下是一些非实体引用："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("尽管 HTML5 中使用了一些没有尾随分号的实体引用（例如"),r("code",[t._v("&copy")]),t._v("），在这里没有识别，因为这会混淆语法。"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("不在 HTML5 命名实体列表中的字符串也不会被识别为实体引用："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("除了行内代码或代码块（包括 URL，"),r("a",{attrs:{href:"https://github.github.com/gfm/#link-title",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接标题"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://github.github.com/gfm/#fenced-code-block",target:"_blank",rel:"noopener noreferrer"}},[t._v("围栏代码块"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://github.github.com/gfm/#info-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("信息字符串"),r("OutboundLink")],1),t._v("）之外，实体和数字字符引用可以在任何上下文中被识别："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("实体和数字字符引用在行内代码和代码块中被视为文字文本："),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("实体和数字字符引用不能用于代替表示 CommonMark 文档中结构的符号。")]),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1)},[],!1,null,null,null);e.default=n.exports}}]);