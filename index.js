var Q = require('q');
var vizjs = require('viz.js');

// var ASSET_PATH = 'assets/images/graphviz/';

function processBlock(blk) {
    var deferred = Q.defer();
    var book = this;
    var code = blk.body;

    var config = book.config.get('pluginsConfig.graphviz', {});
    if (blk.kwargs['config']) {
        config = blk.kwargs['config'];
    }

    var format = "svg";
    if (config && config.format)
        format = config.format;

	var result = vizjs(code, { format: format, engine: "dot"})
    deferred.resolve(result);
    return deferred.promise;
}

module.exports = {
    blocks: {
        graphviz: {
            process: processBlock
        }
    },
    hooks: {
        // For all the hooks, this represent the current generator
        // [init", "finish", "finish:before", "page", "page:before"] are working.
        // page:* are marked as deprecated because it's better if plugins start using blocks instead.
        // But page and page:before will probably stay at the end (useful in some cases).

        // This is called before the book is generated
        "init": function() {
            if (!Object.keys(this.book.config.get('pluginsConfig.graphviz', {})).length) {
                this.book.config.set('pluginsConfig.graphviz', {
                    format: 'svg'
                });
            }
        },

        // This is called after the book generation
        "finish": function() {
            // Done
        },

        // Before the end of book generation
        "finish:before": function() {
			// Nothing to do
        },

        // The following hooks are called for each page of the book
        // and can be used to change page content (html, data or markdown)


        // Before parsing documents
        "page:before": function(page) {
            // Get all code texts
            umls = page.content.match(/^```dot((.*[\r\n]+)+?)?```$/igm);
            // Begin replace
            if (umls instanceof Array) {
                for (var i = 0, len = umls.length; i < len; i++) {
                    page.content = page.content.replace(
                        umls[i],
                        umls[i].replace(/^```dot/, '{% graphviz %}').replace(/```$/, '{% endgraphviz %}'));
                }
            }
            // Get all code texts
            umls = page.content.match(/^```graphviz((.*[\r\n]+)+?)?```$/igm);
            // Begin replace
            if (umls instanceof Array) {
                for (var i = 0, len = umls.length; i < len; i++) {
                    page.content = page.content.replace(
                        umls[i],
                        umls[i].replace(/^```graphviz/, '{% graphviz %}').replace(/```$/, '{% endgraphviz %}'));
                }
            }
            return page;
        }
    }
};
