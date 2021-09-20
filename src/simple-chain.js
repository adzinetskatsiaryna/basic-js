import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr:[],

  getLength() {
   return this.arr.length;
  },

  addLink(value) {
    if(value === ''){
      this.arr.push( `( )` )
    }
    this.arr.push(`( ${value} )`) 
    return this
  },

  removeLink(position) {
   if(typeof position !== 'number' || position < 1 || position > this.arr.length){
     this.arr = []
     throw new Error("You can't remove incorrect link!")
   } 
     this.arr.splice(position - 1, 1)
     return this
    
  },
  reverseChain() {
    if(this.getLength() !==0){
      this.arr.reverse()
    }
    return this
  },

  finishChain() {
   let str = this.arr.join('~~')
    this.arr = []
    return str
  }
};
