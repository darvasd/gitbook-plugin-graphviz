# gitbook-plugin-graphviz
Graphviz support for GitBook


Based on [vowstar/gitbook-plugin-uml](https://github.com/vowstar/gitbook-plugin-uml) and [viz.js](https://www.npmjs.com/package/viz.js).



## Configuration

Configure the plugin in `book.json`.

```
"pluginsConfig": {
  "uml": {
    "format": "svg",
    "engine": "dot"
  }
}
``` 

| Variable | Description |
| --- | --- |
| `format` | Output format. Can be: `svg`, `xdot`, ``plain`, `json`. |
| `engine` | Graphviz engine to be used. Can be: `doz`, `circo`, `neato`, `osage`, `twopi`. |