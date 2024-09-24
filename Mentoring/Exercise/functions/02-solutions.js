// 01
function rangeBetween(start, end) {

    const array = [];

    for (let i = start; i <= end; i++) {
        array.push(i)
    }

    return array;
}
console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));

// 02
function arrayRange(start, length) {
  const array = [];
  for (let i = 0; i < length; i++, start++) {
    array[i] = start;
  }
  return array;
}

console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

// 03
function moveIt(array, oldIdx, newIdx) {

    const oldItem = array[newIdx]; //30


    array[newIdx] = array[oldIdx];
    array[oldIdx] = oldItem;
    return array
}

console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
console.log(moveIt([10, 20, 30, 40, 50], 1, 4));

// 04
function fillArray(string, times) {
    
    const array = [];

    for (let i = 0; i < times; i++) {
        array.push(string)
    }

    return array
}
console.log(fillArray('some string', 4))

// 05
const items = [254, 45, 212, 365, 2543];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
console.log(randomItem(items));

// 06
function checkItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}
console.log(checkItem([2, 5, 9, 6], 5));
console.log(checkItem([2, 5, 9, 6], 1));

// 07
function mergeArrays(array1, array2) {
    const array = [...array1]

    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            array.push(array2[i])
        }
    }

    return array;
}

console.log(mergeArrays([1, 2, 3], [2, 30, 1])) 

// 08
function checkTruthy(array) {

    const result = []

    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) { // the '!!' operator converts (coerces) a value to a boolean type.
            // so 0, null, NaN etc are coerced to false
            result.push(array[i])
        }
    }


    // Using forEach
    // array.forEach(item => {
    //     if (!!item) result.push(item)
    // })

    // return result

    return array.filter(item => !!item )
}
console.log(checkTruthy([NaN, 0, 15, false, -22, '',undefined, 47, null]))


// Unknown maybe not needed

function squareSum(numbersArr){
    
    let numbersArrSave = [];

    for (let i = 0; i < numbersArr.length; i++){

        numbersArrSave.push(Math.pow(numbersArr[i],2))

    }
    
    console.log(numbersArrSave)
    
    return numbersArrSave
}

let numbersArr = [2,3,4] 

squareSum(numbersArr)