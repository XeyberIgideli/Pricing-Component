const inputParent = document.querySelector('.switch');
const input = document.querySelector('.checkbox');
const price = document.querySelectorAll('.price');



inputParent.addEventListener('click', function() { 
   if(input.checked === true) {
        price.forEach(price => {
            price.classList.toggle('hidden-price');
        }) 
   }
})