(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{216:function(t,r,e){"use strict";e.r(r);var a=e(0),_=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v(t._s((t.$page.frontmatter.start=231,null)))]),t._v(" "),e("h3",{attrs:{id:"列表项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列表项","aria-hidden":"true"}},[t._v("#")]),t._v(" 列表项")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.github.com/gfm/#list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表标记"),e("OutboundLink")],1),t._v("包括"),e("a",{attrs:{href:"https://github.github.com/gfm/#bullet-list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("无序列表标记"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://github.github.com/gfm/#ordered-list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("有序列表标记"),e("OutboundLink")],1),t._v("。\n"),e("a",{attrs:{href:"https://github.github.com/gfm/#bullet-list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("无序列表标记"),e("OutboundLink")],1),t._v("包含"),e("code",[t._v("-")]),t._v("，"),e("code",[t._v("+")]),t._v("，或者"),e("code",[t._v("*")]),t._v("等字符。\n"),e("a",{attrs:{href:"https://github.github.com/gfm/#ordered-list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("有序列表标记"),e("OutboundLink")],1),t._v("由 1-9 位的阿拉伯数字("),e("code",[t._v("0-9")]),t._v(")，或者像「a "),e("code",[t._v(".")]),t._v("」，「a "),e("code",[t._v(")")]),t._v("」等字符的序列组成（有长度限制的原因是某些浏览器中超过十位数字会产生溢出）。"),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.github.com/gfm/#list-items",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表项"),e("OutboundLink")],1),t._v("由以下规则定义：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("一般原则 .")]),t._v(" 如果行序列 "),e("em",[t._v("Ls")]),t._v(" 的组成是以"),e("a",{attrs:{href:"https://github.github.com/gfm/#non-whitespace-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("非空字符"),e("OutboundLink")],1),t._v("开头的块序列（Bs），且 "),e("em",[t._v("M")]),t._v(" 是宽度 "),e("em",[t._v("W")]),t._v(" 的列表标记后面有 1≤ "),e("em",[t._v("N")]),t._v(" ≤4 个空格，则将 "),e("em",[t._v("M")]),t._v(" 和其后的空格前置到 "),e("em",[t._v("Ls")]),t._v(" 的第一行，并将 "),e("em",[t._v("Ls")]),t._v(" 的后续行缩进 "),e("em",[t._v("W")]),t._v(" + "),e("em",[t._v("N")]),t._v(" 个空格之后，其结果将成为 "),e("em",[t._v("Bs")]),t._v(" 作为其内容的列表项。列表项的类型（无序或是有序）由其列表标记决定。如果列表项为有序，则其结果也会拥有由其有序列表标记决定的序号。"),e("br"),t._v("\n例外：\n"),e("ol",[e("li",[t._v("当"),e("a",{attrs:{href:"https://github.github.com/gfm/#lists",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表"),e("OutboundLink")],1),t._v("中的第一个列表项中断一个段落时，除非它在行中出现，否则将会被认为是"),e("a",{attrs:{href:"https://github.github.com/gfm/#paragraph-continuation-text",target:"_blank",rel:"noopener noreferrer"}},[t._v("段落延续文本"),e("OutboundLink")],1),t._v("，此时(a)  "),e("em",[t._v("Ls")]),t._v(" 不能以空行起始；(b)如果列表项为有序，起始数字必须为 1 。")]),t._v(" "),e("li",[t._v("如果一行文本是"),e("a",{attrs:{href:"https://github.github.com/gfm/#thematic-breaks",target:"_blank",rel:"noopener noreferrer"}},[t._v("标题行"),e("OutboundLink")],1),t._v("，那么这不是一个列表项。")])])])]),t._v(" "),e("p",[t._v("举例来说，让 "),e("em",[t._v("Ls")]),t._v(" 作为行"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("让 "),e("em",[t._v("M")]),t._v(" 作为标记"),e("code",[t._v("1.")]),t._v("， "),e("em",[t._v("N")]),t._v("  = 2 ，此时根据第一条规则，出现起始序号为 1 的有序列表项， "),e("em",[t._v("Ls")]),t._v(" 也是同样："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("需要注意的是列表标记后的文本位置决定了列表项后续块中需要多少缩进。如果列表标记占用了 2 个字符空间，列表项与"),e("a",{attrs:{href:"https://github.github.com/gfm/#non-whitespace-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("非空字符"),e("OutboundLink")],1),t._v("之间有 3 个字符空间，那么块必须要缩进 5 个字符空间才能包含进列表项。")]),t._v(" "),e("p",[t._v("下面的示例将展示需要多少缩进才能使内容成为列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这很容易让人联想到用列来考虑问题：连续块必须至少缩进到列表标记后的有第一个"),e("a",{attrs:{href:"https://github.github.com/gfm/#non-whitespace-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("非空字符"),e("OutboundLink")],1),t._v("的列（即与上一个列表项对齐）。但是这不完全正确，列表标记之后的空格确定需要多少相对缩进，此缩进到达哪一列将取决于列表项怎样嵌入到其他结构中，如下例所示："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这里的"),e("code",[t._v("two")]),t._v("与列表标记"),e("code",[t._v("1.")]),t._v("出现在同一列，但因为在最后一个块引用标记中留出了足够的缩进，所以它其实是包含在列表项中。"),e("br"),t._v("\n反过来也可以，在下面的示例中，单词"),e("code",[t._v("two")]),t._v("出现在列表项"),e("code",[t._v("one")]),t._v("的右侧，但它不是一个列表项，因为它没有足够的缩进来超过块引用标记："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("注意列表标记与后续内容之间必须至少间隔一个空格，所以这些不是列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("一个列表项中可能包含被一行或多行空行分割的块。"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("一个列表项可能包含多种块："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("包含缩进代码块的列表项将逐字保存代码块中的空行。"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("注意，有序列表起始编号必须小于等于九位数："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("某些起始序号可能以 0 开头："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("起始序号不能为负数："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("以缩进代码起始的项。")]),t._v(" 如果行序列 "),e("em",[t._v("Ls")]),t._v(" 构成以缩进代码块起始的块 "),e("em",[t._v("Bs")]),t._v(" 的起始序列，并且 "),e("em",[t._v("M")]),t._v(" 是宽度 "),e("em",[t._v("W")]),t._v(" 后带有一个空格的列表标记，那么前置 "),e("em",[t._v("M")]),t._v(" 和空格将作为 "),e("em",[t._v("Ls")]),t._v(" 的第一行，并且缩进的随后的带有 W + 1 个空格的 Ls 行，是一个以Bs为内容的列表项。如果一行为空，那么就不需要缩进。列表项的类型（无序或是有序）由其列表标记决定。如果列表项为有序，则其结果也会拥有由其有序列表标记决定的序号。")])]),t._v(" "),e("p",[t._v("缩进的代码块必须缩进超过区域边缘的四个空格，其中文本将包含在列表项中。 以下情况下是 6 个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("以下情况是 11 个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("如果列表项中的  "),e("em",[t._v("第一个")]),t._v("  块是缩进的代码块，那么通过规则 #2，内容必须在列表标记之后缩进 "),e("em",[t._v("1")]),t._v(" 个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("注意，额外的空格缩进将会被认为是代码块内的空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("注意，规则 #1 和 #2 仅适用于两种情况：(a)列表项中有以"),e("a",{attrs:{href:"https://github.github.com/gfm/#non-whitespace-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("非空字符"),e("OutboundLink")],1),t._v("开头的行，(b)以缩进代码快开头的情况。在紧接着的例子中，第一个块带有三个空格的缩进，这两条规则不允许我们通过缩进整个文本或者添加列表标记来使其成为列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这不是一个严格的限制，因为当块有 1-3 个空格的缩进时，可以在不改变解释的情况下删除缩进，可以在此使用规则 #1，那么在上面的例子中："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("以空行开头的项。")]),t._v(" 如果一个以"),e("a",{attrs:{href:"https://github.github.com/gfm/#blank-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("空行"),e("OutboundLink")],1),t._v("起始的行序列 "),e("em",[t._v("Ls")]),t._v(" 构成一个（可能为空）的块序列 "),e("em",[t._v("Bs")]),t._v(" ，并且之间没有空行。 "),e("em",[t._v("M")]),t._v(" 是宽度 W 的列表标记，那么前置  "),e("em",[t._v("M")]),t._v("  到 "),e("em",[t._v("Ls")]),t._v(" 的第一行，并且将 "),e("em",[t._v("Ls")]),t._v(" 的后续行缩进  "),e("em",[t._v("W")]),t._v(" +1 个空格，其结果是成为一个将 "),e("em",[t._v("Bs")]),t._v(" 作为其内容的列表项，如果一行为空，那么就不需要缩进。列表项的类型（无序或是有序）由其列表标记决定。如果列表项为有序，则其结果也会拥有由其有序列表标记决定的序号。")])]),t._v(" "),e("p",[t._v("下列是一些以空行起始但非空的列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("当列表项以空行开头时，列表标记后面的空格数不影响所需的缩进："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("一个列表项开头至多有一行空行，在下面的例子中，"),e("code",[t._v("foo")]),t._v("不属于列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这是一个空的无序列表："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.github.com/gfm/#list-marker",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表标记"),e("OutboundLink")],1),t._v("后面跟多少空格无所谓："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这是一个空的有序列表："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("一个列表可能在开头或者末尾有一个空的列表项："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("当然，一个空的列表项不能中断段落："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("strong",[t._v("缩进.")]),t._v(" 如果行序列 "),e("em",[t._v("Ls")]),t._v(" 根据规则 #1，#2 或 #3 构成列表项，则将 "),e("em",[t._v("Ls")]),t._v(" 中的每一行缩进 1-3 个空格（每行缩进都相同）之后仍然是一个属性与内容与原来相同的列表项。如果有一行为空，则其不需要缩进。")])]),t._v(" "),e("p",[t._v("缩进一个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("缩进两个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("缩进三个空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("四个空格的缩进构成代码块："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("strong",[t._v("延迟原则.")]),t._v(" 如果 "),e("em",[t._v("Ls")]),t._v(" 中的多行构成一个含有内容 "),e("em",[t._v("Bs")]),t._v(" 的"),e("a",{attrs:{href:"https://github.github.com/gfm/#list-items",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表项"),e("OutboundLink")],1),t._v("，然后删除一个或多个行中的部分或全部缩进的结果，其中缩进后的下一个非空白字符，是段落连续文本具有相同内容和属性的列表项。未缩进的行被称为"),e("a",{attrs:{href:"https://github.github.com/gfm/#lazy-continuation-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("延迟行"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("以下是一个关于"),e("a",{attrs:{href:"https://github.github.com/gfm/#lazy-continuation-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("延迟行"),e("OutboundLink")],1),t._v("的例子："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("缩进可以被删除一部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("以下示例说明延迟原则在嵌套结构中仍有作用："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("strong",[t._v("以上")]),t._v(" 就是"),e("a",{attrs:{href:"https://github.github.com/gfm/#list-items",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表项"),e("OutboundLink")],1),t._v("的全部五条规则。")])]),t._v(" "),e("p",[t._v("子列表也需要遵循"),e("a",{attrs:{href:"https://github.github.com/gfm/#list-items",target:"_blank",rel:"noopener noreferrer"}},[t._v("以上"),e("OutboundLink")],1),t._v("规则，一个子列表必须与段落所在列表项中所需缩进的空格数量一致。\n所以在以下示例中需要两个空格的缩进："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("一个空格是缩进不够的情况："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("因为标记占位过多，所以在这里需要四个空格的缩进："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("三个空格缩进的不够的情况："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("列表项中的第一个块可能是一个列表："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("一个列表项可以包含一个标题："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("5.2.1 启发")]),t._v(" "),e("p",[t._v("John Gruber 的 Markdown spec 中这样描述列表项：")]),t._v(" "),e("ol",[e("li",[t._v("「列表标记通常从左边距开始，但最多可缩进三个空格。列表标记必须后跟一个或多个空格或制表符。」")]),t._v(" "),e("li",[t._v("「为了使列表看起来更美观，您可以使用悬挂(hanging)缩进来包装列表项.... 但如果你不想，那就算了。」")]),t._v(" "),e("li",[t._v("「列表项可能包含多个段落。列表项中的每个后续段落必须缩进 4 个空格或一个缩进键。」")]),t._v(" "),e("li",[t._v("「如果你缩进后续段落的每一行，看上去很好看，但在这里，Markdown 允许你偷懒。」")]),t._v(" "),e("li",[t._v("「要将块引用放入列表项中，块引用的"),e("code",[t._v(">")]),t._v("必须要缩进。」")]),t._v(" "),e("li",[t._v("「要将代码块放在列表项中，代码块需要缩进两次--8 个空格或两个缩进键。」")])]),t._v(" "),e("p",[t._v("这些规则指定列表项下的段落必须缩进四个空格（可能是从左边距，而不是列表标记的开头，但这没有提及），并且列表项下的代码必须缩进八个空格而不是通常的四个。他们还说块引用必须缩进，但没说缩进多少; 但是，给出的示例有四个空格缩进。虽然没有其他类型的块级内容，但推断列表项下的所有块元素（包括其他列表）必须缩进四个空格当然是合理的。 这个原则被称为 "),e("em",[t._v("四空格规则")]),t._v(" 。")]),t._v(" "),e("p",[t._v("四空格规则是明确且有原则的，如果参考实现"),e("code",[t._v("Markdown.pl")]),t._v("遵循它，它可能会成为标准。 但是至少在外层，"),e("code",[t._v("Markdown.pl")]),t._v("允许段落和子列表以两个空格缩进开始。 更糟糕的是，它的行为是不一致的：外层列表的子列表需要两个空格缩进，但是该子列表的子列表需要三个空格。毫无意外，Markdown 的不同应用已经开发出非常不同的规则来确定列表项下的内容。（例如，Pandoc 和 python-Markdown 坚持 Gruber 的语法描述和四空格规则，而 discount，redcarpet，marked，PHP Markdown 和其他语法说明更接近"),e("code",[t._v("Markdown.pl")]),t._v("）")]),t._v(" "),e("p",[t._v("不巧的是，鉴于应用之间的差异，没有办法为列表项提供规范，且保证不会破坏任何现有文档。 但是，这里给出的规范应该正确处理使用四空格规则或更兼容的 "),e("code",[t._v("Markdown.pl")]),t._v(" 行为格式化的列表，前提是它们以人类自然阅读的方式布局。")]),t._v(" "),e("p",[t._v("这里的策略是让列表标记的宽度和缩进确定块包含在列表项下所需的缩进，而不是固定的和任意数字。 作者可以将列表项的主体视为一个单元，其缩进到足以适合列表标记（以及列表标记上的任何缩进）。 （延迟原则，#5，允许连续行在需要时不缩进。）")]),t._v(" "),e("p",[t._v("我们承认这条规则优于任何需要距离边距固定的缩进层级，四空格规则很明确但是不自然，而且非常不直观。")]),t._v(" "),e("pre",[e("code",[t._v("- foo\n\n  bar\n\n  - baz\n")])]),t._v(" "),e("p",[t._v("应该被解析为两个带有插入段落的列表，")]),t._v(" "),e("pre",[e("code",[t._v("<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n<ul>\n<li>baz</li>\n</ul>\n")])]),t._v(" "),e("p",[t._v("像四空格规则要求的那样，而不是一个单列表，")]),t._v(" "),e("pre",[e("code",[t._v("<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n")])]),t._v(" "),e("p",[t._v("你可以通过学习来确定在哪些地方应该使用四空格规则，但是不能纯靠猜，这经常成为初学者的难题。"),e("br"),t._v("\n使用两空格规则会有帮助吗？问题是像这样的规则，以及允许初始列表标记的 1-3 个空格缩进的规则，允许缩进 "),e("em",[t._v("小于")]),t._v(" 原始列表标记的文本被包括在列表项中。 举例来讲"),e("code",[t._v("Markdown.pl")]),t._v("会这样解析")]),t._v(" "),e("pre",[e("code",[t._v("   - one\n\n  two\n")])]),t._v(" "),e("p",[t._v("作为将"),e("code",[t._v("two")]),t._v("作为延续段落的单个列表项：")]),t._v(" "),e("pre",[e("code",[t._v("<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n")])]),t._v(" "),e("p",[t._v("同样的")]),t._v(" "),e("pre",[e("code",[t._v(">   - one\n>\n>  two\n")])]),t._v(" "),e("p",[t._v("像这样")]),t._v(" "),e("pre",[e("code",[t._v("<blockquote>\n<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n</blockquote>\n")])]),t._v(" "),e("p",[t._v("这也太不直观了。"),e("br"),t._v("\n我们可能需要从列表标记中固定缩进（例如，两个空格，甚至一个空格），而不是从边距要求固定缩进（它本身可以缩进）。该提议将删除最后讨论的异常情况。与上面提到的规范不同，它会将后续跟随的内容计为带有子项的列表项，尽管"),e("code",[t._v("bar")]),t._v("段落的缩进没有"),e("code",[t._v("foo")]),t._v("段落的远：")]),t._v(" "),e("pre",[e("code",[t._v(" 10. foo\n\n   bar\n")])]),t._v(" "),e("p",[t._v("虽然从文本上看上去像是一个"),e("code",[t._v("bar")]),t._v("段落的列表项，有利于这个提议。但是在这个提议中在列表标记后的缩进代码必须缩进 6 个空格，这会违反很多已经存在的标记规则，比如下列情况：")]),t._v(" "),e("pre",[e("code",[t._v("1.  foo\n\n        indented code\n")])]),t._v(" "),e("p",[t._v("代码缩进了 8 个空格，上面的规范按照规定预期来解析文本，因为代码块的缩进从"),e("code",[t._v("foo")]),t._v("的起始位置开始计算。"),e("br"),t._v("\n需要特殊处理的一种情况是以缩进代码 "),e("em",[t._v("开头")]),t._v(" 的列表项。 在这种情况下需要多少缩进？因为我们没有「第一段」来衡量。 规则 #2 简单地规定，在这种情况下，我们需要列表标记中的一个空格缩进（然后是缩进代码的正常四个空格）。 在列表标记加上其初始缩进占用四个空格（常见情况）的情况下，符合四空格规则，但在其他情况下则不同。")])],1)},[],!1,null,null,null);r.default=_.exports}}]);