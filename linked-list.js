import createNode from './node.js';

function LinkedList () {

    const list = createNode(); // creates the list with an 'empty' head

    function append(value) {
        let current = list;

        //this checks if next node is null or not. If it isnt, it appends the item to the next item
        while (current.next !== null) {
            current = current.next
        }

        // this uses the createNode function to append
        current.next = createNode(value);
    }

    function prepend(value) {
        // create new node that points to the first node
        const newNode = createNode(value, list.next);

        // make the new note the first node after empty head
        list.next = newNode;
    }

};

