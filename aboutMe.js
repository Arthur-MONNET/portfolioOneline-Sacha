const imgMe = document.querySelector("#imgMe")
const imgMeBack = document.querySelector("#imgMeBack")
const svg1 = document.querySelector("#svg1")
const svg2 = document.querySelector("#svg2")
const descMe = document.querySelector("#descMe pre")
document.addEventListener("mousemove", (e) => {
    imgMe.style = `bottom : calc(-10vh + (${e.clientY}px - 350px)/100); left : calc(100vw - 1650px + 60px + (${-e.clientX}px - 350px)/40);`
    imgMeBack.style = `bottom : calc(-20vh + (${e.clientY}px - 350px)/30); left : calc(100vw - 1650px - 60px + (${-e.clientX}px - 350px)/15)`
    svg1.style = `bottom : calc(5vh + (${e.clientY}px - 350px)/60); left : calc(100vw - 1650px + 50px + (${-e.clientX}px - 350px)/25)`
    svg2.style = `bottom : calc(35vh + (${e.clientY}px - 350px)/15); left : calc(100vw - 1650px + 500px + (${-e.clientX}px - 350px)/10)`
})
setTimeout(()=>{
    descMe.innerHTML=dataUser.bio
},1000)

