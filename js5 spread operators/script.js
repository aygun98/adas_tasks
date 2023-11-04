//..... Bir sıra rəqəmi təmsil edən bir array yaradın. Sonra bu arrayi destructuring istifadə edərək ayrı-ayrı dəyişənlərə bölün və onları konsola yazdırın.(Funksiya ilə yazin)
// const numbers= [1,2,3]

// function funk([a,b,c]) {

//  console.log(a ,b, c);
// }
// funk(numbers)


//......İki dərəcəli (nested) bir obyekt yaradın və bu obyektin içində olan məlumatları götürən və keylərini dəyişən funksiya yazın .

// const ob ={

//   tevellud : {
//      il1:1998,
//      il2 : 1995
//   }

// }

// function funk(a) {
//   let {il1:f, il2:d} = a.tevellud


//   console.log('yeni key ' + f);
//   console.log('yeni key ' + d);

// }
// funk(ob)



//...Bir object yaradın və onu başqa bir object-ə kopyalayın. Əsas objecti deyişib copy olan objecti olduğu kimi saxlayın. (Funksiya ilə yazin)




// const ob = {
//   ad: 'aygun',
//   soyad: 'xudu'
// }

// function funk(ob1) {
//   const ob2 = {...ob1}
//     ob1.ad = 'xidir'
//  console.log(ob1);
//  console.log(ob2);


// }
// funk(ob)


//... Bir obyekt yaradın və spread operator istifadə edərək bir neçə key-i silin. Sonra yeni obyekti konsola çap edin ki, silinmiş key-lərin olmadığını yoxlasın. (Funksiya ilə yazin)

// const oby = {
//     ad: 'aygun',
//     soyad: 'xuduyeva'
// }
// function nam(o) {

//     const oby2 = {...o}
//     delete o.ad
//     console.log(o);
//     console.log(oby2);
// }
// nam(oby)
