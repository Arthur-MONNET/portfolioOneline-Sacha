
const titleProject = document.querySelector("#titleProject h3")
const text1 = document.querySelector("#text1 p")
const image1 = document.querySelector("#img1")
const text2 = document.querySelector("#text2 p")
const image2 = document.querySelector("#img2")
let params = (new URL(document.location)).searchParams;
let projectIndex = parseInt(params.get('project'))

window.addEventListener("load", () => {

    setTimeout(()=>{

        titleProject.innerHTML = listProject[projectIndex].title
        image1.src = listProject[projectIndex].img1
        text1.innerHTML= listProject[projectIndex].desc1
        image2.src = listProject[projectIndex].img2
        text2.innerHTML= listProject[projectIndex].desc2
        setTimeout(()=>{
        image2.style= `height : ${image2.offsetHeight*7/9}px`
        document.querySelector("body").style= `height: calc(95vh + 70vh + ${image2.offsetHeight}px)`
        },100)
    },1000)

})