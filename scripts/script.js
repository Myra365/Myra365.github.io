const x = document.getElementsByClassName('cat');
let len = x.length;

let counter = 0;


function slideShow(){
    for(let i = 0; i < len; i++ ){
   
        x[i].style.display = 'none';
    }

    counter++ 

    if(counter > len){
        counter = 1;
    }

    x[counter - 1].style.display = 'block';



    setTimeout(slideShow, 2000);

}

slideShow();

