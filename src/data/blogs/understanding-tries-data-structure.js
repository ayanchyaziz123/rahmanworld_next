export const understanding_tries_data_structure = {
  "title": "Understanding Tries Data Structure",
  "description": "A guide to implementing and using tries for efficient string storage and search.",
  "date": "August 20, 2024",
  "category": "Data Structures",
  "content": "\n        <p>Tries, or prefix trees, are specialized tree-based data structures that are used to store associative data structures, often strings.</p>\n        <p>Here's a simple Trie implementation in Python:</p>\n        <pre><code>\n          class TrieNode:\n            def __init__(self):\n                self.children = {}\n                self.is_end_of_word = False\n  \n          class Trie:\n            def __init__(self):\n                self.root = TrieNode()\n            \n            def insert(self, word):\n                node = self.root\n                for char in word:\n                    if char not in node.children:\n                        node.children[char] = TrieNode()\n                    node = node.children[char]\n                node.is_end_of_word = True\n        </code></pre>\n      ",
  "slug": "understanding-tries-data-structure"
};
