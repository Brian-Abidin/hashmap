import LinkedList from "./linkedlist.js";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array(this.capacity);
  }

  copy(array) {
    // use when buckets have exceeded capacity * loadFactor
    console.log(array.length);
    const temp = this.entries();
    this.buckets = array;
    temp.forEach((pair) => this.set(pair[0], pair[1]));
  }

  check() {
    // checks if hashmap needs to grow
    if (this.length() > this.capacity * this.loadFactor) {
      this.capacity *= 2;
      const tempArray = Array(this.capacity);
      this.copy(tempArray);
      console.log(`There are now ${this.buckets.length} buckets`);
      return;
    }
    if (Math.floor(this.capacity * this.loadFactor) - this.length() === 0) {
      console.log("buckets will double on setting next node");
    } else {
      console.log(
        `${
          Math.floor(this.capacity * this.loadFactor) - this.length()
        } more node(s) until buckets doubles!`
      );
    }
  }

  hash(key) {
    // key is important only inside the hash function
    // key is never accessed directly inside a bucket
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.capacity;
    }

    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
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
      let temp = this.buckets[index].head;
      while (temp !== undefined && temp !== null) {
        if (temp.key === key) {
          temp.value = value;
          console.log(`changed ${key} value to ${value}`);
          return;
        }
        temp = temp.nextNode;
      }
      this.buckets[index].append(key, value);
    }
    this.check();
    // using the hashCode index, return this key value pair inside a linked list
  }

  get(key) {
    // returns value that is assigned to key
    // if key is not found, return null
    const index = this.hash(key);
    if (this.buckets[index] === undefined) return null;

    let temp = this.buckets[index].head;
    while (temp !== undefined && temp !== null) {
      console.log(temp);
      if (temp.key === key) return temp.value;
      temp = temp.nextNode;
    }
    return null;
  }

  has(key) {
    // returns true or false based on whether or not
    // the key is in the hash map
    const index = this.hash(key);
    if (this.buckets[index] === undefined) return false;
    let temp = this.buckets[index].head;
    while (temp !== undefined) {
      if (temp.key === key) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  remove(key) {
    // if key is in hash map, removes the entry then returns true
    // else if the key is not, return false
    const index = this.hash(key);
    let count = 0;
    if (this.buckets[index] === undefined) return false;
    let temp = this.buckets[index].head;
    while (temp !== undefined) {
      if (temp.key === key) {
        this.buckets[index].removeAt(count);
        return true;
      }
      temp = temp.nextNode;
      count += 1;
    }
    return false;
  }

  length() {
    // returns number of stored keys in hash map
    let count = 0;
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i] !== undefined) {
        count += this.buckets[i].size();
      }
    }
    return count;
  }

  clear() {
    // removes all entries in the hash map
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i] !== undefined) {
        this.buckets[i].head = null;
      }
    }
  }

  keys() {
    // returns array containing all keys inside hash map
    const keysArray = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i] !== undefined) {
        let temp = this.buckets[i].head;
        while (temp !== null) {
          keysArray.push(temp.key);
          temp = temp.nextNode;
        }
      }
    }
    return keysArray;
  }

  values() {
    // returns array containing all values
    const valuesArray = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i] !== undefined) {
        let temp = this.buckets[i].head;
        while (temp !== null) {
          valuesArray.push(temp.value);
          temp = temp.nextNode;
        }
      }
    }
    return valuesArray;
  }

  entries() {
    // returns array that contains each key, value pair
    // ex.) [[firstKey, firstVal], [secondKey, secondVal]]
    const entriesArray = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i] !== undefined) {
        let temp = this.buckets[i].head;
        while (temp !== null) {
          entriesArray.push([temp.key, temp.value]);
          temp = temp.nextNode;
        }
      }
    }
    return entriesArray;
  }
}
