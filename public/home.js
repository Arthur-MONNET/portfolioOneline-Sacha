const textTitle = document.querySelector("#textTitle")
const arrows = document.querySelector("#arrows")
const linkCreation = document.querySelector("#linkCreations")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
let numSlide = 1
let calcMove
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 80) {
        menu.style.color = "black"

        document.querySelectorAll(".cls-1").forEach(logoSvg => {
            logoSvg.style = "fill:#000"
        })
    } else {
        menu.style.color = "white"
        document.querySelectorAll(".cls-1").forEach(logoSvg => {
            logoSvg.style = "fill:#fff"
        })
    }
})
window.addEventListener("load", () => {
    setTimeout(() => {
        changeSlide(numSlide, 0)
    }, 1000)
})


function changeSlide(num, mov) {
    console.log(num)
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////////////calc title ///////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    textTitle.innerHTML = ""
    textTitle.innerHTML = `<h2 style="display:none">${listProject[num].title.toUpperCase()}</h2>`
    console.log("width title : " + (document.querySelector("#textTitle h2").offsetWidth) + "   center of wrapper : " + window.innerWidth * (36 / 100))
    let sizeText = listProject[num].title.length
    console.log(document.querySelector("#textTitle h2").textContent.substring(0, 14).indexOf(" "))
    let indexS = 14
    if (sizeText > 14) {
        console.log(listProject[num].title.substring(0, 14)+"$")
        indexS = listProject[num].title.substring(0, 14).lastIndexOf(" ")
        textTitle.style=`height : 140px`
    }else{
        textTitle.style=`height : 70px`
    }
    console.log(indexS)
    textTitle.innerHTML = `<h2>${listProject[num].title.substring(0, indexS).toUpperCase()}</h2>`
    console.log(document.querySelector("#textTitle h2").offsetWidth / 2)
    let leftLetter = window.innerWidth * (26 / 100) - (document.querySelector("#textTitle h2").offsetWidth / 2)
    textTitle.innerHTML = ""

    /////////////////////////////////////////////////////////////////////////
    //////////////////////////////create title //////////////////////////////
    /////////////////////////////////////////////////////////////////////////

    for (let i = 0; i < listProject[num].title.length; i++) {

        if (listProject[num].title.substring(i, i + 1) === " ") {
            textTitle.innerHTML += `<div class="spaceTitle"></div>`
            if (i === indexS) {
                textTitle.innerHTML += `<h2>${listProject[num].title.substring(indexS,listProject[num].title.length).toUpperCase()}</h2>`
                console.log(document.querySelector("#textTitle :last-child").offsetWidth / 2)
                leftLetter = window.innerWidth * (26 / 100) - (document.querySelector("#textTitle :last-child").offsetWidth / 2)
                document.querySelector("#textTitle :last-child").classList.add("none")
            }else{
                leftLetter += document.querySelector("#textTitle :last-child").offsetWidth
            }
        } else {
            textTitle.innerHTML += `<h2>${listProject[num].title.substring(i, i + 1).toUpperCase()}</h2>`
            if (i > indexS) {
                document.querySelector("#textTitle :last-child").style = `left: ${leftLetter}px;opacity:0;margin-left :${50*mov}px;margin-top: 70px;`
            }else{
                document.querySelector("#textTitle :last-child").style = `left: ${leftLetter}px;opacity:0;margin-left :${50*mov}px;`
            }
            leftLetter += document.querySelector("#textTitle :last-child").offsetWidth
        }

    }

    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    if(mov===-1){
        for (let i = listProject[numSlide].title.length-2; i > -1; i--) {
            setTimeout(() => {
                letters[letters.length-1-i].style = `left:${letters[letters.length-1-i].style.left};margin-top:${letters[letters.length-1-i].style.marginTop};margin-left :0;opacity:1`
            }, 10 * i)
        }
    }else{
        for (let i = 0; i < listProject[numSlide].title.length - 1; i++) {
            setTimeout(() => {
                letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};margin-left :0;opacity:1`
            }, 10 * i)
        }
    }

    arrows.style = `color : ${listProject[num].color}aa`
    document.querySelector("#imgSlide").src = listProject[num].img1
    document.querySelector("#descProject").innerHTML = listProject[num].desc1
    document.querySelector("#descProject").style="opacity:1"
    linkCreation.addEventListener("mouseover", () => {
        linkCreation.style = `border: ${listProject[num].color}00 solid 3px; background: ${listProject[num].color}99; color : white`
    })
    linkCreation.addEventListener("mouseout", () => {
        linkCreation.style = `border: ${listProject[num].color}99 solid 3px`
    })
    linkCreation.style = `border: ${listProject[num].color}99 solid 3px`
    document.querySelector("#decoSlide").style = `background : ${listProject[num].color}`
}

arrowLeft.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = listProject[numSlide].title.length-2; i > -1; i--) {
        setTimeout(() => {
            letters[letters.length-1-i].style = `left:${letters[letters.length-1-i].style.left};margin-top:${letters[letters.length-1-i].style.marginTop};margin-left :50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector("#descProject").style="opacity:0"
    numSlide--
    if (numSlide <1) {
        numSlide =  nbProject
    }
    console.log(numSlide)
    setTimeout(() => {
        changeSlide(numSlide, -1)
    }, 10 * nbLetters+50)

})
arrowRight.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = 0; i < listProject[numSlide].title.length - 1; i++) {
        setTimeout(() => {
            letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};margin-left :-50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector("#descProject").style="opacity:0"
    numSlide++
    if (numSlide > nbProject) {
        numSlide = 1
    }
    console.log(numSlide)
    setTimeout(() => {
        changeSlide(numSlide, 1)
    }, 10 * nbLetters+50)
})



