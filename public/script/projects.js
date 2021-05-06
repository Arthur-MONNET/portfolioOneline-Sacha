const listProjectsWrapper = document.querySelector("#listProjects")
const body = document.querySelector("body")
let order = "row"
let orderOther = "0";
let numProject = 1;
let nbProjectCat;
let numProjectWritten = "01."
let orderText = "";
let params = (new URL(document.location)).searchParams;
let numCat = params.get('cat')



//wait load
window.addEventListener("load", () => {
    //wait 1s for recovery of data dribbble
    setTimeout(() => {

        //creat categories banner and display the selected category(font-weight : 600)
        document.querySelector("#cats").innerHTML += `<a href="../projects.html?cat=0">All</a>`
        if (0 === parseInt(numCat)) {
            document.querySelector("#cats :last-child").style = "font-weight : 600"
        }
        for (let i = 1; i <= nbCat; i++) {
            document.querySelector("#cats").innerHTML += `<p>|</p><a href="./projects.html?cat=${i}">${listCat[i].name}</a>`
            if (i === parseInt(numCat)) {
                document.querySelector("#cats :last-child").style = "font-weight : 600"
            }
        }

        //display list of projects
        for (let i = 1; i < nbProject + 1; i++) {
            console.log(listProject[i].cat)
            //if category = all
            if (parseInt(numCat) === 0) {
                //resize body according to nbProject
                body.style.height = `calc(40vh + 100px + ${60 * nbProject}vh`
                if (numProject < 10) {
                    numProjectWritten = `0${numProject}.`
                } else {
                    numProjectWritten = `${numProject}.`
                }
                //creation of project with data dribbble
                listProjectsWrapper.innerHTML += `<div class="projects" style="flex-direction: ${order}; justify-content: flex-start">
                <a href="project.html?project=${i}"><img src="${listProject[i].img1}" class="imageProjects"></a>
                <div class="spaceProject"></div>
                <div class="textProject" style="${orderOther}">
                    <a href="project.html?project=${i}"><h3 ${orderText}>${listProject[i].title}</h3></a>
                    <div class="underTextProject" style="flex-direction: ${order}">
                        <div class="numProject"><h2>${numProjectWritten}</h2></div>
                        <div class="descProject" style="align-items: ${orderOther}">
                            <div class="syntProject"><p ${orderText}>${listProject[i].synt}<br>${listProject[i].logi}</p></div>
                            <div class="lineProject"></div>
                        </div>
                    </div>
                </div>
            </div>`

                numProject++;
                //setting up the alternating position
                if (order === "row") {
                    order = "row-reverse", orderText = `style = "text-align : end"`,orderOther = "flex-end"
                } else {
                    order = "row", orderText = "" ,orderOther = "flex-start"
                }

                document.querySelector(".projects .imageProjects").style = "margin-top:0"
                setTimeout(() => {
                    //after creat project (wait 0.1s), setting up the element position before anim
                    document.querySelector(".projects .lineProject").style = "height:60%"
                    document.querySelector(".projects .numProject h2").style = "opacity:1;margin-bottom : 0"
                    if (document.querySelector(".projects").style.flexDirection === "row-reverse") {
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 135px;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 0px;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                    } else {
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : -135px;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 0;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                    }
                    document.querySelector(".syntProject").style = `opacity:1;`
                }, 100)



            } else if (numCat === listProject[i].cat) {
                nbProjectCat = 0;
                //calc the number of projects to display.
                for (let j = 1; j <= nbProject; j++) {
                    if (numCat === listProject[j].cat) {
                        nbProjectCat++

                    }
                }
                //resize body according to nbProjectCat
                body.style.height = `calc(40vh + 100px + ${60 * nbProjectCat}vh`
                if (numProject < 10) {
                    numProjectWritten = `0${numProject}.`
                } else {
                    numProjectWritten = `${numProject}.`
                }
                //creation of project with data dribbble
                listProjectsWrapper.innerHTML += `<div class="projects" style="flex-direction: ${order}; justify-content: flex-start">
                <a href="project.html?project=${i}"><img src="${listProject[i].img1}" class="imageProjects"></a>
                <div class="spaceProject"></div>
                <div class="textProject" style="${orderOther}">
                    <a href="project.html?project=${i}"><h3 ${orderText}>${listProject[i].title}</h3></a>
                    <div class="underTextProject" style="flex-direction: ${order}">
                        <div class="numProject"><h2>${numProjectWritten}</h2></div>
                        <div class="descProject" style="align-items: ${orderOther}">
                            <div class="syntProject"><p ${orderText}>${listProject[i].synt}<br>${listProject[i].logi}</p></div>
                            <div class="lineProject"></div>
                        </div>
                    </div>
                </div>
            </div>`

                numProject++;
                //setting up the alternating position
                if (order === "row") {
                    order = "row-reverse", orderText = `style = "text-align : end"`,orderOther = "flex-end"
                } else {
                    order = "row", orderText = "" ,orderOther = "flex-start"
                }
                document.querySelector(".projects .imageProjects").style = "margin-top:0"
                setTimeout(() => {
                    //after creat project (wait 0.1s), setting up the element position before anim
                    document.querySelector(".projects .lineProject").style = "width:8vw"
                    document.querySelector(".projects .numProject h2").style = "opacity:1;margin-bottom : 0"
                    if (document.querySelector(".projects").style.flexDirection === "row-reverse") {
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 135px;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 0px;text-align: ${document.querySelector(".projects h3").style.textAlign}`

                    } else {
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : -135px;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                        document.querySelector(".projects h3").style = `opacity:1;margin-left : 0;text-align: ${document.querySelector(".projects h3").style.textAlign}`
                    }
                    document.querySelector(".syntProject").style = `opacity:1;`
                }, 100)
            }

        }
    }, 1000)


})
//if user scroll
window.addEventListener("scroll", () => {
    let i = 0;
    let listSynt = Array.from(document.querySelector(".syntProject"))
    console.log(listSynt)
    //for each project
    document.querySelectorAll(`.projects`).forEach(project => {
        i++;



        //if the position of the project is under the scroll (so visible), start animation and placed correctly the elements
        if (window.scrollY + window.innerHeight > window.innerHeight * 3.5 / 10 + (window.innerHeight * 6 / 10) * i) {
            //anim img
            project.querySelector(".imageProjects").style = "margin-top:0"

            setTimeout(() => {
                //start anim of line and text after anim of img (0.1s)
                project.querySelector(".lineProject").style = "width:8vw"
                project.querySelector(".numProject h2").style = "opacity:1;margin-bottom : 0"
                project.querySelector(".syntProject").style = `opacity:1;`
                if (project.style.flexDirection === "row-reverse") {
                    project.querySelector(".textProject h3").style = `opacity:1;margin-left : 0;text-align: ${project.querySelector("h3").style.textAlign}`
                } else {
                    project.querySelector(".textProject h3").style = `opacity:1;margin-left : 0;text-align: ${project.querySelector("h3").style.textAlign}`
                }

            }, 100)




        //if the position of the project is upper the scroll (so invisible), start animation and hide elements
        } else {
            //anim img
            project.querySelector(".imageProjects").style = ""
            setTimeout(() => {
                //start anim of line and text after anim of img (0.1s)
                project.querySelector(".lineProject").style = ""
                project.querySelector(".numProject h2").style = ""
                project.querySelector(".syntProject").style = `opacity:0;`
                if (project.style.flexDirection === "row-reverse") {
                    project.querySelector(".textProject h3").style = `opacity:0;margin-left : 135px;text-align: ${project.querySelector("h3").style.textAlign}`
                } else {
                    project.querySelector(".textProject h3").style = `opacity:0;margin-left : -135px;text-align: ${project.querySelector("h3").style.textAlign}`
                }
            }, 100)
        }
    })
})

