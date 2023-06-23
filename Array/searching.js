// Ternary search

function ternarySearch(arr, i, j, key){
    let mid1 = i + (j - i) / 3;
    let mid2 = j - (j - i) / 3;
    while (i <= j) {
        if (arr[mid1] === key) {
            return mid1;

        }
         else if (arr[mid2] === key) {
            return mid2;

        }
        else if (key < arr[mid1]) {
            return ternarySearch(arr,i,mid-1,key)
        }
        else if (key > arr(mid2)) {
            return ternarySearch(arr,mid2+1,j,key)
        }

        else 
        {
            return ternarySearch(arr,mid1+1,mid2-1,key)
            }
        

    }

    return -1;
}


let array = [20, 25, 47, 56, 59, 63, 65, 79, 82];

console.log(ternarySearch(array,0,8,25))