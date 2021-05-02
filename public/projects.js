const listProjectsWrapper = document.querySelector("#listProjects")
let order = "row"
let numProject = 1;
let numProjectWritten = "01."
let orderText = "";
window.addEventListener("load", () => {
    setTimeout(()=>{
        const body = document.querySelector("body")
        body.style.height = `calc(40vh + 100px + ${50 * nbProject}vh`
        console.log(nbProject)
        for (let i = 1; i < nbProject+1; i++) {
            console.log(numProject);
            if (numProject < 10) {
                numProjectWritten = `0${numProject}.`
            } else {
                numProjectWritten = `${numProject}.`
            }
            listProjectsWrapper.innerHTML += `<div class="projects" style="flex-direction: ${order}; justify-content: flex-start">
            <a href="project.html?project=${i}"><img src="${listProject[i].img1}" class="imageProjects"></a>
            <div class="numProject"><div class="lineProject" style="background: ${listProject[i].color}99"></div><h2>${numProjectWritten}</h2></div>
            <div class="textProject"><a href="project.html?project=${i}"><h3 ${orderText}>${listProject[i].title}</h3></a></div>
        </div>`

            numProject++;
            if (order === "row") {
                order = "row-reverse", orderText = `style = "text-align : end"`
            } else {
                order = "row", orderText = ""
            }
        }
    },1000)



})

