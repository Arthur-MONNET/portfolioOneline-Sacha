const arrow = Array.from(document.querySelectorAll(".button"))
const titleProject = document.querySelector("#titleProject h3")
const text1 = document.querySelector("#text1 p")
const image1 = document.querySelector("#img1")
const text2 = document.querySelector("#text2 p")
const image2 = document.querySelector("#img2")
//recovery of var project from params in url
let params = (new URL(document.location)).searchParams;
let projectIndex = parseInt(params.get('project'))
//creation of link for arrows
let projectIndexN = projectIndex-1
let projectIndexP = projectIndex+1
//wait load
window.addEventListener("load", () => {
    //wait 1s for recovery of data dribbble
    setTimeout(()=>{
        //creation of link for arrows
        if (projectIndexN===0){
            projectIndexN = nbProject
        }
        if (projectIndexP>nbProject){
            projectIndexP = 1
        }
        //enter the dribble data in the html
        titleProject.innerHTML = listProject[projectIndex].title
        image1.src = listProject[projectIndex].img1
        text1.innerHTML= listProject[projectIndex].desc1
        image2.src = listProject[projectIndex].img2
        text2.innerHTML= listProject[projectIndex].desc2
        arrow[0].style=`color: ${listProject[projectIndex].color}`
        arrow[1].style=`color: ${listProject[projectIndex].color}`
        arrowLeft.href = `./project.html?project=${projectIndexN}`
        arrowRight.href = `./project.html?project=${projectIndexP}`
        //wait 0.1s for enter the dribble data in the html
        setTimeout(()=>{
        image2.style= `height : ${image2.offsetHeight*7/9}px`
        document.querySelector("body").style= `height: calc(95vh + 70vh + ${image2.offsetHeight}px)`
        },100)
    },1000)

})