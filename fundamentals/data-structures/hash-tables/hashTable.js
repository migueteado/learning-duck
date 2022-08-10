class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    // O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  remove(key) {
    // O(1), O(n) if we are short of spaces in memory
    let address = this._hash(key);
    if (this.data[address]) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          return this.data[address].splice(i, 1)[0];
        }
      }
    }
    return undefined;
  }

  get(key) {
    // O(1), O(n) if we are short of spaces in memory
    let address = this._hash(key);
    if (this.data[address]) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          return this.data[address][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    // O(n^2), maybe not that good for performance
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  _hash(key) {
    // Fast function, O(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}
