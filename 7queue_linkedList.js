class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    
    enqueue(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    
    dequeue(){
        if(this.size==0){
            console.log('queue is impty');
            return;
        }
        this.head=this.head.next;
        this.size--;
    }

    peak(){
        if (this.size == 0) {
          console.log("queue is impty");
        }else{
          console.log(this.head.value);
        }
    }

    print(){
        if(this.size==0){
            console.log('queue is empty');
            return;
        }
        let temp=this.head;
        const arr = []
        while(temp!=null){
            arr.push(temp.value);
            temp=temp.next;
        }
        console.log(arr);
    }
}

const queue = new Queue();

queue.print();
queue.dequeue();

queue.enqueue(1);
queue.enqueue(2);
queue.peak();
queue.enqueue(3);
queue.enqueue(4);
queue.print();

queue.dequeue();
queue.dequeue();
queue.print();

