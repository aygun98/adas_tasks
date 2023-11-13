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

    const boxes = document.querySelectorAll('.box')
    console.log(boxes);

    boxes.forEach((box, ind1) => {

        box.addEventListener('click', (e) => {

           
            const kliklediyimElement = e.target
            if (kliklediyimElement.classList.contains('basliq')) {
                kliklediyimElement.nextElementSibling.classList.toggle('active')
                
            }
           
            boxes.forEach((box2, ind2) => {
                const movzu = box2.querySelector('.movzu')
                console.log(movzu);
                 if (ind1 != ind2) {
                    movzu.classList.remove('active')
                 }
            })
        })

    })








    // for (let i = 0; i < basliq.length; i++) {


    //     basliq[i].addEventListener('click', (e) => {


    //         // const movzu = this
    //         console.log(this);

    //     })
    // }