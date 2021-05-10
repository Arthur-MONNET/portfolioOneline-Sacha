const textTitle = document.querySelector("#textTitle")
const arrows = document.querySelector("#arrows")
const linkCreation = document.querySelector("#linkCreations")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
let numSlide = 1
moveSlide = 1
const colors = document.querySelectorAll("#buttonsColor button")



//for each color button, if you click on it then you change the background color
colors.forEach(colorChoice => {
    colorChoice.addEventListener("click", () => {
        console.log(document.querySelector("#firstPage").style)
        document.querySelector("#firstPage").style = `background-color: ${colorChoice.style.backgroundColor}`
    })
})

//when user scroll
window.addEventListener("scroll", () => {
    //change color of nav when it's under first page
    if (window.scrollY > window.innerHeight - 80) {
        menu.style.color = "black"
        document.querySelector("#pointMenu").style = "background:#000"
        document.querySelector("#iconNav").style = "fill:#000"
    } else {
        menu.style.color = "white"
        document.querySelector("#pointMenu").style = "background:#fff"
        document.querySelector("#iconNav").style = "fill:#fff"
    }
})
//wait load
window.addEventListener("load", () => {
    //wait 1s for recovery of data dribbble
    setTimeout(() => {
        //creat point for each category
        for (let i = 0; i < nbCat; i++) {
            document.querySelector("#pointSlide").innerHTML += `<div class="point"></div>`
        }

        changeSlide(numSlide, 0)
    }, 1000)
})

//function that allows to slider to the left or to the right depending on the direction request
function changeSlide(num, mov) {
    document.querySelector("#linkCreations").href = `projects.html?cat=0`
    document.querySelector("#imgSlide").style = "opacity : 0"
    document.querySelector("#pointSlide h3").innerHTML = num
    document.querySelector(`#pointSlide :nth-child(${num + 2})`).style = "background : white"
    /////////////////////////////////////////////////////////////////////////
    ////////////////////calc length name of category//////////////////////////
    /////////////////////////////////////////////////////////////////////////
    textTitle.innerHTML = ""
    textTitle.innerHTML = `<h2 style="display:none">${listCat[num].name.toUpperCase()}</h2>`
    let sizeText = listCat[num].name.length
    let indexS = 14
    //creat function returns to the line
    if (sizeText > 14) {
        indexS = listCat[num].name.substring(0, 14).lastIndexOf(" ")
        textTitle.style = `height : 140px`
    } else {
        textTitle.style = `height : 70px`
    }
    textTitle.innerHTML = `<h2>${listCat[num].name.substring(0, indexS).toUpperCase()}</h2>`
    let leftLetter = window.innerWidth * (31 / 100) - (document.querySelector("#textTitle h2").offsetWidth / 2)
    textTitle.innerHTML = ""

    /////////////////////////////////////////////////////////////////////////
    //////////////////////creat name of category/////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    //for each letter
    for (let i = 0; i < listCat[num].name.length + 1; i++) {
        //if character = space
        if (listCat[num].name.substring(i, i + 1) === " ") {
            textTitle.innerHTML += `<div class="spaceTitle"></div>`
            //returns to the line
            if (i === indexS) {
                textTitle.innerHTML += `<h2>${listCat[num].name.substring(indexS, listCat[num].name.length).toUpperCase()}</h2>`
                leftLetter = window.innerWidth * (31 / 100) - (document.querySelector("#textTitle :last-child").offsetWidth / 2)
                document.querySelector("#textTitle :last-child").classList.add("none")
            } else {
                leftLetter += document.querySelector("#textTitle :last-child").offsetWidth
            }
        } else {
            textTitle.innerHTML += `<h2>${listCat[num].name.substring(i, i + 1).toUpperCase()}</h2>`
            if (i > indexS) {
                document.querySelector("#textTitle :last-child").style = `left: ${leftLetter}px;opacity:0;margin-left :${50 * mov}px;margin-top: 70px;`
            } else {
                document.querySelector("#textTitle :last-child").style = `left: ${leftLetter}px;opacity:0;margin-left :${50 * mov}px;`
            }
            leftLetter += document.querySelector("#textTitle :last-child").offsetWidth
        }

    }

    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    document.querySelector("#imgSlide").style = "opacity : 1"

    //anim swipe left
    if (mov === -1) {
        for (let i = listCat[numSlide].name.length; i > -1; i--) {
            //for each letter the animation is done with a little more delay
            setTimeout(() => {
                letters[letters.length - 1 - i].style = `left:${letters[letters.length - 1 - i].style.left};margin-top:${letters[letters.length - 1 - i].style.marginTop};opacity:1`
            }, 10 * i)


        }
    //anim swipe right
    } else {
        for (let i = 0; i < listCat[numSlide].name.length; i++) {
            //for each letter the animation is done with a little more delay
            setTimeout(() => {
                letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};opacity:1`
            }, 10 * i)
        }
    }

    //add data dribbble in arrows
    arrows.style = `color : ${listCat[num].color}`
    document.querySelector("#imgSlide").src = listCat[num].img
    linkCreation.addEventListener("mouseover", () => {
        linkCreation.style = `border: ${listCat[num].color}00 solid 3px; background: ${listCat[num].color}cc; color : white`
    })
    linkCreation.addEventListener("mouseout", () => {
        linkCreation.style = `border: ${listCat[num].color}99 solid 3px`
    })
    linkCreation.style = `border: ${listCat[num].color}99 solid 3px`
    document.querySelector("#decoSlide").style = `background : ${listCat[num].color}`
}



//if user clicks on the left arrow
arrowLeft.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = listCat[numSlide].name.length - 2; i > -1; i--) {
        //for each letter the animation is done with a little more delay
        setTimeout(() => {
            letters[letters.length - 1 - i].style = `left:${letters[letters.length - 1 - i].style.left};margin-top:${letters[letters.length - 1 - i].style.marginTop};margin-left :50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector(`#pointSlide :nth-child(${numSlide + 2})`).style = "background : black"
    document.querySelector("#imgSlide").style = "opacity : 0"
    numSlide--
    moveSlide = -1
    if (numSlide < 1) {
        numSlide = nbCat
    }
    console.log(numSlide)
    //change slide after text anim
    setTimeout(() => {
        changeSlide(numSlide, moveSlide)
    }, 200)

})



//if user clicks on the right arrow
arrowRight.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = 0; i < listCat[numSlide].name.length - 1; i++) {
        setTimeout(() => {
            //for each letter the animation is done with a little more delay
            letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};margin-left :-50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector(`#pointSlide :nth-child(${numSlide + 2})`).style = "background : black"
    document.querySelector("#imgSlide").style = "opacity : 0"
    numSlide++
    moveSlide = 1
    if (numSlide > nbCat) {
        numSlide = 1
    }
    console.log(numSlide)
    //change slide after text anim
    setTimeout(() => {
        changeSlide(numSlide, moveSlide)
    }, 200)
})

window.addEventListener("resize", ()=>{
    changeSlide(numSlide, moveSlide)
})



