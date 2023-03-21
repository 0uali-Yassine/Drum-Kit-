let w_drum = new Audio('/sounds/crash.mp3');
let a_drum = new Audio('/sounds/kick-bass.mp3');
let s_drum = new Audio('/sounds/snare.mp3');
let d_drum = new Audio('/sounds/tom-1.mp3');
let j_drum = new Audio('/sounds/tom-2.mp3');
let k_drum = new Audio('/sounds/tom-3.mp3');
let l_drum = new Audio('/sounds/tom-4.mp3');

let big_div = document.querySelector('.set');
big_div.addEventListener('click',(e)=>{
    if(e.target.matches('.w')){
        w_drum.play()
    }else if(e.target.matches('.a')){
        a_drum.play()
    }else if(e.target.matches('.s')){
        s_drum.play()
    }else if(e.target.matches('.d')){
        d_drum.play()
    }if(e.target.matches('.j')){
        j_drum.play()
    }else if(e.target.matches('.k')){
        k_drum.play()
    }else if(e.target.matches('.l')){
        l_drum.play();
    }
})
