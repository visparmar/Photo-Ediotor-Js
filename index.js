let choose_img = document.querySelector(".btn");
let choose_input = document.querySelector(".choose-image input");
let imgSrc = document.querySelector(".your-photo-here img");
let filter = document.querySelectorAll(".icon-container button");
let slider_info_name= document.querySelector(".name")
let slider_info_value= document.querySelector(".value")
let slider=document.querySelector(".slider input");
let rotate_flip=document.querySelectorAll(".icon-container2 img");

let brightness =100 , contrast =100 ,saturate=100 ,opacity=100,blurx=0;
let degree=0;
let toggle=0,toggle_up=0;

choose_img.addEventListener('click', () => {
    choose_input.click()


})
choose_input.addEventListener('change', () => {
    let file = choose_input.files[0]
    if (!file) return;
    imgSrc.src = URL.createObjectURL(file);

    // make it undisabe after choosing image
    // for this we have two option

    // imgSrc.addEventListener("load",()=>{
    //     document.querySelector('.container').classList.remove("disabled"); 
    // })

    // or

    if (imgSrc) {
        document.querySelector('.container').classList.remove("disabled");
    }
})

filter.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('.active').classList.remove("active");
        element.classList.add("active")
        slider_info_name.innerHTML=element.title
        if (element.id === "brightness") {
            slider.max="200"
             slider.value=brightness;
            slider_info_value.innerHTML=`${brightness}%`
            
            
        }
        else if (element.id === "contrast") {
            slider.max="200"
            slider.value=contrast;
            slider_info_value.innerHTML=`${contrast}%`
            
        }
        else if (element.id === "saturate") {
            slider.max="200"
            slider.value=saturate;
            slider_info_value.innerHTML=`${saturate}%`
        
        }
        else if (element.id === "opacity") {
            slider.max="200"
            slider.value=opacity;
            slider_info_value.innerHTML=`${opacity}%`
            
            
        } else if (element.id === "blur") {
            
            slider.max="100"
           slider.value=blurx;
            slider_info_value.innerHTML=`${blurx}%`

            
        }

    })

})
console.log(rotate_flip)
rotate_flip.forEach((element)=>{
    console.log(element);
    element.addEventListener('click',()=>{
        if(element.id==='rotate_right'){
            if(degree===360){
                degree=20;
            }
            // console.log(element.id)
            degree=degree+20;
            // console.log(degree)
            
        }
        else if(element.id==='rotate_left'){

            if(degree==-360){
                degree=-20
            }
            // console.log(neg_deg)
            degree=degree+(-20);
            // console.log(degree)
            

        }
        else if(element.id==='flip_right'){
            if(toggle===0){
                imgSrc.style.transform= 'scaleX(-1)'
                toggle=1;
            }else{
                imgSrc.style.transform= ''
                toggle=0;
            }
            
        }

        else if(element.id==='flip_up'){
if(toggle===0){
                imgSrc.style.transform= 'scaleY(-1)'
                toggle=1;
            }else{
                imgSrc.style.transform= ''
                toggle=0;
            }
        }

        imgSrc.style.rotate=`${degree}deg`;
    })

})


slider.addEventListener("input",()=>{
    slider_info_value.innerHTML=`${slider.value}%`
let slide_State=document.querySelector('.active');
    if(slide_State.id==='brightness'){
        brightness=slider.value
        
    }
    else if(slide_State.id==='contrast'){
        contrast=slider.value
    }
    else if(slide_State.id==='saturate'){
         saturate=slider.value
    }
    else if(slide_State.id==='opacity'){
        opacity=slider.value
   }
   else if(slide_State.id==='blur'){
    blurx=slider.value
}
    imgSrc.style.filter=`contrast(${brightness}%)  brightness(${contrast}%) saturate(${saturate}%) opacity(${opacity}%) blur(${blurx}px)`
    // console.log(brightness,contrast,opacity,saturate,blurx)
    
})


