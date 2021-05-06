const textTitle = document.querySelector("#textTitle")
const arrows = document.querySelector("#arrows")
const linkCreation = document.querySelector("#linkCreations")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
let numSlide = 1
let calcMove
const colors = document.querySelectorAll("#buttonsColor button")
colors.forEach(colorChoice => {
    colorChoice.addEventListener("click", () => {
        console.log(document.querySelector("#firstPage").style)
        document.querySelector("#firstPage").style = `background-color: ${colorChoice.style.backgroundColor}`
    })
})

window.addEventListener("scroll", () => {
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
window.addEventListener("load", () => {
    setTimeout(() => {
        for (let i = 0; i < nbCat; i++) {
            document.querySelector("#pointSlide").innerHTML += `<div class="point"></div>`
        }

        changeSlide(numSlide, 0)
    }, 1000)
})


function changeSlide(num, mov) {
    document.querySelector("#linkCreations").href = `projects.html?cat=0`
    document.querySelector("#pointSlide h3").innerHTML = num
    document.querySelector(`#pointSlide :nth-child(${num + 2})`).style = "background : white"
    console.log(num)
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////////////calc name ///////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    textTitle.innerHTML = ""
    textTitle.innerHTML = `<h2 style="display:none">${listCat[num].name.toUpperCase()}</h2>`
    console.log("width name : " + (document.querySelector("#textTitle h2").offsetWidth) + "   center of wrapper : " + window.innerWidth * (36 / 100))
    let sizeText = listCat[num].name.length
    console.log(document.querySelector("#textTitle h2").textContent.substring(0, 14).indexOf(" "))
    let indexS = 14
    if (sizeText > 14) {
        console.log(listCat[num].name.substring(0, 14) + "$")
        indexS = listCat[num].name.substring(0, 14).lastIndexOf(" ")
        textTitle.style = `height : 140px`
    } else {
        textTitle.style = `height : 70px`
    }
    console.log(indexS)
    textTitle.innerHTML = `<h2>${listCat[num].name.substring(0, indexS).toUpperCase()}</h2>`
    console.log(document.querySelector("#textTitle h2").offsetWidth / 2)
    let leftLetter = window.innerWidth * (31 / 100) - (document.querySelector("#textTitle h2").offsetWidth / 2)
    textTitle.innerHTML = ""

    /////////////////////////////////////////////////////////////////////////
    //////////////////////////////create name //////////////////////////////
    /////////////////////////////////////////////////////////////////////////

    for (let i = 0; i < listCat[num].name.length + 1; i++) {

        if (listCat[num].name.substring(i, i + 1) === " ") {
            textTitle.innerHTML += `<div class="spaceTitle"></div>`
            if (i === indexS) {
                textTitle.innerHTML += `<h2>${listCat[num].name.substring(indexS, listCat[num].name.length).toUpperCase()}</h2>`
                console.log(document.querySelector("#textTitle :last-child").offsetWidth / 2)
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
    if (mov === -1) {
        for (let i = listCat[numSlide].name.length; i > -1; i--) {
            setTimeout(() => {
                letters[letters.length - 1 - i].style = `left:${letters[letters.length - 1 - i].style.left};margin-top:${letters[letters.length - 1 - i].style.marginTop};opacity:1`
            }, 10 * i)
        }
    } else {
        for (let i = 0; i < listCat[numSlide].name.length; i++) {
            setTimeout(() => {
                letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};opacity:1`
            }, 10 * i)
        }
    }

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

arrowLeft.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = listCat[numSlide].name.length - 2; i > -1; i--) {
        setTimeout(() => {
            letters[letters.length - 1 - i].style = `left:${letters[letters.length - 1 - i].style.left};margin-top:${letters[letters.length - 1 - i].style.marginTop};margin-left :50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector(`#pointSlide :nth-child(${numSlide + 2})`).style = "background : black"
    numSlide--
    if (numSlide < 1) {
        numSlide = nbCat
    }
    console.log(numSlide)
    setTimeout(() => {
        changeSlide(numSlide, -1)
    }, 10 * nbLetters + 50)

})
arrowRight.addEventListener("click", () => {
    let letters = Array.from(document.querySelectorAll("#textTitle h2"))
    let nbLetters = 0;
    for (let i = 0; i < listCat[numSlide].name.length - 1; i++) {
        setTimeout(() => {
            letters[i].style = `left:${letters[i].style.left};margin-top:${letters[i].style.marginTop};margin-left :-50px;opacity:0`
        }, 10 * i)
        nbLetters++;
    }
    document.querySelector(`#pointSlide :nth-child(${numSlide + 2})`).style = "background : black"
    numSlide++
    if (numSlide > nbCat) {
        numSlide = 1
    }
    console.log(numSlide)
    setTimeout(() => {
        changeSlide(numSlide, 1)
    }, 10 * nbLetters + 50)
})



