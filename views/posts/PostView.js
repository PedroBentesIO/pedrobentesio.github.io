import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    async getHtml() {
        return `
        <h1>An h1 header</h1>
        <p>Paragraphs are separated by a blank line.</p>
        <p>2nd paragraph. <em>Italic</em>, <strong>bold</strong>, and <code>monospace</code>. Itemized lists
        look like:</p>
        <ul>
        <li>this one</li>
        <li>that one</li>
        <li>the other one</li>
        </ul>
        <p>Note that — not considering the asterisk — the actual text
        content starts at 4-columns in.</p>
        <blockquote>
        <p>Block quotes are
        written like so.</p>
        <p>They can span multiple paragraphs,
        if you like.</p>
        </blockquote>
        <p>Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., “it’s all
        in chapters 12–14”). Three dots … will be converted to an ellipsis.
        Unicode is supported. ☺</p>
        <h2>An h2 header</h2>
        <p>Here’s a numbered list:</p>
        <ol>
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
        </ol>
        <p>Note again how the actual text starts at 4 columns in (4 characters
        from the left side). Here’s a code sample:</p>
        <pre><code># Let me re-iterate ...
        for i in 1 .. 10 &#123; do-something(i) &#125;
        </code></pre>
        <p>As you probably guessed, indented 4 spaces. By the way, instead of
        indenting the block, you can use delimited blocks, if you like:</p>
        <pre class="hljs"><code>define foobar() &#123;
            print &quot;Welcome to flavor country!&quot;;
        &#125;
        </code></pre>
        <p>(which makes copying &amp; pasting easier). You can optionally mark the
        delimited block for Pandoc to syntax highlight it:</p>
        <pre class="hljs"><code><span class="hljs-keyword">import</span> time
        <span class="hljs-comment"># Quick, count to ten!</span>
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">10</span>):
            <span class="hljs-comment"># (but not *too* quick)</span>
            time.sleep(<span class="hljs-number">0.5</span>)
            <span class="hljs-built_in">print</span> i
        </code></pre>
        <h3>An h3 header</h3>
        <p>Now a nested list:</p>
        <ol>
        <li>
        <p>First, get these ingredients:</p>
        <ul>
        <li>carrots</li>
        <li>celery</li>
        <li>lentils</li>
        </ul>
        </li>
        <li>
        <p>Boil some water.</p>
        </li>
        <li>
        <p>Dump everything in the pot and follow
        this algorithm:</p>
        <pre><code>find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)
        </code></pre>
        <p>Do not bump wooden spoon or it will fall.</p>
        </li>
        </ol>
        <p>Notice again how text always lines up on 4-space indents (including
        that last line which continues item 3 above).</p>
        <p>Here’s a link to <a href="http://foo.bar">a website</a>, to a <a href="local-doc.html">local
        doc</a>, and to a <a href="#an-h2-header">section heading in the current
        doc</a>. Here’s a footnote [^1].</p>
        <p>[^1]: Footnote text goes here.</p>
        <p>Tables can look like this:</p>
        <p>size  material      color</p>
        <hr>
        <p>9     leather       brown
        10    hemp canvas   natural
        11    glass         transparent</p>
        <p>Table: Shoes, their sizes, and what they’re made of</p>
        <p>(The above is the caption for the table.) Pandoc also supports
        multi-line tables:</p>
        <hr>
        <p>keyword   text</p>
        <hr>
        <p>red       Sunsets, apples, and
        other red or reddish
        things.</p>
        <p>green     Leaves, grass, frogs
        and other things it’s
        not easy being.</p>
        <hr>
        <p>A horizontal rule follows.</p>
        <hr>
        <p>Here’s a definition list:</p>
        <p>apples
        : Good for making applesauce.
        oranges
        : Citrus!
        tomatoes
        : There’s no “e” in tomatoe.</p>
        <p>Again, text is indented 4 spaces. (Put a blank line between each
        term/definition pair to spread things out more.)</p>
        <p>Here’s a “line block”:</p>
        <p>| Line one
        |   Line too
        | Line tree</p>
        <p>and images can be specified like so:</p>
        <p><img src="example-image.jpg" alt="example image" title="An exemplary image"></p>
        <p>Inline math equations go in like so: $\omega = d\phi / dt$. Display
        math should get its own line and be put in in double-dollarsigns:</p>
        <p>$$I = \int \rho R^&#123;2&#125; dV$$</p>
        <p>And note that you can backslash-escape any punctuation characters
        which you wish to be displayed literally, ex.: *bar*, etc.</p>
        
        
        `;
    }
}
