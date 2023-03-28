function binary (num, target){
let start = 0;
let end = num.length -1;

while (start <= end){
    let mid = Math.floor ((start+end)/2);
    if ((num[mid]===target)){
        return mid
    }
    else if (num[mid]<target){
        start = mid+1;
    }
    else if (num[mid]>target) {
        end = mid-1;
    }
    else{
        return null;   
    }
    
}
}
let num = [5, 7, 9, 13, 32, 33, 42, 54, 56, 88];
target = 33;
console.log(binary(num,target))