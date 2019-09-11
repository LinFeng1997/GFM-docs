(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{278:function(t,e,r){"use strict";r.r(e);var n=r(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"github-flavored-markdown-spec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-flavored-markdown-spec","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Flavored Markdown Spec")]),t._v(" "),r("p",[t._v("Version 0.29-gfm (2019-04-06)"),r("br"),t._v("\nThis formal specification is based on the "),r("a",{attrs:{href:"http://spec.commonmark.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonMark Spec"),r("OutboundLink")],1),t._v(" by "),r("a",{attrs:{href:"http://github.com/jgm",target:"_blank",rel:"noopener noreferrer"}},[t._v("John MacFarlane"),r("OutboundLink")],1),t._v(" and licensed under "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.creativecommons.org/l/by-sa/4.0/80x15.png",alt:"Creative Commons BY-SA"}}),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Introduction/"}},[t._v("1. Introduction")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Introduction.html#_1-what-is-github-flavored-markdown"}},[t._v("1.1 What is GitHub Flavored Markdown?")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Introduction.html#_2-what-is-markdown"}},[t._v("1.2 What is Markdown?")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Introduction.html#_3-why-is-a-spec-needed"}},[t._v("1.3 Why is a spec needed?")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Introduction.html#_4-about-this-document"}},[t._v("1.4 About this document")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Preliminaries/"}},[t._v("2. Preliminaries")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Preliminaries/"}},[t._v("2.1 Characters and lines")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Preliminaries.html#_2-tabs"}},[t._v("2.2 Tabs")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Preliminaries.html#_3-insecure-characters"}},[t._v("2.3 Insecure characters")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Blocks and inlines.html"}},[t._v("3. Blocks and inlines")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Blocks and inlines.html"}},[t._v("3.1 Precedence")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Blocks and inlines.html#container-blocks-and-leaf-blocks"}},[t._v("3.2 Container blocks and leaf blocks")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/"}},[t._v("4. Leaf blocks")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Thematic breaks.html"}},[t._v("4.1 Thematic breaks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/ATX headings.html"}},[t._v("4.2 ATX headings")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Setext headings.html"}},[t._v("4.3 Setext headings")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Indented code blocks.html"}},[t._v("4.4 Indented code blocks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Fenced code blocks.html"}},[t._v("4.5 Fenced code blocks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/HTML blocks.html"}},[t._v("4.6 HTML blocks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Link reference definitions.html"}},[t._v("4.7 Link reference definitions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Paragraphs.html"}},[t._v("4.8 Paragraphs")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Blank lines.html"}},[t._v("4.9 Blank lines")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Leaf blocks/Tables extension.html"}},[t._v("4.10 Tables (extension)")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Container blocks/"}},[t._v("5. Container blocks")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Container blocks/Block quotes.html"}},[t._v("5.1 Block quotes")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Container blocks/List items.html"}},[t._v("5.2 List items")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Container blocks/Task list items.html"}},[t._v("5.3 Task list items (extension)")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Container blocks/Lists/"}},[t._v("5.4 Lists")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/"}},[t._v("6. Inlines")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Inlines/Backslash escapes.html"}},[t._v("6.1 Backslash escapes")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Entity and numeric character references.html"}},[t._v("6.2 Entity and numeric character references")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Code spans.html"}},[t._v("6.3 Code spans")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Emphasis and strong emphasis.html"}},[t._v("6.4 Emphasis and strong emphasis")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Strikethrough/"}},[t._v("6.5 Strikethrough (extension)")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Links/"}},[t._v("6.6 Links")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Images/"}},[t._v("6.7 Images")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Autolinks/"}},[t._v("6.8 Autolinks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Autolinks extension/"}},[t._v("6.9 Autolinks (extension)")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Raw HTML/"}},[t._v("6.10 Raw HTML")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Disallowed Raw HTML/"}},[t._v("6.11 Disallowed Raw HTML (extension)")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Hard line breaks/"}},[t._v("6.12 Hard line breaks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Soft line breaks/"}},[t._v("6.13 Soft line breaks")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Inlines/Textual content/"}},[t._v("6.14 Textual content")])],1)])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Appendix/"}},[t._v("Appendix: A parsing strategy")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/Appendix/Overview/"}},[t._v("Overview")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Appendix/block structure/"}},[t._v("Phase 1: block structure")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/Appendix/inline structure/"}},[t._v("Phase 2: inline structure")])],1)])],1)])])},[],!1,null,null,null);e.default=i.exports}}]);