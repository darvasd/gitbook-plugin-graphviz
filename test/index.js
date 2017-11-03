var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

describe('graphviz', function() {
    it('should correctly replace by ```graphviz``` tag', function() {
        return tester.builder()
            .withContent('\n```graphviz\ndigraph G { A->B->C; }\n```')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['graphviz']
            })
            .create()
            .then(function(result) {
				console.log(result[0].content)
                assert.equal(result[0].content, '<p></p>')
            });
    });
    /*it('should correctly replace by ```pgraphviz``` tag', function() {
        return tester.builder()
            .withContent('\n```pgraphviz\n@startgraphviz\n(A)->(B)\n@endgraphviz\n```')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['graphviz']
            })
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p><img src="assets/images/graphviz/39e6cfed5bc41c359e02bb07bcfcbcb365bd61eb.png"></p>')
            });
    });
    it('should correctly replace by {% graphviz %} and endgraphviz {% endgraphviz %} tag', function() {
        return tester.builder()
            .withContent('\n{% graphviz %}\n@startgraphviz\n(A)->(B)\n@endgraphviz\n{% endgraphviz %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['graphviz']
            })
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p><img src="assets/images/graphviz/39e6cfed5bc41c359e02bb07bcfcbcb365bd61eb.png"></p>')
            });
    });
    it('should correctly use external plantgraphviz file specified by {% graphviz src="" %} and endgraphviz {% endgraphviz %} tag', function() {
        return tester.builder()
            .withContent('\n{% graphviz src="test/test.plantgraphviz"%}{% endgraphviz %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['graphviz']
            })
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p><img src="assets/images/graphviz/5e39e6908033eaefb9e853d01eb7f2462a7ea69c.png"></p>')
            });
    });*/
});
