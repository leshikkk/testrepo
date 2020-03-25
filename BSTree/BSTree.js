 export class Node {
    constructor(value, pos) {
        this.value = value;
        this.left = null;
        this.right = null;
        if (!this.pos){
            this.pos = pos;}
        else {
            this.pos = "";
        }
    }

    addNode(node, value, pos){
        if ( !node ) {
            return new Node(value, pos);
        }
        if (node.value > value ){
            pos += " left ";
            node.left = this.addNode( node.left,  value, pos);
        } else if (node.value < value) {
            pos += " right ";
            node.right = this.addNode(node.right, value, pos);
        } else if (node.value === value){
            node.value = value;
        }
        return node;
    }
    getNode(value){

        let currentNode = this.node;
        while (currentNode != null){
            if (currentNode.value > value) currentNode = currentNode.left;
            else if (currentNode.value < value) currentNode = currentNode.right;
            else if (value === currentNode.value) return currentNode;
        }

        return null;
    }
    getMin(node){
        if (!node.left) return node.value;
        return this.getMin(node.left);
    }
    getMax(node){
        if (!node.right) return node.value;
        return this.getMax(node.right);
    }
    showPosNode(value){
        let currentNode = this.node;
        while (currentNode != null){
            if (currentNode.value > value) currentNode = currentNode.left;
            else if (currentNode.value < value) currentNode = currentNode.right;
            else if (value === currentNode.value) return console.log(`Path this node  is ${currentNode.pos}`);
        }

        return null;
    }


}
  export class BinaryTree extends  Node{
    constructor(value) {
        super(value);
        this.node = null;
    }
    add(value){
        this.node = super.addNode(this.node, value);
    }
    getMaxNode(){
        return super.getMax(this.node)
    }
    getMinNode(){
        return super.getMin(this.node)
    }
    show(value) {
        super.showPosNode(value)

    }
}

