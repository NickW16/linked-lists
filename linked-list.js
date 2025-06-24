import createNode from './node.js';

function LinkedList () {

    const list = createNode(); // creates the list with an 'empty' head
    let length = 0; // this tracks the size

    function append(value) { //appends to the end of the list
        let current = list;

        //this checks if next node is null or not. If it isnt, it appends the item to the next item
        while (current.next !== null) {
            current = current.next
        }

        // this uses the createNode function to append
        length++;
        current.next = createNode(value);
    }

    function prepend(value) { //appends to the start of the list
        // create new node that points to the first node
        const newNode = createNode(value, list.next);

        // make the new note the first node after empty head
        length++;
        list.next = newNode;
    }

    function size() { // returns the number of nodes
        return length; // O(1) access
    }

    function head() { // returns the first node
        return list.next;
    }

    function tail() { // returns last node
        if (list.next === null) return null; //empty list

        let current = list.next //start at first node
        while (current.next !== null) { // traverse till last node
            current = current.next
        }
        return current; //returns last node
    }

    function at(index) {
        if (index < 0 || list.next === null) return null; // empty list

        let current = list.next; // start from first node
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current; // returns null if index is out of bounds
    }
};

