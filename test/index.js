var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

var expectedSvg = '<text text-anchor="middle" x="27" y="-157.8" font-family="Times,serif" font-size="14.00" fill="#000000">A</text>\
</g>\
<!-- B -->\
<g id="node2" class="node">\
<title>B</title>\
<ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>\
<text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">B</text>\
</g>\
<!-- A&#45;&gt;B -->\
<g id="edge1" class="edge">\
<title>A-&gt;B</title>\
<path fill="none" stroke="#000000" d="M27,-143.8314C27,-136.131 27,-126.9743 27,-118.4166"/>\
<polygon fill="#000000" stroke="#000000" points="30.5001,-118.4132 27,-108.4133 23.5001,-118.4133 30.5001,-118.4132"/>\
</g>\
<!-- C -->\
<g id="node3" class="node">\
<title>C</title>\
<ellipse fill="none" stroke="#000000" cx="27" cy="-18" rx="27" ry="18"/>\
<text text-anchor="middle" x="27" y="-13.8" font-family="Times,serif" font-size="14.00" fill="#000000">C</text>\
</g>\
<!-- B&#45;&gt;C -->\
<g id="edge2" class="edge">\
<title>B-&gt;C</title>\
<path fill="none" stroke="#000000" d="M27,-71.8314C27,-64.131 27,-54.9743 27,-46.4166"/>\
<polygon fill="#000000" stroke="#000000" points="30.5001,-46.4132 27,-36.4133 23.5001,-46.4133 30.5001,-46.4132"/>\
</g>\
</g>\
</svg>\
</p>';

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
                assert.equal(result[0].content.replace(/\n/g,''), expectedSvg)
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
