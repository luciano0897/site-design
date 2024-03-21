
const sliders = document.querySelector('.sliders');
const pointers = document.querySelector('.pointer');
const pointers1 = document.querySelector('.pointer1')
const pointers2 = document.querySelector('.pointer2')
const slider = () =>{
    
   
    if (sliders.style.marginLeft === '0' &&  pointers.style.backgroundColor =='#b28756'){ 
    sliders.style.marginLeft="-100vw";
    pointers.style.backgroundColor ='#b28756';

}else if ( sliders.style.marginLeft === "-100vw"  &&  pointers.style.backgroundColor =='red'){
    sliders.style.marginLeft = "-200vw";
    pointers1.style.backgroundColor ='green';
    pointers.style.backgroundColor ='##b28756';
    pointers2.style.backgroundColor ='#b28756';


} else if (sliders.style.marginLeft ==="-200vw"  &&  pointers1.style.backgroundColor =='green'){
    sliders.style.marginLeft = '0';
    pointers2.style.backgroundColor ='yellow';
    pointers1.style.backgroundColor ='#b28756';
    pointers.style.backgroundColor ='##b28756';
    
}else{
    sliders.style.marginLeft="-100vw";
    pointers.style.backgroundColor ='red';
    pointers1.style.backgroundColor ='##b28756';
    pointers2.style.backgroundColor ='#0#b28756';

   
}
}

document.querySelector('.sliders-pointers').addEventListener('click', slider);