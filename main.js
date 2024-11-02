import HashMap from "./hashmap.js";
import LinkedList from "./linkedlist.js";

const test = new HashMap();
const list = new LinkedList();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("lion", "blue");
test.set("ice cream", "vanilla");

test.set("moon", "silver");
console.log(test.has("lion"));
test.clear();
console.log(test.entries());
test.set("frog", "bag");
test.set("lion", "pink");
console.log(test.length());
