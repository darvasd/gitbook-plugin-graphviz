# gitbook-plugin-graphviz
Graphviz support for GitBook

[![Build Status](https://travis-ci.org/darvasd/gitbook-plugin-graphviz.svg?branch=master)](https://travis-ci.org/darvasd/gitbook-plugin-graphviz)

Based on [vowstar/gitbook-plugin-uml](https://github.com/vowstar/gitbook-plugin-uml) and [viz.js](https://www.npmjs.com/package/viz.js).

## Usage

<pre><code>```graphviz
digraph G {
	A -> B -> C;
}
```
</code></pre> 

Alternative format:
<pre><code>{ %graphviz% }
digraph G {
	A -> B -> C;
}
{ %endgraphviz% }
</code></pre> 



## Configuration

Configure the plugin in `book.json`.

```
"plugins": [
      "graphviz@git+https://github.com/darvasd/gitbook-plugin-graphviz.git"
  ],
"pluginsConfig": {
    "graphviz": {
        "format": "svg",
        "engine": "dot"
    }
}
``` 

| Variable | Description |
| --- | --- |
| `format` | Output format. Can be: `svg`, `xdot`, `plain`, `json`. |
| `engine` | Graphviz engine to be used. Can be: `doz`, `circo`, `neato`, `osage`, `twopi`. |
