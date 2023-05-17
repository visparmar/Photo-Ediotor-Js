let choose_img = document.querySelector(".btn");
let choose_input = document.querySelector(".choose-image input");
let imgSrc = document.querySelector(".your-photo-here img");
let filter = document.querySelectorAll(".icon-container button");
let slider_info_name= document.querySelector(".name")
let slider_info_value= document.querySelector(".value")
let slider=document.querySelector(".slider input");

let brightness =100 , contrast =100 ,saturate=100 ,opacity=100,blurx=0;

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
    console.log(brightness,contrast,opacity,saturate,blurx)
    
})


