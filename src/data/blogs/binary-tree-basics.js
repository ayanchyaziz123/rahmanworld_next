export const binary_tree_basics = {
  "title": "Binary Tree Basics",
  "description": "Learn the fundamentals of binary trees and common operations.",
  "date": "July 5, 2024",
  "category": "Data Structures",
  "content": "\n        <p>A binary tree is a data structure where each node has at most two children. This is useful in scenarios where data needs to be stored in a hierarchical manner.</p>\n        <p>Here’s a basic implementation of a binary tree node in Python:</p>\n        <pre><code>\n          class TreeNode:\n            def __init__(self, value=0, left=None, right=None):\n                self.value = value\n                self.left = left\n                self.right = right\n  \n          # Example of creating nodes\n          root = TreeNode(1)\n          root.left = TreeNode(2)\n          root.right = TreeNode(3)\n        </code></pre>\n      ",
  "slug": "binary-tree-basics"
};
