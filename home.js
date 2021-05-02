const textTitle = document.querySelector("#textTitle")
const arrows = document.querySelector("#arrows")
const linkCreation = document.querySelector("#linkCreations")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
let numSlide = 1
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 80) {
        menu.style.color = "black"

        document.querySelectorAll(".cls-1").forEach(logoSvg=>{
        logoSvg.style = "fill:#000"
        })
    } else {
        menu.style.color = "white"
        document.querySelectorAll(".cls-1").forEach(logoSvg=>{
            logoSvg.style = "fill:#fff"
        })
    }
})
window.addEventListener("load", () => {
    setTimeout(()=>{
        changeSlide(numSlide,0)
    },1000)
})

function changeSlide(num,mov){
    if (mov!==0){
        
    }
    textTitle.innerHTML =""

    for (let i = 0; i < listProject[num].title.length; i++) {
        if (listProject[num].title.substring(i,i+1)==="_"){
            textTitle.innerHTML += `<div class="spaceTitle"></div>`
        }else{
            textTitle.innerHTML +=`<h2>${listProject[num].title.substring(i,i+1).toUpperCase()}</h2>`
        }
    }

    arrows.style = `color : ${listProject[num].color}aa`
    document.querySelector("#imgSlide").src = listProject[num].img1
    document.querySelector("#descProject").innerHTML = listProject[num].desc1
    linkCreation.addEventListener("mouseover", () => {
        linkCreation.style = `border: ${listProject[num].color}00 solid 3px; background: ${listProject[num].color}99; color : white`
    })
    linkCreation.addEventListener("mouseout", () => {
        linkCreation.style = `border: ${listProject[num].color}99 solid 3px`
    })
    linkCreation.style = `border: ${listProject[num].color}99 solid 3px`
    document.querySelector("#decoSlide").style = `background : ${listProject[num].color}`
}

arrowLeft.addEventListener("click", ()=> {
    numSlide--
    if (numSlide<1){
        numSlide = nbProject
    }
    changeSlide(numSlide,-1)
})
arrowRight.addEventListener("click", ()=> {
    numSlide++
    if (numSlide>nbProject){
        numSlide = 1
    }
    console.log(numSlide)
    changeSlide(numSlide,1)
})



