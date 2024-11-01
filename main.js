import HashMap from "./hashmap.js";
import LinkedList from "./linkedlist.js";

const hashMap = new HashMap();
const list = new LinkedList();

hashMap.hash("Carlos");
hashMap.hash("orCals");

hashMap.set("John", "Madden");
hashMap.set("Joe", "Smith");
hashMap.set("John", "Smith");
hashMap.set("Mary", "Jane");
hashMap.set("Peter", "Griffin");

console.log(hashMap.get("Mary"));
console.log(hashMap.get("Bob"));
console.log(hashMap.get("John"));

console.log(hashMap.has("John"));
console.log(hashMap.has("Bob"));

console.log(hashMap.get("Mary"));

hashMap.length();

console.log(hashMap.keys());
console.log(hashMap.values());
hashMap.entries().forEach((ele) => console.log(ele));
