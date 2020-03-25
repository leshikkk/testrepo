 //import {BinaryTree} from "./BSTree/BSTree"


    let test = new BinaryTree();
    test.add(2);
    test.add(1);
    test.add(3);
    test.add(8);
    test.add(4);
    test.add(12);
    console.log(test);

    let min = test.getMinNode();
    console.log(min);
    let max = test.getMaxNode();
    console.log(max);
    let get = test.getNode(12);
    console.log(get);

    test.show(12);

  //  console.log(test);
