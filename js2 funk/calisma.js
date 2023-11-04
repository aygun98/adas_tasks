// const ary1 =['xidr', 'samir', 'naile', 'sahin', 'aygun'  ]
// const ad = 'aygun'
// function yoxla(obyect , deyisen) {
//    if(obyect.includes(deyisen)==false){
//     obyect.push(deyisen)
//     return obyect
//    }
//    else{
//     return obyect
//    }
    
// }
// console.log(yoxla(ary1 , ad));

const ary =[
    
]

for(let i = 0; i<1; i++ ){
    let ad = prompt('ad: ')
    let soyad = prompt('soyad: ')
 let oby={
    ad:ad,
    soyad:soyad
 }
 ary.push(oby)
}
console.log(ary);


ary.forEach(kullanici=> console.log(kullanici.ad + ' '+ kullanici.soyad))