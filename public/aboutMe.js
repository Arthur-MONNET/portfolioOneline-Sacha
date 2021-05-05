const imgMe = document.querySelector("#imgMe")
const imgMeBack = document.querySelector("#imgMeBack")
const svg1 = document.querySelector("#svg1")
const svg2 = document.querySelector("#svg2")
const descMe = document.querySelector("#descMe pre")
setTimeout(()=>{
    descMe.innerHTML=dataUser.bio
},1000)

