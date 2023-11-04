// const tree = ["ulu baba", "ulu nene", ["baba", "nene", ["ogul", "qiz" , ["neve", "neve2", ['kotukce', 'kotukce2']]]], ];


// function yazdir(ary) {
//     for (let i = 0; i < ary.length; i++) {

//         if (typeof ary[i] === 'object') {
//             yazdir(ary[i])

//         } else {
//             console.log(ary[i]);

//         }

//     }

// }
// yazdir(tree)

// function yazdir(ary) {
//   ary.forEach(element => {

//       if (Array.isArray(element)) {
//                yazdir(element)
//             }
//               else{
//                   console.log(element);
//               }
//   })


// }
// yazdir(tree)


// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4,
//         f: {
//             g: 5,
//             h: 6,
//         }
//     },
// };

// function obyazdir(ob) {
//       for (let key in ob){
//         if (typeof ob[key] === 'object') {
//          return   obyazdir(ob[key])

//         } else {
//             console.log(ob[key]);

//         }
//     }
  
// }
// obyazdir(obj)


//Bir string təyin edin (Məs: “Big Ben”). Bu string-də olan böyük hərflərin sayını tapın.

// let logoName = 'Big Ben'

// let boyukHerf = ''
// for (let i = 0; i < logoName.length; i++) {
//     if (logoName[i].toUpperCase() === logoName[i] && logoName[i].toLowerCase() !== logoName[i]) {
        
//         boyukHerf ++;
//     }
    
// }
// console.log(boyukHerf);


//......Verilən stringin palindrom (məsələn, qaçaq=>qaçaq, ata=>ata) olub-olmamasını yoxlayan funksiya yazın.

// let palindrom = 'ata'
// function yoxla(stg) {
//    let kicik = stg.toLowerCase()
//    let ters = kicik.split('').reverse().join('')
//    if (kicik === ters) {
//     return true
//    }
//    else{
//     return false
//    }
    
// }
// console.log(yoxla(palindrom));


//....Hərf və rəqəmlərdən ibarət stringdə(məs, “abc123”) rəqəmlərin cəmini tapan funksiya yazın.


// let string = 'abc123'
// let number = 0
// let sum = 0
// function calc(stg) {
//     for (let i = 0; i < stg.length; i++) {
        
//         if (!isNaN(parseInt(stg[i]))) {
//             sum += parseInt(stg[i])
            
            
//         }
        
//     }
//     return sum
        
// }
// console.log(calc(string));

//...Kebab-case formatında mətni parametr  kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.

// let kebabCase = 'Kebab-case'

// function yaziniCevir(stg) {
//     if (stg.includes('Kebab')) {
//       let text = stg.replace('Kebab', 'upper').toUpperCase()
  
//       return text
//   }
  
// }
// console.log(yaziniCevir(kebabCase));

//diger
// function kebabToUpper(kebabCaseText) {
  
//     var words = kebabCaseText.split('-');

   
//     var upperCaseText = words.map(function (word) {
//         return word.replace('kebab', 'upper').toUpperCase()
//         // return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join('_');

   
//     return upperCaseText;
// }


// var kebabCaseText = "bu-bir-kebab-case-metnidi";


// var result = kebabToUpper(kebabCaseText);


// console.log(result);



//....Bir stringdəki sözlərin yerlərini tərsinə çevirən funksiya yazın.

// let string = 'aygun salam'

// function tersCevir(stg) {
// let ters = stg.split(' ').reverse().join(' ')
//      return ters
// }
// console.log(tersCevir(string));

      
    




