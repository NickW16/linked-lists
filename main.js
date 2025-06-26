import LinkedList from './linked-list.js';

console.log('=========================')

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt('zero', 7);
list.removeAt(3);

console.log(list.toString());

console.log('=========================');