/**
 * Created by jasonyangxing on 12/4/17.
 */
function selectionSort (arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0;i< len-1;i++){
        minIndex=i;
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,19,50,48];
console.log(selectionSort(arr));