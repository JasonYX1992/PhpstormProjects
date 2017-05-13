/**
 * Created by jasonyangxing on 13/5/17.
 */
var str = "abdcadfasfdbadfafdasdfasyweroweurowqrewqrwqrebwqrewqrejwq;";
var array = str.split("");
array.sort();
var countArray = [];
var CountObj = function(character){
    this.count = 1;
    this.character = character;
    return this;
};

var arrayObj = null,
    countArrayObj = null,
    arrayLength = 0;
for (var i = 0, length = array.length; i < length; i++) {
    arrayObj = array[i];
    arrayLength = countArray.length;
    if (arrayLength > 0) {
        countArrayObj = countArray[arrayLength - 1];
        if (countArrayObj.character == arrayObj) {
            countArrayObj.count = countArrayObj.count + 1;
        } else {
            countArray.push(new CountObj(arrayObj));
        }
    } else {
        countArray.push(new CountObj(arrayObj));
    }
}
/**
 * Output each character and the appear time
 */

for(var i=0,length=countArray.length; i<length; i++) {
    countArrayObj = countArray[i];
    console.log(countArrayObj.character + ":" + countArrayObj.count);
}
