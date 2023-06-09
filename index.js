let choose_img = document.querySelector(".btn");
let choose_input = document.querySelector(".choose-image input");
let imgSrc = document.querySelector(".your-photo-here img");
let filter = document.querySelectorAll(".icon-container button");
let slider_info_name= document.querySelector(".name")
let slider_info_value= document.querySelector(".value")
let slider=document.querySelector(".slider input");
let rotate_flip=document.querySelectorAll(".icon-container2 img");
let reset=document.querySelector(".button-container .reset")


let brightness =100 , contrast =100 ,saturate=100 ,opacity=100,blurx=0;
let degree=0;
var flipX=1,flipY=1;

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

reset.addEventListener('click',()=>{
    // console.log("reset")
     brightness =100 
      contrast =100 
      saturate=100 
      opacity=100
      blurx=0;
 degree=0;
flipX=1;
flipY=1;


 imgSrc.style.rotate=`${degree}deg`;
 imgSrc.style.transform= ''
 imgSrc.style.filter=`contrast(${brightness}%)  brightness(${contrast}%) saturate(${saturate}%) opacity(${opacity}%) blur(${blurx}px)`

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
// console.log(rotate_flip)
rotate_flip.forEach((element)=>{
    // console.log(element);
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
            flipX=flipX===1 ? -1 :1;
            
            
        }

        else if(element.id==='flip_up'){
            flipY=flipY===1 ? -1 :1;
        }

        imgSrc.style.transform=`rotate(${degree}deg)  scale(${flipX},${flipY})`;
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

document.querySelector(".save").addEventListener('click',()=>{
    let canvas=document.createElement("canvas");
    let ctx=canvas.getContext("2d");
    canvas.width=imgSrc.naturalWidth;
    canvas.height=imgSrc.naturalHeight;
    ctx.filter= imgSrc.style.filter=`contrast(${brightness}%)  brightness(${contrast}%) saturate(${saturate}%) opacity(${opacity}%) blur(${blurx}px)`
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.scale(flipX,flipY);
    
    ctx.rotate(degree* Math.PI/180);
    ctx.drawImage(
        imgSrc,
        -canvas.width/2,
        -canvas.height/2,
        canvas.width,
        canvas.height
    );

    const link=document.createElement("a")
    link.download="image.jpg"
    link.href=canvas.toDataURL();
    link.click();
})


