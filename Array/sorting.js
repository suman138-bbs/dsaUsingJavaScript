//Bubbble Sort


function Bubbble_Sort(a) {
    let temp;
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < (a.length - i); j++){
            if (a[j] > a[j + 1]) {
                temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}


let arr = [70, 20, 50, 60,2,3,4,5,6,7,32,1,4,6]

console.log(Bubbble_Sort(arr))

//  Insertion Sort

// function insertion_sort(a) {
//     let i;
//     for (let j = 1;j<a.length;){
//         i = j - 1;
//         if (a[i] > a[j]) {
//             let temp = a[j];
//             a[j] = a[i];
//             a[i] = temp;
//             j--;
//         }
//         else {
//             j++;
//         }
      
//     }
//     return a;
// }





// let arr = [70, 60, 77, 1, 2]

// console.log(insertion_sort(arr))