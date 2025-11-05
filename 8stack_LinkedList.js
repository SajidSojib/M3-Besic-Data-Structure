class Node{
    constructor(v){
        this.value = v;
        this.next = null;
    }
}
// stack with linked list
class Stack{
    constructor(){
        this.head = null;
        this.top = null;
        this.size = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.top = newNode;
        }else{
            this.top.next = newNode;
            this.top = newNode;
        }
        this.size++;
    }
    pop(){
        if(this.size == 0){
            console.log('stack is empty');
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    peak(){
        if(this.size == 0){
            console.log('stack is empty');
            return;
        }
        console.log(this.top.value);
    }
    print(){
        if(this.size == 0){
            console.log('stack is empty');
            return;
        }
        let temp = this.head;
        const arr = [];
        while(temp != null){
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr);
    }
}
const stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(2);
stack.push(7);
stack.print();
stack.pop();
stack.pop();
stack.peak();
stack.print();
