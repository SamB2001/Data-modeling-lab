// let arr = [8, 3, 4, 2, 2, 5, 4, 3, 0, 6]
    
//     function number(arr){
//         let arr1 = ['() ']
//         let arr2 = ['-']
//         let arr3 = ['']
//         let area = arr.slice(0, 3)
//         arr1.insert(1, area)
//         let nextNums = arr.slice(3, 3)
//         arr2.insert(0, nextNums)
//         let lastNums = arr.slice(6, 4)
//         arr3.insert(0, lastNums)
//         arr1.concat(arr2, arr3)
//     }
//     console.log(number(arr))

const array = [8, 0, 1, 8, 8, 2, 3, 5, 4, 9]



    function createPhoneNumber(numberArray) {
        let firstpart = ""
        let secondpart = ""
        let thirdpart = ""
        for (var i = 0; i < numberArray.length; i++) {
            if (i < 3) {
                firstpart += numberArray[i].toString()
            } else if (i >= 3 && i < 6) {
                secondpart += numberArray[i].toString()
            } else if (i >= 6) {
                thirdpart += numberArray[i].toString()
            }
        }
        return `(${firstpart}) ${secondpart}-${thirdpart}`
    }    
    
    console.log(createPhoneNumber(array)) 