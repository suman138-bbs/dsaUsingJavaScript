// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
        

//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i)*i)%this.data.length
//         }
//         return hash;
//     }

//     set(key, value) {
//         let arr = [];
//         arr.push(this._hash(key))
//         arr.push(value)
//         this.data.push(arr);
//     }

//     get()

    
// }

// const myHashTable = new HashTable(5);



