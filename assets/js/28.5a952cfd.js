(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{270:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v(t._s((t.$page.frontmatter.start=632,null)))]),t._v(" "),r("h3",{attrs:{id:"raw-html"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raw-html","aria-hidden":"true"}},[t._v("#")]),t._v(" Raw HTML")]),t._v(" "),r("p",[t._v("Text between "),r("code",[t._v("<")]),t._v(" and "),r("code",[t._v(">")]),t._v(" that looks like an HTML tag is parsed as a raw HTML tag and will be rendered in HTML without escaping. Tag and attribute names are not limited to current HTML tags, so custom tags (and even, say, DocBook tags) may be used."),r("br"),t._v("\nHere is the grammar for tags:"),r("br"),t._v("\nA "),r("a",{attrs:{href:"https://github.github.com/gfm/#tag-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("tag name"),r("OutboundLink")],1),t._v(" consists of an ASCII letter followed by zero or more ASCII letters, digits, or hyphens ("),r("code",[t._v("-")]),t._v(").")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute"),r("OutboundLink")],1),t._v(" consists of "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", an "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute name"),r("OutboundLink")],1),t._v(", and an optional "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-value-specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute value specification"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute name"),r("OutboundLink")],1),t._v(" consists of an ASCII letter, "),r("code",[t._v("_")]),t._v(", or "),r("code",[t._v(":")]),t._v(", followed by zero or more ASCII letters, digits, "),r("code",[t._v("_")]),t._v(", "),r("code",[t._v(".")]),t._v(", "),r("code",[t._v(":")]),t._v(", or "),r("code",[t._v("-")]),t._v(". (Note: This is the XML specification restricted to ASCII. HTML5 is laxer.)")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-value-specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute value specification"),r("OutboundLink")],1),t._v(" consists of optional "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", a "),r("code",[t._v("=")]),t._v(" character, optional "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", and an "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute value"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute value"),r("OutboundLink")],1),t._v(" consists of an "),r("a",{attrs:{href:"https://github.github.com/gfm/#unquoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("unquoted attribute value"),r("OutboundLink")],1),t._v(", a "),r("a",{attrs:{href:"https://github.github.com/gfm/#single-quoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-quoted attribute value"),r("OutboundLink")],1),t._v(", or a "),r("a",{attrs:{href:"https://github.github.com/gfm/#double-quoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("double-quoted attribute value"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#unquoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("unquoted attribute value"),r("OutboundLink")],1),t._v(" is a nonempty string of characters not including "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", "),r("code",[t._v('"')]),t._v(", "),r("code",[t._v("'")]),t._v(", "),r("code",[t._v("=")]),t._v(", "),r("code",[t._v("<")]),t._v(", "),r("code",[t._v(">")]),t._v(", or "),r("code",[t._v("`")]),t._v(".")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#single-quoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-quoted attribute value"),r("OutboundLink")],1),t._v(" consists of "),r("code",[t._v("'")]),t._v(", zero or more characters not including "),r("code",[t._v("'")]),t._v(", and a final "),r("code",[t._v("'")]),t._v(".")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#double-quoted-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("double-quoted attribute value"),r("OutboundLink")],1),t._v(" consists of "),r("code",[t._v('"')]),t._v(", zero or more characters not including "),r("code",[t._v('"')]),t._v(", and a final "),r("code",[t._v('"')]),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#open-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("open tag"),r("OutboundLink")],1),t._v(" consists of a "),r("code",[t._v("<")]),t._v(" character, a "),r("a",{attrs:{href:"https://github.github.com/gfm/#tag-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("tag name"),r("OutboundLink")],1),t._v(", zero or more "),r("a",{attrs:{href:"https://github.github.com/gfm/#attribute",target:"_blank",rel:"noopener noreferrer"}},[t._v("attributes"),r("OutboundLink")],1),t._v(", optional "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", an optional "),r("code",[t._v("/")]),t._v(" character, and a "),r("code",[t._v(">")]),t._v(" character.")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#closing-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("closing tag"),r("OutboundLink")],1),t._v(" consists of the string "),r("code",[t._v("</")]),t._v(", a "),r("a",{attrs:{href:"https://github.github.com/gfm/#tag-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("tag name"),r("OutboundLink")],1),t._v(", optional "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", and the character "),r("code",[t._v(">")]),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#html-comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML comment"),r("OutboundLink")],1),t._v(" consists of "),r("code",[t._v("\x3c!--")]),t._v(" + "),r("em",[t._v("text")]),t._v(" + "),r("code",[t._v("--\x3e")]),t._v(", where "),r("em",[t._v("text")]),t._v(" does not start with "),r("code",[t._v(">")]),t._v(" or "),r("code",[t._v("->")]),t._v(", does not end with "),r("code",[t._v("-")]),t._v(", and does not contain "),r("code",[t._v("--")]),t._v(". (See the "),r("a",{attrs:{href:"http://www.w3.org/TR/html5/syntax.html#comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 spec"),r("OutboundLink")],1),t._v(".)")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#processing-instruction",target:"_blank",rel:"noopener noreferrer"}},[t._v("processing instruction"),r("OutboundLink")],1),t._v(" consists of the string "),r("code",[t._v("<?")]),t._v(", a string of characters not including the string "),r("code",[t._v("?>")]),t._v(", and the string "),r("code",[t._v("?>")]),t._v(".")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#declaration",target:"_blank",rel:"noopener noreferrer"}},[t._v("declaration"),r("OutboundLink")],1),t._v(" consists of the string "),r("code",[t._v("<!")]),t._v(", a name consisting of one or more uppercase ASCII letters,"),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(", a string of characters not including the character "),r("code",[t._v(">")]),t._v(", and the character "),r("code",[t._v(">")]),t._v(".")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://github.github.com/gfm/#cdata-section",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDATA section"),r("OutboundLink")],1),t._v(" consists of the string "),r("code",[t._v("<![CDATA[")]),t._v(", a string of characters not including the string "),r("code",[t._v("]]>")]),t._v(", and the string "),r("code",[t._v("]]>")]),t._v(".")]),t._v(" "),r("p",[t._v("An "),r("a",{attrs:{href:"https://github.github.com/gfm/#html-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML tag"),r("OutboundLink")],1),t._v(" consists of an "),r("a",{attrs:{href:"https://github.github.com/gfm/#open-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("open tag"),r("OutboundLink")],1),t._v(", a "),r("a",{attrs:{href:"https://github.github.com/gfm/#closing-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("closing tag"),r("OutboundLink")],1),t._v(", an "),r("a",{attrs:{href:"https://github.github.com/gfm/#html-comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML comment"),r("OutboundLink")],1),t._v(", a "),r("a",{attrs:{href:"https://github.github.com/gfm/#processing-instruction",target:"_blank",rel:"noopener noreferrer"}},[t._v("processing instruction"),r("OutboundLink")],1),t._v(", a "),r("a",{attrs:{href:"https://github.github.com/gfm/#declaration",target:"_blank",rel:"noopener noreferrer"}},[t._v("declaration"),r("OutboundLink")],1),t._v(", or a "),r("a",{attrs:{href:"https://github.github.com/gfm/#cdata-section",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDATA section"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Here are some simple open tags:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Empty elements:\n"),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Whitespace"),r("OutboundLink")],1),t._v(" is allowed:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("With attributes:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Custom tag names can be used:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Illegal tag names, not parsed as HTML:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Illegal attribute names:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Illegal attribute values:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Illegal "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(":"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Missing "),r("a",{attrs:{href:"https://github.github.com/gfm/#whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitespace"),r("OutboundLink")],1),t._v(":"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Closing tags:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Illegal attributes in closing tag:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Comments:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),r("p",[t._v("Not comments:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Processing instructions:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Declarations:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("CDATA sections:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Entity and numeric character references are preserved in HTML attributes:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("p",[t._v("Backslash escapes do not work in HTML attributes:"),r("br"),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),r("Example",{attrs:{index:t.$page.frontmatter.start++}})],1)},[],!1,null,null,null);e.default=n.exports}}]);