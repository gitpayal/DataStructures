class GraphNode {
   contructor(val) {
     this.val = val;
   }
}


class Graph {
   constructor(){
     this.vertices = [];
     this.adjacencyList ={};
   }
   
   addNode(nodeValue) {
      this.vertices.push(nodeValue);
      this.adjacencyList[nodeValue] =[];
   
   }
   
   addEdge(node1,node2,weight) {
      this.adjacencyList[node1].push({node: node2,weight:weight})
      this.adjacencyList[node2].push({node:node1,weight:weight})
   }
   
   printGraph() {
      
      
   }
}
