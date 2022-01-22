class HashTable {
    constructor(size = 53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      const WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key, value) {
        const hash = this._hash(key);

        if (!this.keyMap[hash]) {
            this.keyMap[hash] = [];
        }
        this.keyMap[hash].push([key, value]);
    }

    get(key) {
        const hash = this._hash(key);

        if (!this.keyMap[hash]) {
            return undefined;
        }

        for (let i = 0; i < this.keyMap[hash].length; i++) {

            if (this.keyMap[hash][i][0] === key) {
                return this.keyMap[index][i][1];
            }
        }
    }
    keys() {
        const keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];

            if (element) {
                element.forEach((el) => {
                    if (!keys.includes(el[0])) {
                        keys.push(el[0]);
                    }
                })
            }
        }

        return keys;
    }

    values() {
        const values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];

            if (element) {
                element.forEach((el) => {
                    if (!values.includes(el[1])) {
                        values.push(el[1]);
                    }
                })
            }
        }

        return values;
    }
}