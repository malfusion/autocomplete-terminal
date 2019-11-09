import { Injectable } from '@angular/core';

class Node{
  children = {};
  end = false;
}

@Injectable({
  providedIn: 'root'
})
export class SuggestionEngineService {

  trie = undefined;
  node = {
    children: {}
  };
  
  constructor() { 
    this.trie = new Node();
    this.addWord('Hell');
    this.addWord('Hot');
  }

  addWord(word){
    let node = this.trie;
    for(var ch of word){
      if(node.children[ch] !== undefined){
        node = node.children[ch];
      }
      else{
        const nextNode = new Node();
        node.children[ch] = nextNode;
        node = node.children[ch]
      }
    }
    node.end = true;
  }

  suggest(word){
    let node = this.trie;
    for(var ch of word){
      if(node.children[ch] !== undefined){
        node = node.children[ch]
      }else{
        return word;
      }
    }
    let suggestions = [];
    this.r_suggest(node, suggestions, word);
    return suggestions[0];
  }

  r_suggest(node, res, acc){
    if(node.end){
      res.push(acc);
    }
    if(Object.keys(node.children).length === 0){
      return;
    }
    for (var key of Object.keys(node.children)){
      this.r_suggest(node.children[key], res, acc+key)
    }
    return res;
  }
}
