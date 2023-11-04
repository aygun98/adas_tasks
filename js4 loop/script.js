//..........Bir array - dəki ən böyük ədədi tapmaq üçün bir dövr(loop) yazın.
// const number =[1,6,2,,7,3,4,5]

// let boyukEded = number[0]
// for (let i = 0; i < number.length; i++) {
//     if (number[i] > boyukEded) {
//         boyukEded = number[i]

//     }

// }
// console.log(boyukEded);

//...........İki array-i bir-birinə birləşdirmək üçün JavaScript dövr (loop) istifadə etmək.


// const ary1 = ['aygun', 'xidir', 'sebine']
// const ary2 = ['naile', 'samir', 'orxan']

// for (let i = 0; i < ary2.length; i++) {
//     ary1.push(ary2[i])


// }
// console.log(ary1);

//....................Bir obyektin bütün açar sözlərini və qiymətlərini console-a çap etmək üçün bir dövr yazın.
// const obc = {
//     ad: 'xidir',
//     soyad : 'ismayilov'
// }
// let keys  = Object.keys(obc)

// for (let i = 0; i < keys.length; i++) {
//     let deyer = keys[i]

//     let value = obc[deyer]
//     console.log( deyer);
//     console.log( value);


// }

//................... Bir array-dəki cüt indeksli elementlərin cəmini hesablamaq üçün bir dövr yazın.

// const numbers = [1, 2, 3, 6, 4, 7, 8]
// const cut = []
// let cem = 0

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         cut.push(numbers[i])
//         // console.log(cut);
//         cem += numbers[i]
//     }


// }
// // console.log(cem);
// console.log(cem);
// console.log(cut);

// console.log(numbers.reduce((a, b) => b % 2 == 0 ? a + b : a, 0))



// console.log(numbers.reduce((a, b) => {
//     if (b % 2 == 0) {
//         a.push(b)
//     }
//     return a
// }, []))

// console.log(numbers.reduce((a, b) => b % 2 == 0 ? a.concat(b) : a, []))



//.......Bir array-dəki təkrarlanan elementləri tapmaq üçün dövr istifadə etmək.


// const numbers = [1, 2, 3, 6, 4, 7, 8, 8 , 3, 2]
//  let tekrarlanmayanlar = []
//  let tekrar = []

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) == i) {
//        tekrarlanmayanlar.push(numbers[i])
//     }
//     else{
//   tekrar.push(numbers[i])
//     }

// }
// console.log(tekrar);



//.......Bir string-dəki hərflərin sayını hesablamaq üçün bir dövr yazın.

//  let stg = 'aygun'

// let say = 0


//  for (let i = 0; i < stg.length; i++) {
//      let lower = stg[i].toLowerCase()
//      if (lower >= 'a' &&  lower <= 'z') {
//        say++
//        console.log(say);
//      }


//  }


//..... Bir array-dəki elementlərin tək və cüt indeksli olanları ayrı-ayrı ayrı array-lərə bölmək üçün bir dövr yazın.


// const aryall = [1,2,3,4,5,6]
// const cut =[]
// const tek =[]
//  for (let i = 0; i < aryall.length; i++) {
//    if (aryall[i]% 2 == 0)  {
//      cut.push(aryall[i])
//    }
//     else{
//         tek.push(aryall[i])
//     }
//  }

//  console.log(cut);
//  console.log(tek);

//............... İki array-də eyni elementləri tapmaq və onları yeni bir array-də toplamaq üçün bir dövr yazın.

// const ary1 = [2,1,3,4]
// const ary2 = [3,4,5,6]
// let eyni= []

// for (let i = 0; i < ary1.length; i++) {
//     if (ary2.includes(ary1[i])) {
//        eyni.push(ary1[i])
//     }


// }
// console.log( eyni);

//......... Bir array-dəki bütün elementləri əksinə çevirmək üçün bir dövr yazın.

// const ary = [1, 2, 3, 4, 5]
// let ters = []

// for (let i = ary.length - 1; i >= 0; i--) {
 
//   ters.push(ary[i])
// }
// console.log(ters);



