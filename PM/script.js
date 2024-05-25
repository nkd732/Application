btns = document.querySelectorAll('button');
quantityInput = document.getElementById('quantity');    

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        if(e.target.className == 'plus'){
            let quantity = e.target.previousElementSibling;
            quantity.value = parseInt(quantity.value) + 1;
            quantityInput = quantity.value;                     
        }
        if(e.target.className == 'minus'){
            let quantity = e.target.nextElementSibling;
            quantity.value = parseInt(quantity.value) - 1;
            if (quantity.value <= 0){
                quantity.value = 0;
            }
            quantityInput = quantity.value;
        };
        });

});

let displayimag = document.querySelector('.image-bg');
let imgs = document.querySelectorAll('.image-box input');
imgs.forEach(function (img){
    img.addEventListener('click',function(e){
        displayimag.style.backgroundImage = window.getComputedStyle(e.target).backgroundImage;
    });
    
});

// myFunction(){
//     let time = 
    
// }





