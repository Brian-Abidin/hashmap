import LinkedList from "./linkedlist.js";

export default class HashMap {
  constructor(buckets = Array(16)) {
    this.buckets = buckets;

    // if (index < 0 || index >= buckets.length) {
    //   throw new Error("Trying to access index out of bound");
    // }
  }

  hash(key) {
    // key is important only inside the hash function
    // key is never accessed directly inside a bucket
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.buckets.length;
    }
    console.log(hashCode);
    return hashCode;
  }

  set(key, value) {
    // key and value pair
    // if key exists, then old value is overwritten
    // or we can say updated key's value
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
      const list = new LinkedList();
      list.append(key, value);
      this.buckets[index] = list;
    } else {
      this.buckets[index].append(key, value);
    }
    console.log(this.buckets[index]);
    // using the hashCode index, return this key value pair inside a linked list
  }

  get(key) {
    // returns value that is assigned to key
    // if key is not found, return null
  }

  has(key) {
    // returns true or false based on whether or not
    // the key is in the hash map
  }

  remove(key) {
    // if key is in hash map, removes the entry then returns true
    // else if the key is not, return false
  }

  length() {
    // returns # of stored keys in map
  }

  clear() {
    // removes all entries in the hash map
  }

  keys() {
    // returns array containing all keys inside hash map
  }

  values() {
    // returns array containing all values
  }

  entries() {
    // returns array that contains each key, value pair
    // ex.) [[firstKey, firstVal], [secondKey, secondVal]]
  }
}
