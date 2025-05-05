// Scott Hale (Oxford Internet Institute)
// Requires sigma.js and jquery to be loaded
// based on parseGexf from Mathieu Jacomy @ Sciences Po Médialab & WebAtlas

sigma.publicPrototype.parseJson = function(jsonPath, callback) {
  var sigmaInstance = this;
  jQuery.getJSON(jsonPath, function(data) {

    for (i = 0; i < data.nodes.length; i++) {
      var node = data.nodes[i];

      // Y-koordináta tükrözése
      if (typeof node.y === "number") {
        node.y = -node.y;
      }

      var id = node.id;
      sigmaInstance.addNode(id, node);
    }

    for (j = 0; j < data.edges.length; j++) {
      var edgeNode = data.edges[j];
      var source = edgeNode.source;
      var target = edgeNode.target;
      var eid = edgeNode.id;

      sigmaInstance.addEdge(eid, source, target, edgeNode);
    }

    if (callback) callback.call(this);
    
  });
};
