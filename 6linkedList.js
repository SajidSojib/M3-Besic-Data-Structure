class Node{
    constructor(v){
        this.value=v;
        this.next=null;
    }
}

const head=new Node(5);
head.next= new Node(2)
head.next.next= new Node(8)
console.log(head);

let temp=head;
while(temp!=null){
    console.log(temp.value);
    temp=temp.next;
}