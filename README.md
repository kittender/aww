# AWW
CSS that **A**lready **W**orks **W**ell.  
Just write consistent HTML, and it's done.

##  . . . __φ(．．) [ wip ]

#### Paradigms

* **zero selectors**
* border-box sizing
* ``rem`` base font-size
* fluid ``em`` scaling
* responsive images
* automatic vertical rythm
* block formatting context for divs

![aww](pexels-photo-62640_by_fabricio_trujillo.jpeg)

## Features

### Elements

* Anchors | ``a``
* Tables | ``table`` ``caption`` ``th`` ``td``
* Lists | ``ul``

### Hierarchy

* Headings | ``h1`` ``h2`` ``h3`` ``h4`` ``h5`` ``h6``
* Paragraphs | ``p``
* Horizontal rules | ``hr``

### Forms

* Buttons | ``button`` ``input``

### Formatting

* Abbreviations | ``abbr``
* Addresses | ``address``
* Quotations | ``blockquote``
* Marked | ``mark``

### Other

* Code | ``code`` ``kbd`` ``samp`` ``var``
* Edition | ``del`` ``ins`` ``s``


### Layouts
AWW layouts automatically adapt depending on the presence, absence and order of certain layout elements among the HTML5 standards.

* Header
* Nav
* Main
* Footer
* Aside / **coming soon**

#### Simple

```html
<body>
    <div>
        <header></header>
        <!--<nav></nav>-->
        <main></main>
        <footer></footer>
    </div>
</body>
```

#### Navbar

```html
<body>
    <div>
        <nav></nav>
        <!--<header></header>-->
        <main></main>
        <footer></footer>
    </div>
</body>
```