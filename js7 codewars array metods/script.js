//..İki çeşidlənmiş massivi tək birində birləşdirən funksiya yazın.Massivlər yalnız tam ədədlərdən ibarətdir.Həmçinin, yekun nəticə çeşidlənməlidir və heç bir dublikat olmamalıdır.

// const ary1 = [1,3,5,6,2,4,14]
// const ary2 = [11,1,13,25,36,42,14,]


// const arrays = [...ary1, ...ary2]
// const set = [...new Set(arrays)]
//  set.sort((a, b) => {
//      return a - b
//  })
// console.log(set);


//... Massivin ən çox rast gəlinən elementinin sayını tapmaq üçün funksiyanı tamamlayın. Girişin tam ədədlər massivi olduğunu düşünə bilərsiniz. Boş massiv üçün 0 qaytarın
// const ary1 = [1, 3, 5, 6, 2, 4, 14, 1, 3, 5]
// const ary2 =[]

//  if (ary1.length == 0) {
//      console.log(0);
//  }
// for (let i = 0; i < ary1.length; i++) {
   
//    if (ary1.indexOf(ary1[i]) !==  i) {
//     ary2.push(ary1[i])
// }


// }
// console.log(ary2);

//.. funsiya ile yazliw
// function cesidle(a , b) {
//      if (ary1.length == 0) {
//            return 0;
//      }
//     for (let i = 0; i < a.length; i++) {

//         if (a.indexOf(a[i]) !== i) {
//             b.push(a[i])
//         }
//     }
    
//     return b
// }
// console.log(cesidle(ary1 ,ary2));

const ary1 = [1, 21, 4, 7, 5]
// const ary2 = [...ary1]



// ary2.sort((a,b)=>{
//     return  b-a
// }) 
// console.log(ary2);
// console.log(ary1);


for (let i = 0; i < ary1.length; i++) {
   for (let j = 0; j < ary1.length; j++) {
    if (ary1[i] > ary1[j] ) {
           let duzulus = ary1[i]
         ary1[i] = ary1[j]
         ary1[j] = duzulus
      
        }
        
    }
    
}
console.log(ary1);

// for (let i = 0; i < sayilar.length; i++) {
//     for (let j = i + 1; j < sayilar.length; j++) {
//         if (sayilar[i] > sayilar[j]) {
//             // Swap işlemi
//             let gecici = sayilar[i];
//             sayilar[i] = sayilar[j];
//             sayilar[j] = gecici;
//         }
//     }
// }

