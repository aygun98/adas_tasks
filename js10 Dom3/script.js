    //  <!-- Accordion menu yazın. -->
    // const accardion = document.querySelector('.accardion-basliq')
    // const hoverAccardion = document.querySelector('.hover-accardion')
    // const arrow = document.querySelector('.fa-caret-up')
    // console.log(hoverAccardion);

    // accardion.addEventListener('click', (e)=>{
    //     console.log(e.target);
    //     hoverAccardion.classList.toggle('active')
    //     arrow.classList.toggle('aktive')
    // })


    //                 <!-- Custom (fərdi) select-option yazın. --> 

    // const boxes = document.querySelectorAll('.box')
    // console.log(boxes);

    // boxes.forEach((box, ind1) => {

    //     box.addEventListener('click', (e) => {

           
    //         const kliklediyimElement = e.target
    //         if (kliklediyimElement.classList.contains('basliq')) {
    //             kliklediyimElement.nextElementSibling.classList.toggle('active')
                
    //         }
           
    //         boxes.forEach((box2, ind2) => {
    //             const movzu = box2.querySelector('.movzu')
    //             console.log(movzu);
    //              if (ind1 != ind2) {
    //                 movzu.classList.remove('active')
    //              }
    //         })
    //     })

    // })



        //   <!-- Custom (fərdi) Slider yazın.  -->

const  slides =  document.querySelectorAll('.slide')
const evvel = document.querySelector('.evvel')
const sonra = document.querySelector('.sonra')
const sayi =slides.length
console.log(sayi);
let count = 0


slides.forEach((slide, index)=>{
    slide.style.left = ` ${index * 100}%`
})

evvel.addEventListener('click',()=>{
 
    count = Math.max(count - 1, 0);
    
    sliderImg()
})
sonra.addEventListener('click',()=>{

   
    count = Math.min(count + 1, sayi - 1);
   
    sliderImg()
})



const sliderImg =()=>{
    slides.forEach((slide)=>{

    
    slide.style.transform = `translateX(-${count * 100}%)` 

    })
}