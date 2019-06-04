class Queue {
   constructor(){
     this.array = [];
   }
  
    enqueue(element){
      return this.array.push(element)
    }
  
    dequeue(){
       return this.array.shift();
    }

}
