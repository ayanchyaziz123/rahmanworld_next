export const blogs = [
    {
      title: "Understanding React State",
      description: "A beginner's guide to understanding and managing state in React applications.",
      date: "October 15, 2024",
      category: "React",
      content: `
        <p>State is one of the most fundamental concepts in React. It allows your components to keep track of information that may change over time.</p>
        <p>Here’s how you can use state in a functional component:</p>
        <pre><code>
          import { useState } from 'react';
          
          const MyComponent = () => {
            const [count, setCount] = useState(0);
            
            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          }
        </code></pre>
      `,
      slug: "understanding-react-state",
    },
    {
      title: "Introduction to Machine Learning",
      description: "An overview of machine learning concepts with Python examples.",
      date: "September 30, 2024",
      category: "Machine Learning",
      content: `
        <p>Machine learning is a branch of artificial intelligence that enables systems to learn from data. Some common types of machine learning include supervised, unsupervised, and reinforcement learning.</p>
        <p>Here's an example of linear regression in Python:</p>
        <pre><code>
          from sklearn.linear_model import LinearRegression
          import numpy as np
  
          X = np.array([[1], [2], [3], [4]])
          y = np.array([2, 4, 6, 8])
  
          model = LinearRegression().fit(X, y)
          prediction = model.predict([[5]])
          print(prediction)
        </code></pre>
      `,
      slug: "introduction-to-machine-learning",
    },
    {
      title: "Understanding Tries Data Structure",
      description: "A guide to implementing and using tries for efficient string storage and search.",
      date: "August 20, 2024",
      category: "Data Structures",
      content: `
        <p>Tries, or prefix trees, are specialized tree-based data structures that are used to store associative data structures, often strings.</p>
        <p>Here's a simple Trie implementation in Python:</p>
        <pre><code>
          class TrieNode:
            def __init__(self):
                self.children = {}
                self.is_end_of_word = False
  
          class Trie:
            def __init__(self):
                self.root = TrieNode()
            
            def insert(self, word):
                node = self.root
                for char in word:
                    if char not in node.children:
                        node.children[char] = TrieNode()
                    node = node.children[char]
                node.is_end_of_word = True
        </code></pre>
      `,
      slug: "understanding-tries-data-structure",
    },
    {
      title: "Binary Tree Basics",
      description: "Learn the fundamentals of binary trees and common operations.",
      date: "July 5, 2024",
      category: "Data Structures",
      content: `
        <p>A binary tree is a data structure where each node has at most two children. This is useful in scenarios where data needs to be stored in a hierarchical manner.</p>
        <p>Here’s a basic implementation of a binary tree node in Python:</p>
        <pre><code>
          class TreeNode:
            def __init__(self, value=0, left=None, right=None):
                self.value = value
                self.left = left
                self.right = right
  
          # Example of creating nodes
          root = TreeNode(1)
          root.left = TreeNode(2)
          root.right = TreeNode(3)
        </code></pre>
      `,
      slug: "binary-tree-basics",
    },
    {
      title: "Breadth-First Search (BFS) in Graphs",
      description: "Learn how BFS works and when to use it in graph traversal.",
      date: "June 10, 2024",
      category: "Algorithms",
      content: `
        <p>BFS is an algorithm for traversing or searching tree or graph data structures. It explores nodes layer by layer.</p>
        <p>Here's an example of BFS using a queue in Python:</p>
        <pre><code>
          from collections import deque
  
          def bfs(graph, start):
            visited = set()
            queue = deque([start])
  
            while queue:
                vertex = queue.popleft()
                if vertex not in visited:
                    print(vertex, end=' ')
                    visited.add(vertex)
                    queue.extend([neighbor for neighbor in graph[vertex] if neighbor not in visited])
  
          graph = {
            'A': ['B', 'C'],
            'B': ['A', 'D', 'E'],
            'C': ['A', 'F'],
            'D': ['B'],
            'E': ['B', 'F'],
            'F': ['C', 'E']
          }
          bfs(graph, 'A')
        </code></pre>
      `,
      slug: "breadth-first-search-bfs",
    },
    {
      title: "Binary Search Tree Operations",
      description: "Understanding binary search trees (BST) and common operations like insertion, deletion, and search.",
      date: "May 15, 2024",
      category: "Data Structures",
      content: `
        <p>A binary search tree is a node-based binary tree structure where each node follows the BST property: left children are less than the parent node, and right children are greater.</p>
        <p>Here's an example of inserting a node in a BST:</p>
        <pre><code>
          class TreeNode:
            def __init__(self, key):
                self.left = None
                self.right = None
                self.value = key
  
          def insert(root, key):
            if root is None:
                return TreeNode(key)
            if key < root.value:
                root.left = insert(root.left, key)
            else:
                root.right = insert(root.right, key)
            return root
  
          # Usage
          root = TreeNode(50)
          insert(root, 30)
          insert(root, 70)
        </code></pre>
      `,
      slug: "binary-search-tree-operations",
    },
  ];
  