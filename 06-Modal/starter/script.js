'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnsOpenModal = document.querySelectorAll('.show-modal');

 console.log('show modal btn: ', btnsOpenModal);
 
 for (let i=0; i<btnsOpenModal.length; i++) {
     btnsOpenModal[i].addEventListener('click', function() {
         console.log(`Button ${i+1} Clicked`); 
         openModal()
     });
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

function openModal () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// key down, key press (constant), or key up (lift)
// e stands for event
document.addEventListener('keydown', function (e) {
    // whichever key pressed is the event
     console.log('e: ', e.key);

     if (e.key === 'Escape') {
         if (!modal.classList.contains('hidden')) { // prevents unnecessary firing of function?? 
             closeModal()
         }
     }
})