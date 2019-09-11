(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{250:function(t,r,e){"use strict";e.r(r);var a=e(0),n=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v(t._s((t.$page.frontmatter.start=360,null)))]),t._v(" "),e("h3",{attrs:{id:"强调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强调","aria-hidden":"true"}},[t._v("#")]),t._v(" 强调")]),t._v(" "),e("p",[t._v("John Gruber 的原始文档 "),e("a",{attrs:{href:"http://daringfireball.net/projects/markdown/syntax#em",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 语法描述"),e("OutboundLink")],1),t._v("中说：")]),t._v(" "),e("blockquote",[e("p",[t._v("Markdown 将星号（"),e("code",[t._v("*")]),t._v("）和下划线（"),e("code",[t._v("_")]),t._v("）作为强调。 用一个"),e("code",[t._v("*")]),t._v("或"),e("code",[t._v("_")]),t._v("包装的文本将用 HTML "),e("code",[t._v("<em>")]),t._v(" 标签包装；两个"),e("code",[t._v("*")]),t._v("或"),e("code",[t._v("_")]),t._v("将用 HTML "),e("code",[t._v("<strong>")]),t._v(" 标签包装。")])]),t._v(" "),e("p",[t._v("这对大多数用户来说已经足够了，但是这些规则还有很多不确定性，特别是在嵌套强调方面。 最初的"),e("code",[t._v("Markdown.pl")]),t._v("测试套件清楚地表明，三重"),e("code",[t._v("***")]),t._v("和"),e("code",[t._v("___")]),t._v("分隔符可用于强调，大多数实现也允许以下模式：")]),t._v(" "),e("pre",[e("code",[t._v("***strong emph***\n***strong** in emph*\n***emph* in strong**\n**in strong *emph***\n*in emph **strong***\n")])]),t._v(" "),e("p",[t._v("以下模式支持较少，但意图很明确，它们很有用（特别是在参考书目条目的文本中）：")]),t._v(" "),e("pre",[e("code",[t._v("*emph *with emph* in it*\n**strong **with strong** in it**\n")])]),t._v(" "),e("p",[t._v("许多实现还限制了对"),e("code",[t._v("*")]),t._v("形式的字内(intraword)强调，以避免在包含内部下划线的单词中出现不必要的强调。（最好将这些放在行内代码中，但用户通常不这样做。）")]),t._v(" "),e("pre",[e("code",[t._v("internal emphasis: foo*bar*baz\nno emphasis: foo_bar_baz\n")])]),t._v(" "),e("p",[t._v("下面给出的规则捕获了上述所有的模式，同时允许高效的解析策略不会回溯。"),e("br"),t._v("\n首先，"),e("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符路程(delimiter run)"),e("OutboundLink")],1),t._v("是一个或多个"),e("code",[t._v("*")]),t._v("字符的序列，其前面或后面没有非反斜杠转义的"),e("code",[t._v("*")]),t._v("字符，或者是一个或多个"),e("code",[t._v("_")]),t._v("字符的序列，前面或后面没有非反斜杠转义 "),e("code",[t._v("_")]),t._v(" 字符。"),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("是一个（1）后面没有 "),e("a",{attrs:{href:"https://github.github.com/gfm/#unicode-whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 空格"),e("OutboundLink")],1),t._v("，或（2a）后面没有"),e("a",{attrs:{href:"https://github.github.com/gfm/#punctuation-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("标点符号"),e("OutboundLink")],1),t._v("，或 (2b) 后面是标点符号且前面是 "),e("a",{attrs:{href:"https://github.github.com/gfm/#unicode-whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 空格"),e("OutboundLink")],1),t._v(" 或"),e("a",{attrs:{href:"https://github.github.com/gfm/#punctuation-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("标点符号"),e("OutboundLink")],1),t._v("的"),e("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符路程"),e("OutboundLink")],1),t._v("。出于此定义的目的，行的起始和结尾计为 Unicode 空格。"),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("是一个（1）前面没有 "),e("a",{attrs:{href:"https://github.github.com/gfm/#unicode-whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 空格"),e("OutboundLink")],1),t._v("，或（2a）前面没有标点符号，或 (2b) 前面是标点字符且后面是 "),e("a",{attrs:{href:"https://github.github.com/gfm/#unicode-whitespace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 空格"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://github.github.com/gfm/#punctuation-character",target:"_blank",rel:"noopener noreferrer"}},[t._v("标点符号"),e("OutboundLink")],1),t._v("的"),e("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符路程"),e("OutboundLink")],1),t._v("。出于此定义的目的，行的起始和结尾计为 Unicode 空格。"),e("br"),t._v("\n以下是一些分隔符路程的示例。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("左侧分隔符：")]),t._v(" "),e("pre",[e("code",[t._v('***abc\n  _abc\n**"abc"\n _"abc"\n')])])]),t._v(" "),e("li",[e("p",[t._v("右侧分隔符：")]),t._v(" "),e("pre",[e("code",[t._v(' abc***\n abc_\n"abc"**\n"abc"_\n')])])]),t._v(" "),e("li",[e("p",[t._v("左右侧都分隔：")]),t._v(" "),e("pre",[e("code",[t._v(' abc***def\n"abc"_"def"\n')])])]),t._v(" "),e("li",[e("p",[t._v("左右侧都不分隔：")]),t._v(" "),e("pre",[e("code",[t._v("abc *** def\na _ b\n")])])])]),t._v(" "),e("p",[t._v("(区分左侧和右侧分隔符基于前面和后面的字符的想法来自 Roopesh Chander 的 "),e("a",{attrs:{href:"http://www.vfmd.org/vfmd-spec/specification/#procedure-for-identifying-emphasis-tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("vfmd"),e("OutboundLink")],1),t._v("。 vfmd 使用术语「强调指示符字符串」而不是「分隔符路程」，它用于区分左侧和右侧路程的规则比这里给出的要复杂一些。)"),e("br"),t._v("\n以下规则定义强调和加强的(strong)强调：")]),t._v(" "),e("ol",[e("li",[t._v("单个"),e("code",[t._v("*")]),t._v("字符可以"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启强调"),e("OutboundLink")],1),t._v("，当且仅当它是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分。")]),t._v(" "),e("li",[t._v("单个"),e("code",[t._v("_")]),t._v("字符可以"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启强调"),e("OutboundLink")],1),t._v("，仅当它是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，并且（a）不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分或（b）在标点符号之前的"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分。")]),t._v(" "),e("li",[t._v("如果单个"),e("code",[t._v("*")]),t._v("字符是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，则它"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合强调"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("如果单个"),e("code",[t._v("_")]),t._v("字符是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分并且   （a）不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，或者   （b）"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分后跟标点符号，则单个"),e("code",[t._v("_")]),t._v("字符"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合强调"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("双"),e("code",[t._v("**")]),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启加强的强调"),e("OutboundLink")],1),t._v("，当且仅当它是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分。")]),t._v(" "),e("li",[t._v("双"),e("code",[t._v("__")]),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启加强的强调"),e("OutboundLink")],1),t._v("，当且仅当它是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，并且（a）不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，或者（b）在标点符号之前的"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分。")]),t._v(" "),e("li",[t._v("如果双"),e("code",[t._v("**")]),t._v("是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分，则它"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合特别强调"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("如果双"),e("code",[t._v("__")]),t._v("是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分并且（a）不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分或者（b）"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分后跟标点符号，则它"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合特别强调"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("强调从分隔符开始，该分隔符"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启强调"),e("OutboundLink")],1),t._v("并以"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合强调"),e("OutboundLink")],1),t._v("的分隔符结束，并且使用与开始分隔符相同的字符（"),e("code",[t._v("_")]),t._v("或"),e("code",[t._v("*")]),t._v("）。 开始和结束分隔符必须属于单独的"),e("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符路程"),e("OutboundLink")],1),t._v("。 如果其中一个分隔符可以开启和关闭强调，则包含开始和结束分隔符的分隔符路程的长度总和不能是 3 的倍数，除非两个长度都是 3 的倍数。")]),t._v(" "),e("li",[t._v("特别强调始于一个分界符，它"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-open-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以开启特别强调"),e("OutboundLink")],1),t._v("，并以一个"),e("a",{attrs:{href:"https://github.github.com/gfm/#can-close-strong-emphasis",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以闭合特别强调"),e("OutboundLink")],1),t._v("的分隔符结束，并使用相同的字符（"),e("code",[t._v("_")]),t._v("或"),e("code",[t._v("*")]),t._v("）作为起始分隔符。 开始和结束分隔符必须属于单独的"),e("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符路程"),e("OutboundLink")],1),t._v("。 如果其中一个分隔符可以打开和关闭强调，则包含开始和结束分隔符的分隔符路程的长度总和不能是 3 的倍数，除非两个长度都是 3 的倍数。")]),t._v(" "),e("li",[t._v("普通"),e("code",[t._v("*")]),t._v("字符不能出现在"),e("code",[t._v("*")]),t._v("或"),e("code",[t._v("**")]),t._v("分隔符强调的开头和结尾，除非它是反斜杠转义字符。")]),t._v(" "),e("li",[t._v("普通"),e("code",[t._v("_")]),t._v("字符不能出现在"),e("code",[t._v("_")]),t._v("或"),e("code",[t._v("__")]),t._v("分隔符强调的开头和结尾，除非它是反斜杠转义字符。")])]),t._v(" "),e("p",[t._v("如果上面的规则 1-12 与多个解析兼容，则以下原则可解决歧义：")]),t._v(" "),e("ol",{attrs:{start:"13"}},[e("li",[t._v("尽量减少嵌套数量，"),e("code",[t._v("<strong>...</strong>")]),t._v("始终优先于"),e("code",[t._v("<em><em>...</em></em>")]),t._v("。")]),t._v(" "),e("li",[t._v("解释"),e("code",[t._v("<em><strong>...</strong></em>")]),t._v("始终优先于"),e("code",[t._v("<strong><em>...</em></strong>")]),t._v("。")]),t._v(" "),e("li",[t._v("当两个潜在强调或加强的强调句子重叠时，第二个在第一个结束之前开始并在第一个结束之后结束，第一个优先。 因此，例如，"),e("code",[t._v("*foo _bar* baz_")]),t._v("被解析为 "),e("code",[t._v("<em>foo _bar</em> baz_")]),t._v(" 而不是"),e("code",[t._v("*foo <em>bar* baz</em>")]),t._v("。")]),t._v(" "),e("li",[t._v("当有两个潜在的强调或加强的强调具有相同的结束分隔符时，较短的一个（稍后打开的那个）优先。 因此，例如， "),e("code",[t._v("**foo **bar baz**")]),t._v(" 被解析为"),e("code",[t._v("**foo <strong>bar baz</strong>")]),t._v(" 而不是"),e("code",[t._v("<strong>foo **bar baz</strong>")]),t._v("。")]),t._v(" "),e("li",[t._v("内联行内代码，链接，图像和 HTML 标签组比强调更紧要。因此，当包含这些元素之一的解释与不包含其中一个元素的解释之间存在选择时，前者总是获胜。 因此，例如，"),e("code",[t._v("*[foo*](bar)")]),t._v(" 被解析为"),e("code",[t._v('*<a href="bar">foo*</a>')]),t._v("而不是"),e("code",[t._v("<em>[foo</em>](bar)")]),t._v("。")])]),t._v(" "),e("p",[t._v("可以通过一系列示例来说明这些规则。"),e("br"),t._v("\n规则 1:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("*")]),t._v("后跟空格，因此不是左侧分隔符路程的一部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("*")]),t._v("前面有一个字母数字，后跟标点符号，因此不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("Unicode 不间断空格也算作空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("允许使用"),e("code",[t._v("*")]),t._v("强调内部字符："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 2:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("_")]),t._v("后跟空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("_")]),t._v("前面是一个字母数字，后跟标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("在单词内部不允许用"),e("code",[t._v("_")]),t._v("强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这里"),e("code",[t._v("_")]),t._v("不会产生强调，因为第一个分隔符路程是右侧，第二个是左侧："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这是强调，即使开始分隔符是左侧和右侧，因为它之前是标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 3:"),e("br"),t._v("\n这不是强调，因为结束分隔符与开始分隔符不匹配："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为结束的"),e("code",[t._v("*")]),t._v("前面有空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("换行符也算作空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为第二个"),e("code",[t._v("*")]),t._v("之前是标点符号，后跟一个字母数字（因此它不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#right-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("右侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("使用此示例更容易理解此限制的要点"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("内部字符可以使用"),e("code",[t._v("*")]),t._v("强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 4:"),e("br"),t._v("\n这不是强调，因为结束"),e("code",[t._v("_")]),t._v("前面有空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为第二个"),e("code",[t._v("_")]),t._v("之前是标点符号，后面跟着一个字母数字："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("嵌套强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("内部字符不允许使用"),e("code",[t._v("_")]),t._v("来进行强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这是强调，尽管结束分隔符是左侧和右侧，因为它后面是标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 5:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为开始分隔符后跟空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("**")]),t._v("前面是字母数字，后面是标点符号，因此不是"),e("a",{attrs:{href:"https://github.github.com/gfm/#left-flanking-delimiter-run",target:"_blank",rel:"noopener noreferrer"}},[t._v("左侧分隔符路程"),e("OutboundLink")],1),t._v("的一部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("允许使用"),e("code",[t._v("**")]),t._v("强调内部字符："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 6:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的分隔符后跟空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("换行被认为是空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为起始的"),e("code",[t._v("__")]),t._v("前面有一个字母数字，后面是标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("禁止用"),e("code",[t._v("__")]),t._v("强调内部字符内容："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这是加强的强调，即使起始分隔符既算左侧也算右侧，因为它之前是标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 7:"),e("br"),t._v("\n这不是强调，因为结束分隔符前面有空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("（由于规则11，也不能将其解释为强调"),e("code",[t._v("*foo bar *")]),t._v("）"),e("br"),t._v("\n这不是强调，因为第二个"),e("code",[t._v("**")]),t._v("之前是标点符号，后面跟着一个字母数字："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("通过这些示例，更容易理解这一限制的要点："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("内部字符强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 8:"),e("br"),t._v("\n这不是强调，因为结束分隔符前面有空格："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("这不是强调，因为第二个"),e("code",[t._v("__")]),t._v("前面是标点符号，后跟一个字母数字："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("使用此示例更容易理解此限制的要点："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("禁止用"),e("code",[t._v("__")]),t._v("强调内部字符内容："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这是加强的强调，即使结束分隔符既算左侧也算右侧，因为它后面是标点符号："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 9:"),e("br"),t._v("\n任何非空的内联元素序列都可以是强调行的内容。"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("特别地，强调和加强的强调可以嵌套："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("注意在前面的情况下，以下解释不会出现")]),t._v(" "),e("pre",[e("code",[t._v("<p><em>foo</em><em>bar<em></em>baz</em></p>\n")])]),t._v(" "),e("p",[t._v("如果包含起始和结束分隔符的分隔符运行的长度之和是 3 的倍数，则可以打开和关闭的分隔符（如"),e("code",[t._v("foo")]),t._v("之后的"),e("code",[t._v("*")]),t._v("）不能形成强调的条件，除非两个长度都是倍数 3。")]),t._v(" "),e("p",[t._v("出于同样的原因，我们在这个例子中没有得到两个连续的强调部分："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("相同的条件确保以下情况都将加强的强调被嵌套在强调内，即使内部空格被省略："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("当内部闭合和打开的分隔符的长度"),e("em",[t._v("都是")]),t._v(" 3 的倍数时，它们可以匹配来创建强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("可以有无穷的嵌套："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("可以解释为非空强调，或者加强的强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 10:"),e("br"),t._v("\n任何非空的内联元素序列都可以是强调行的内容。"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("特别地，加强的强调可以嵌套强调和加强的强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("可以有无穷的嵌套："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("这里解释为非空强调，或者加强的强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 11:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("请注意，当分隔符不均匀匹配时，规则 11 确定多余的文字"),e("code",[t._v("*")]),t._v("字符将出现在强调之外，而不是在其中："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 12:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("请注意，当分隔符不均匀匹配时，规则 12 确定多余的文字"),e("code",[t._v("_")]),t._v("字符将出现在强调之外，而不是在其中："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 13 确定如果你想强调直接嵌入强调内，你必须使用不同的分隔符："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("但是，如果不切换分隔符，会被解释成加强强调中的加强强调："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 13 可以应用于任意长的分隔符序列："),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("p",[t._v("规则 14:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 15:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 16:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("p",[t._v("规则 17:"),e("br"),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}}),t._v(" "),e("Example",{attrs:{index:t.$page.frontmatter.start++}})],1)},[],!1,null,null,null);r.default=n.exports}}]);