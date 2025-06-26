import createNode from './node.js';

export default function LinkedList () {

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

    function pop() { // removes the last list element
        if (list.next === null) throw new Error('Cannot Delete, list is empty.'); //empty list

        let current = list.next; //next element
        let previous = list; // the element before

        while (current != null) { // traverse until we reach last node
            previous = current; 
            current = current.next; 
        }

        previous.next = null; // remove last node setting it to null
        length--; // update length

        // return popped value
        return current.value;
    }

    function contains(value) {
        let current = list.next;

        while (current !== null && current.value !== value) { // traverse until value is met or list is over
            current = current.next;
        }

        if (current === null) { // error must come first, otherwise it bugs
            return `${value} is not on this list.`
        } else { // if value is found, this message is shown
            return `The ${value} is in the list.`;
        }
    }

    function find(value) {
        let current = list.next;
        let index = 0;

        while (current !== null && current.value !== value) { // traverse until value is met or list is over
            current = current.next;
            index++;
        }

        if (current === null) { // error must come first, otherwise it bugs
            return `${value} is not on this list.`
        } else { // if value is found, this message is shown
            return `The ${value} is in the list, on node ${index}`;
        }
    }

    function toString() { // converts the object list into a string
        let current = list.next; // start from first node
        let fullString = ''; // result
        let stringSection = ''; // for each node

        while (current !== null) { //traverse through the list
            stringSection = `( ${current.value} )`; // string
            fullString += stringSection; // appends
            current = current.next; //continues traversing

            if (current !== null) {
                fullString += ' -> '; // adds an arrow to each intersection
            }
        }

        fullString += ' -> ( null )'; // gambiarrina

        return fullString === '' ? 'Empty List' : fullString; // only shows empty list when its truly empty
    }

    function insertAt(value, index) {
        // create new node
        const newNode = createNode(value);

        if (index === 0) { // special case: inserting node at 0
            newNode.next = list;
            list = newNode;
            return
        }

        let current = list; // starts at list, not list.next!
        let position = 0;

        while (current !== null && position < index - 1) {
            current = current.next;
            position++;
        }

        // If we reached end of list
        if (current === null) {
            throw new Error(`Index out of bounds. Please select an Index equal or lower than ${position}`);
        }
            // otherwise, insert at correct position
            newNode.next = current.next;
            current.next = newNode;
        }    



    function removeAt(index) {
        if (list === null) {
            throw new Error('Cannot delete. List empty.');
        }

        // this is in case index 0 is removed:
        if (index === 0) {
            const deletedValue = list.value;
            list = list.next;
            length--;
            return deletedValue;
        }

        let current = list.next;
        let previous = null;
        let position = 0;

        while (current != null && position < index) { // traverse
            previous = current; 
            current = current.next; 
            position++;
        }

        if (current === null) { // for deleting non-existent indexes
            throw new Error('Index is out of bounds.');
        }

        previous.next = current.next; // remove node
        length--; // update length

        // return popped value
        return current.value;
    }

    return { //expose methods for access
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
};
