/**
 * Created by jasonyangxing on 10/5/17.
 */
function bubbleSort (arr){
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr.length-1;j++){
            if (arr[j]>arr[j+1]){
                var temp = arr [j+1];
                arr[j+1] = arr [j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var arr= [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));