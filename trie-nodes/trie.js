/* 
The Trie represents the entire data structure,
while the TrieNode represents each letter in the structure.
 */

const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode(null); // null key to indicate the top parent in the list
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      node.children[word[i]] = new TrieNode(word[i]);
      node = node.children[word[i]];

      if (i == word.length - 1) {
        node.isWord = true;
      }
    }
  }
}

module.exports = Trie;
