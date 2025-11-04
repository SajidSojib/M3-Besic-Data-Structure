class Node{
    constructor(v){
        this.value=v;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    append(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }

    getNode(idx){
        let temp = this.head;
        for(let i=0; i<idx; i++){
            temp = temp.next;
        }
        return temp
    }

    insert(value, index){
        if(index<0 || index>this.size){
            console.log('index is not valid');
            return this
        }
        else if(index == this.size){
            this.append(value);
        }
        else if(index == 0){
            this.prepend(value);
        }else{
            const newNode = new Node(value);
            const temp = this.getNode(index-1);
            newNode.next = temp.next;
            temp.next = newNode;
            this.size++;
        }
        return this
    }

    remove(index){
        if(index<0 || index>=this.size){
            console.log('index is not valid');
            return this
        }
        else if(index == 0){
            this.head = this.head.next;
            if(this.head == null){
                this.tail = null;
            }
            this.size--;
        }else{
            const temp = this.getNode(index-1);
            temp.next = temp.next.next;
            if(temp.next == null){
                this.tail = temp
            }
            this.size--;
        }
        return this
    }

    print(){
        const arr = []
        let temp = this.head;
        while (temp != null) {
          arr.push(temp.value);
          temp = temp.next;
        }
        console.log(arr.join(' -> ') + ' -> null');
    }
}

const linkedList = new LinkedList();

linkedList.append(5).append(10).append(15).print();

linkedList.insert(20, 0).print();
linkedList.insert(20, 6);    //! index is not valid
linkedList.insert(25, 4).print();
linkedList.remove(4).print();
linkedList.append(5).append(10).append(15).print();

