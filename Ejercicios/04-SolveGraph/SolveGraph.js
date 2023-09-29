// function SolveGraph (graph, start, end, visited = {}) {
//   // Your code here:

// if(visited[start]) return false

// visited[start] = true

// for(let i = 0; graph[start].length; i++)
// if(end === graph[start][i]) {
//   return true;
// } else if (SolveGraph(graph, graph[start][i], end, visited)) {
// return true;
// }
// return false;
// }

function SolveGraphDFS(graph, start, end, queue =[]) {
  
  
  if (!visited[start]) {
  for (let i = 0; i < graph[start].length; i++) {
    queue.push(graph[start][i]);
  }
}

visited[start] = true;
  if (queue.length !== 0) {
    return (queue[0] === end || SolveGraphDFS(graph, queue.shift(), end, queue)
    );
  }
  return false;
}

module.exports = SolveGraph
