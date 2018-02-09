# AWW | Elements

Elements are simple, bare HTML tags that are used as units to produce the content of a web page.

## Elements

### Anchors
``a``

### Tables
``table`` ``caption`` ``th`` ``td``

### Lists
``ul``


## Hierarchy

### Headings
``h1`` ``h2`` ``h3`` ``h4`` ``h5`` ``h6``

### Paragraphs
``p``

### Horizontal rules
``hr``


## Forms

### Buttons
``button`` ``input``


## Formatting

### Abbreviations
#### ``abbr``

### Addresses
#### ``address``
A postal address or location.
```
<address>
    Mr John Smith<br>
    132, My Street,<br>
    Kingston, New York 12401<br>
    United States 
</address>
```

### Quotations
#### ``blockquote``

### Marked
#### ``mark``
A highlighted or marked text.
```
Look at that <mark>keyword</mark>
```


## Other

### Code

#### ``code``
A sample block of any type of computer code.  
Consider using `<pre></pre>` tags to *preserve* the indentation and spaces.
```
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
```

#### ``kbd``
A keyboard key or command.
```
<kbd>CTRL + C</kbd> <kbd>ALT</kbd>
```

#### ``samp``
An inline sample of any type of computer code.
```
<samp>overflow: hidden;</samp>
```

#### ``var``
The reference to a code variable, inside or outside of a code sample.
```
<var>Player</var> <samp>var <var>kitty</var> = new Kitty();</samp> 
```


### Edition

#### ``del`` ``ins``
Indications of deletion and insertion of text, for edition purposes.
```
I like you<del> sometimes</del><ins> a lot !</ins>
```

#### ``s``
A strike through text.
```
todo :
x <s>Pre-heat the oven</s>
x <s>Cook the cake</s>
x Buy milk again
```

