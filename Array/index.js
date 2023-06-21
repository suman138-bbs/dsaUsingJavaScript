// Find the targeted Sum
// two pointer approach ==> Time Complextiy of following code is O(n) 
function find_target(arr,i,j,target){
    while(i<=j){
        if(arr[i]+arr[j] == target)
    return [i,j];
    else if (arr[i]+arr[j]>target){
        j=j-1;
        
    }
    else 
        {
            i=i+1
        }
    }
}

arr = [20,40,60,80,90,120,240];
let res=find_target(arr,0,6,210);
console.log(res)