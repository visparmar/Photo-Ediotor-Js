let choose_img = document.querySelector(".btn");
let choose_input = document.querySelector(".choose-image input");
let imgSrc = document.querySelector(".your-photo-here img");
let filter = document.querySelectorAll(".icon-container button");
console.log(filter)

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
        if (element.id === "brightness") {
            console.log("yes its a brightness")
        }
        else if (element.id === "contrast") {
            console.log("yes its a contrast")
        }
        else if (element.id === "saturate") {
            console.log("yes its a saturate")
        }
        else if (element.id === "invert") {
            console.log("yes its a invert")
        } else if (element.id === "blur") {
            console.log("yes its a blur")
        }

    })

})



