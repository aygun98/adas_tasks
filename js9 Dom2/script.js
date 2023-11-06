//.....Form yaradıb istifadəçi məlumatlarını obyekt şəklində götürən və console - da göstərən funksiya yazın.


// let ad = document.getElementById('ad')
// let soyad = document.getElementById('soyad')
// let email = document.getElementById('email')
// const form =  document.querySelector('form')
// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const melumatlar = {
//         ad:ad.value,
//         soyad:soyad.value,
//         email:email.value
//     }
//     console.log("ad: " , melumatlar.ad);
//     console.log("ad: " , melumatlar.soyad);
//     console.log("ad: " , melumatlar.email);

// })

//...Bir məhsul kartı yaradın və məhsulun sayını artırdıqca qiymətini artıran, azaltdıqda isə azaldan funksiya yazın.
const mehsullar = document.querySelectorAll('.mehsul');

const total = document.querySelector('.total');
mehsullar.forEach((mehsul, index) => {
    const qiymet = mehsul.querySelector('.qiymet');
    const elaveEt = mehsul.querySelector('.elaveEt');
    const elaveEtme = mehsul.querySelector('.elaveEtme');
    const eded = mehsul.querySelector('.eded');

    let num = 0;
    let say = 0;

    elaveEt.addEventListener('click', () => {
        num += +qiymet.innerHTML;
        total.innerHTML = num;
        say++;
        eded.innerHTML = say;
    });

    elaveEtme.addEventListener('click', () => {
        if (say > 0) {
            num -= +qiymet.innerHTML;
            total.innerHTML = num;
            say--;
            eded.innerHTML = say;
        }
    });
});
