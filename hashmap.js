class HashMap {
    constructor(capacity=16) {
        this.loadFactor = 0.75
        this.capacity = capacity
        this.size = 0
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    hash(key) {
        let hashCode = 0;
        if (typeof key !== 'string') {
            key = String(key);
        }
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
    set(key, value) {
       
        const index = this.hash(key) 
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                bucket[i][1] = value
                return
            }
        }
        bucket.push([key, value])
        this.size += 1;
    }
    get(key) {
        const index = this.hash(key) 
        if (!this.buckets[index]) {
            return undefined;
        }
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                return bucket[i][1] 
               
            }
        }
        return null
    }
    has(key) {
        const index = this.hash(key) 
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                return true   
            }
        }
        return false
    }
    remove(key) {
        const index = this.hash(key) 
        if (!this.buckets[index]) return false;
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                bucket.splice(i, 1)
                this.size -= 1
                return true      
            }
        }
        return false
    }
    length() {
        return this.size
    }
    clear() {
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
        this.size = 0
    }
    // keys and values definitely need optimization, they are really slow
    keys() {
        let keysArray = []
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let [key] of bucket) {
                    keysArray.push(key);
                }
            }
        }
        return keysArray
    }
    values() {
        let valuesArray = []
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let [, value] of bucket) {
                    valuesArray.push(value);
                }
            }
        }
        return valuesArray
    }
    entries() {
        return this.buckets
    }
   
}

module.exports = HashMap