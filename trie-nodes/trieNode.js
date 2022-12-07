/* 
The Trie represents the entire data structure,
while the TrieNode represents each letter in the structure.
 */

class TrieNode {
  constructor(key) {
    this.key = key; // letter stored as a string
    this.children = {}; // object containing the children elements
    this.isWord = false; // whether or not the node finishes the word
  }
}

module.exports = TrieNode;
