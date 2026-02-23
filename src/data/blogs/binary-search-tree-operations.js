export const binary_search_tree_operations = {
  "title": "Binary Search Tree Operations",
  "description": "Understanding binary search trees (BST) and common operations like insertion, deletion, and search.",
  "date": "May 15, 2024",
  "category": "Data Structures",
  "content": "\n        <p>A binary search tree is a node-based binary tree structure where each node follows the BST property: left children are less than the parent node, and right children are greater.</p>\n        <p>Here's an example of inserting a node in a BST:</p>\n        <pre><code>\n          class TreeNode:\n            def __init__(self, key):\n                self.left = None\n                self.right = None\n                self.value = key\n  \n          def insert(root, key):\n            if root is None:\n                return TreeNode(key)\n            if key < root.value:\n                root.left = insert(root.left, key)\n            else:\n                root.right = insert(root.right, key)\n            return root\n  \n          # Usage\n          root = TreeNode(50)\n          insert(root, 30)\n          insert(root, 70)\n        </code></pre>\n      ",
  "slug": "binary-search-tree-operations"
};
