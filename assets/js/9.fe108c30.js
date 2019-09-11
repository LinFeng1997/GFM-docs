(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{244:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"block-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" block structure")]),e._v(" "),o("p",[e._v("Each line that is processed has an effect on this tree. The line is analyzed and, depending on its contents, the document may be altered in one or more of the following ways:")]),e._v(" "),o("ol",[o("li",[e._v("One or more open blocks may be closed.")]),e._v(" "),o("li",[e._v("One or more new blocks may be created as children of the last open block.")]),e._v(" "),o("li",[e._v("Text may be added to the last (deepest) open block remaining on the tree.")])]),e._v(" "),o("p",[e._v("Once a line has been incorporated into the tree in this way, it can be discarded, so input can be read in a stream."),o("br"),e._v("\nFor each line, we follow this procedure:")]),e._v(" "),o("ol",[o("li",[e._v("First we iterate through the open blocks, starting with the root document, and descending through last children down to the last open block. Each block imposes a condition that the line must satisfy if the block is to remain open. For example, a block quote requires a "),o("code",[e._v(">")]),e._v(" character. A paragraph requires a non-blank line. In this phase we may match all or just some of the open blocks. But we cannot close unmatched blocks yet, because we may have a "),o("a",{attrs:{href:"https://github.github.com/gfm/#lazy-continuation-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("lazy continuation line"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Next, after consuming the continuation markers for existing blocks, we look for new block starts (e.g. "),o("code",[e._v(">")]),e._v("for a block quote). If we encounter a new block start, we close any blocks unmatched in step 1 before creating the new block as a child of the last matched block.")]),e._v(" "),o("li",[e._v("Finally, we look at the remainder of the line (after block markers like "),o("code",[e._v(">")]),e._v(", list markers, and indentation have been consumed). This is text that can be incorporated into the last open block (a paragraph, code block, heading, or raw HTML).")])]),e._v(" "),o("p",[e._v("Setext headings are formed when we see a line of a paragraph that is a "),o("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext heading underline"),o("OutboundLink")],1),e._v("."),o("br"),e._v("\nReference link definitions are detected when a paragraph is closed; the accumulated text lines are parsed to see if they begin with one or more reference link definitions. Any remainder becomes a normal paragraph."),o("br"),e._v("\nWe can see how this works by considering how the tree above is generated by four lines of Markdown:")]),e._v(" "),o("pre",[o("code",[e._v("> Lorem ipsum dolor\nsit amet.\n> - Qui *quodsi iracundia*\n> - aliquando id\n")])]),e._v(" "),o("p",[e._v("At the outset, our document model is just")]),e._v(" "),o("pre",[o("code",[e._v("-> document\n")])]),e._v(" "),o("p",[e._v("The first line of our text,")]),e._v(" "),o("pre",[o("code",[e._v("> Lorem ipsum dolor\n")])]),e._v(" "),o("p",[e._v("causes a "),o("code",[e._v("block_quote")]),e._v(" block to be created as a child of our open "),o("code",[e._v("document")]),e._v(" block, and a "),o("code",[e._v("paragraph")]),e._v("block as a child of the "),o("code",[e._v("block_quote")]),e._v(". Then the text is added to the last open block, the "),o("code",[e._v("paragraph")]),e._v(":")]),e._v(" "),o("pre",[o("code",[e._v('-> document\n  -> block_quote\n    -> paragraph\n         "Lorem ipsum dolor"\n')])]),e._v(" "),o("p",[e._v("The next line,")]),e._v(" "),o("pre",[o("code",[e._v("sit amet.\n")])]),e._v(" "),o("p",[e._v("is a “lazy continuation” of the open "),o("code",[e._v("paragraph")]),e._v(", so it gets added to the paragraph’s text:")]),e._v(" "),o("pre",[o("code",[e._v('-> document\n  -> block_quote\n    -> paragraph\n         "Lorem ipsum dolor\\nsit amet."\n')])]),e._v(" "),o("p",[e._v("The third line,")]),e._v(" "),o("pre",[o("code",[e._v("> - Qui *quodsi iracundia*\n")])]),e._v(" "),o("p",[e._v("causes the "),o("code",[e._v("paragraph")]),e._v(" block to be closed, and a new "),o("code",[e._v("list")]),e._v(" block opened as a child of the "),o("code",[e._v("block_quote")]),e._v(". A "),o("code",[e._v("list_item")]),e._v(" is also added as a child of the "),o("code",[e._v("list")]),e._v(", and a "),o("code",[e._v("paragraph")]),e._v(" as a child of the "),o("code",[e._v("list_item")]),e._v(". The text is then added to the new "),o("code",[e._v("paragraph")]),e._v(":")]),e._v(" "),o("pre",[o("code",[e._v('-> document\n  -> block_quote\n       paragraph\n         "Lorem ipsum dolor\\nsit amet."\n    -> list (type=bullet tight=true bullet_char=-)\n      -> list_item\n        -> paragraph\n             "Qui *quodsi iracundia*"\n')])]),e._v(" "),o("p",[e._v("The fourth line,")]),e._v(" "),o("pre",[o("code",[e._v("> - aliquando id\n")])]),e._v(" "),o("p",[e._v("causes the "),o("code",[e._v("list_item")]),e._v(" (and its child the "),o("code",[e._v("paragraph")]),e._v(") to be closed, and a new "),o("code",[e._v("list_item")]),e._v(" opened up as child of the "),o("code",[e._v("list")]),e._v(". A "),o("code",[e._v("paragraph")]),e._v(" is added as a child of the new "),o("code",[e._v("list_item")]),e._v(", to contain the text. We thus obtain the final tree:")]),e._v(" "),o("pre",[o("code",[e._v('-> document\n  -> block_quote\n       paragraph\n         "Lorem ipsum dolor\\nsit amet."\n    -> list (type=bullet tight=true bullet_char=-)\n         list_item\n           paragraph\n             "Qui *quodsi iracundia*"\n      -> list_item\n        -> paragraph\n             "aliquando id"\n')])])])},[],!1,null,null,null);t.default=n.exports}}]);