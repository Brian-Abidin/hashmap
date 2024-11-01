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
    }
    return hashCode;
  }

  set(key, value) {
    // key and value pair
    // if key exists, then old value is overwritten
    // or we can say updated key's value
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
