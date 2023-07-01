class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
    }

        append(value){
            let newNode = {
                value: value,
                next:null
                
            }
            this.tail.next  =newNode
            this.tail = newNode;
            return this;
        }
    
}

const node = new LinkList(10)
node.append(20)
node.append(30)
console.log(node);