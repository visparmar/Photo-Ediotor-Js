let choose_img=document.querySelector(".btn");
let choose_input=document.querySelector(".choose-image input");
let imgSrc=document.querySelector(".your-photo-here img");

choose_img.addEventListener('click',()=>{
choose_input.click()


})
choose_input.addEventListener('change',()=>{
    let file=choose_input.files[0]
    imgSrc.src=URL.createObjectURL(file);
})

