export const breadth_first_search_bfs = {
  "title": "Breadth-First Search (BFS) in Graphs",
  "description": "Learn how BFS works and when to use it in graph traversal.",
  "date": "June 10, 2024",
  "category": "Algorithms",
  "content": "\n        <p>BFS is an algorithm for traversing or searching tree or graph data structures. It explores nodes layer by layer.</p>\n        <p>Here's an example of BFS using a queue in Python:</p>\n        <pre><code>\n          from collections import deque\n  \n          def bfs(graph, start):\n            visited = set()\n            queue = deque([start])\n  \n            while queue:\n                vertex = queue.popleft()\n                if vertex not in visited:\n                    print(vertex, end=' ')\n                    visited.add(vertex)\n                    queue.extend([neighbor for neighbor in graph[vertex] if neighbor not in visited])\n  \n          graph = {\n            'A': ['B', 'C'],\n            'B': ['A', 'D', 'E'],\n            'C': ['A', 'F'],\n            'D': ['B'],\n            'E': ['B', 'F'],\n            'F': ['C', 'E']\n          }\n          bfs(graph, 'A')\n        </code></pre>\n      ",
  "slug": "breadth-first-search-bfs"
};
