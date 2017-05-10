/**
 * Created by jasonyangxing on 10/5/17.
 */
function InsertionSort(arr){
    for (var i=1; i<arr.length; i++){
        var j = i-1;
        var key = arr[i];
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr
}

var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(InsertionSort(arr));