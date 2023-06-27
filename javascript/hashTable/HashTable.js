'use strict';


const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size); // Initialize an empty array to store the buckets
  }

  hash(key) {
    let characters = key.split(''); // Split the key into an array of characters
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0); // Calculate the sum of ASCII values of all characters in the key
    }, 0);
    let initialHash = asciiSum * 599; // Multiply the ASCII sum by a prime number
    return initialHash % this.size; // Return the remainder of the division by the size to get the bucket index
  }

  set(key, value) {
    let position = this.hash(key); // Get the bucket index for the key

    if (this.buckets[position]) {
      // If the bucket already exists at the position
      let bucket = this.buckets[position];
      let node = bucket.find((item) => item.key === key); // Check if the key already exists in the bucket

      if (node) {
        node.value = value; // If key exists, update its value
      } else {
        bucket.add({ key, value }); // If key doesn't exist, add the new key-value pair to the bucket
      }
    } else {
      let bucket = new LinkedList();
      bucket.add({ key, value }); // Create a new bucket and add the key-value pair to it
      this.buckets[position] = bucket; // Assign the bucket to the corresponding position in the buckets array
    }
  }

  get(key) {
    let position = this.hash(key); // Get the bucket index for the key
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let node = bucket.find((item) => item.key === key); // Find the node with the given key in the bucket

      if (node) {
        return node.value; // Return the value if the key exists in the bucket
      }
    }
    return undefined; // Return undefined if the key does not exist
  }

  has(key) {
    let position = this.hash(key); // Get the bucket index for the key
    let bucket = this.buckets[position];
    return bucket && bucket.find((item) => item.key === key) !== null; // Check if the key exists in the bucket
  }

  keys() {
    let results = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let node of bucket) {
          results.push(node.key); // Collect all keys from each bucket
        }
      }
    }

    return results; // Return the array of keys
  }
}


// const table = new HashTable(1024);

// console.log('table:', table);

// let hashOne = table.hash('Ryan');
// let hashTwo = table.hash('Kati');
// console.log('hashOne:', hashOne);
// console.log('hashTwo:', hashTwo);

// table.set('Ryan', 'this is my value');
// table.set('Kati', 'how do we define value');
// table.set('Ryan', 'updated value'); // Testing key replacement

// console.log('updated table:', table);
// console.log('get works!', table.get('Ryan'));
// console.log('has worked:', table.has('Ryan')); // expect true
// console.log('has worked:', table.has('Lucky')); // expect false
// let keys = table.keys();
// console.log('keys:', keys);

module.exports = HashTable;
