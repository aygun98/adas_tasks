//....Bir object yaradın və həm swicth-case, həm də if-else ilə objectin hər hansı key-ni yoxlayan funksiya yazın.
// const obyect1 = {
//     ad:"Aygun",
//     soyad: "Xuduyeva",
//     kusr: "Adas",
//     il:1998,
//     keytap: function(key){

//         switch(key){
//             case 'ad':
//               return this.ad;
//             case 'soyad':
//               return this.soyad;
//             case 'kurs':
//               return this.kusr;
//             case 'il':
//               return this.il;
//               default:
//                   return 'tapilmadi'
//            }
//     }

// }
// const a= obyect1.keytap('ad')
// console.log(a);

// function keytap(oby, key) {
//      switch(key){
//       case 'ad':
//         return oby.ad;
//       case 'soyad':
//         return oby.soyad;
//       case 'kurs':
//         return oby.kusr;
//       case 'il':
//         return oby.il;
//         default:
//             return 'tapilmadi'
//      }
// }
// console.log(keytap(obyect1,'ad'));
// console.log(keytap(obyect1,'soyad'));
// console.log(keytap(obyect1,'kurs'));
// console.log(keytap(obyect1,'il'));




// //
// function funk2(oby, key) {
//     if(key == 'ad'){
//     return oby.ad
//     }
//     if(key == 'soyad'){
//     return oby.soyad
//     }
//     if(key == 'soyad'){
//     return oby.ad
//     }
//     if(key == 'kurs'){
//     return oby.kusr
//     }
//     if(key == 'il'){
//     return oby.il
//     }
//     else{
//        return "tapilmadi"
//     }

// }

// console.log(funk2(obyect1, 'ad'));
// console.log(funk2(obyect1, 'soyad'));
// console.log(funk2(obyect1, 'kurs'));
// console.log(funk2(obyect1, 'il'));

// function name1(obyect,key) {
//     if(key in obyect){
//         return obyect[key];
//     }
//     else{
//         return 'yoxdur'
//     }
// }
// console.log(name1(obj1, 'ad'));
// console.log(obj1["soyad"]);

//.....Bir array və bir dəyişən yaradın. Dəyişənin verilən array-a daxil olub olmadığını yoxlayıb daxildirsə, həmin elementin index-ni, daxil deyilsə false qaytaran funksiya yazın.
// const ary=['aygun', 'xidir', 'naile', 'sahin']
// const name1= 'xidir'


// function funk() {
//     if(ary.includes(name1)){
//         return ary.indexOf(name1)
//     }
//     else{
//         return false
//     }


// }
// console.log(funk())


//....Verilmiş dəyişəni array əlavə edən funksiya yazın. Əgər həmin element array-da varsa, dəyişən array-a əlavə olunmasın.
// const ary=['aygun', 'xidir', 'naile', 'sahin']
// const name1= 'aygun'
// 
// function funk() {

//     if(ary.includes(name1)== false){
//         ary.push(name1)
//         return  ary
//     }
//     else{
//         return ary
//     }

// }

// console.log(funk());





//... İstifadəçidən məlumatları götürüb verilmiş objectə əlavə edən funksiya yazın: {ad: “Ad1”, soyad: “Soyad1”, yas: yas1, email: “email@mail.com”}
// function melumatlar(obyec) {
//     let ad = prompt('ad')
//     let soyad = prompt('soyad')
//     let yas = +prompt('yas')

//     obyec.ad = ad
//     obyec.soyad = soyad
//     obyec.yas = yas
//     return obyec
// }

// const oby = {
//     ad: 'kohne',
//     soyad: 'kohne',
//     yas: 1

// }

// console.log("Əvvəlki obyekt:", oby);


// var yenilənmişObyekt = melumatlar(oby);


// console.log("Yenilənmiş obyekt:", yenilənmişObyekt);

///. .. Bir object yaradın və bu objectə yeni key əlavə edən funsiya yazın.
// const oby={
//     ad: 'aygun',
//     soyad: 'xuduyeva',
//     yas: 25,
// }
// // console.log(oby[0]);
// function funk(obect, key, value) {
//    obect[key] = value
//    return obect
// }
// console.log(funk(oby, 'il', 5));

// ... beli deyil
// const ary = []
// function funk(massiv , oby) {
//  massiv.push(oby)
//     return massiv
// }

// // console.log(funk(ary ,oby));


// const ob1 ={
//     ad:'aygun'
    
// }
// const ob2 ={
//     ad:'xidir'

// }


// console.log(funk(ary  , ob1));
// console.log(funk(ary  , ob2));



