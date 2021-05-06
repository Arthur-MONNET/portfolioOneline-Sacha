const scrollWrap = document.querySelector("#scroll-wrap")
const menu = document.querySelector("#menu")


//request post dribbble data in /getProject
const requestProjects = async () => {
    const response = await axios.get(`./getProject`)
    try {
        return response
    } catch (err) {
        console.log(err)
    }
}
let dataProjects;
let nbProject = 0
let nbCat = 0
let img1, img2, desc1, desc2,synt ,logi, cat, title, color, indexProject, indexCat, listProject = [], listCat = []
requestProjects().then(response => {
    //recovery data post dribbble
    dataProjects = response.data

    //for each post dribble tag
    for (let i = 0; i < dataProjects.length; i++) {
        indexProject = 0, indexCat = 0, img1 = 0, desc1 = 0, img2 = 0, desc2 = 0,synt=0,logi = 0, title = 0, color = 0,cat=0;
        for (let j = 0; j < dataProjects[i].tags.length; j++) {

            //if post dribble is project
            if (dataProjects[i].tags[j].indexOf("project") !== -1) {
                nbProject++
                //recovery index of project
                indexProject = dataProjects[i].tags[j].substring(dataProjects[i].tags[j].indexOf("project") + 7, dataProjects[i].tags[j].indexOf("project") + 8)
                if (!listProject[indexProject]) {
                    listProject[indexProject] = new Object();
                }


                console.log(indexProject)
                //if the data are already recovered then put them in the tab object
                if (img1 !== 0) {
                    console.log("img1 : " + img1)
                    listProject[indexProject].logi = logi
                    listProject[indexProject].cat = cat

                    listProject[indexProject].synt = synt
                    listProject[indexProject].img1 = img1
                    listProject[indexProject].color = color
                    listProject[indexProject].title = title
                    listProject[indexProject].desc1 = desc1
                } else if (img2 !== 0) {
                    listProject[indexProject].img2 = img2
                    listProject[indexProject].desc2 = desc2
                }
            }
            //if post dribble is project
            if (dataProjects[i].tags[j].indexOf("image") !== -1) {
                if (dataProjects[i].tags[j].indexOf("image1") !== -1) {
                    //if indexProject is already recovery put data inside
                    if (indexProject !== 0) {
                        listProject[indexProject].logi = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$log") + 5, dataProjects[i].description.indexOf("!log"))
                        listProject[indexProject].cat = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$cat") + 5, dataProjects[i].description.indexOf("!cat"))
                        listProject[indexProject].color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"))
                        listProject[indexProject].title = dataProjects[i].title.replaceAll("_", " ")
                        listProject[indexProject].img1 = dataProjects[i].images.hidpi
                        listProject[indexProject].synt = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$synt") + 6, dataProjects[i].description.indexOf("!synt"))
                        listProject[indexProject].desc1 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))


                    //else stock them in var
                    } else {
                        logi = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$log") + 5, dataProjects[i].description.indexOf("!log"))
                        synt = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$synt") + 6, dataProjects[i].description.indexOf("!synt"))
                        cat = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$cat") + 5, dataProjects[i].description.indexOf("!cat"))
                        img1 = dataProjects[i].images.hidpi
                        color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"))
                        title = dataProjects[i].title.replaceAll("_", " ")
                        desc1 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))

                    }
                } else {
                    //if indexProject is already recovery put data inside
                    if (indexProject !== 0) {
                        listProject[indexProject].img2 = dataProjects[i].images.hidpi
                        listProject[indexProject].desc2 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))


                    //else stock them in var
                    } else {
                        img2 = dataProjects[i].images.hidpi
                        desc2 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))
                    }
                }
            }

            //if post dribble is category
            if (dataProjects[i].tags[j].indexOf("categorie") !== -1) {
                //recovery index of category
                indexCat = dataProjects[i].tags[j].substring(dataProjects[i].tags[j].indexOf("categorie") + 9, dataProjects[i].tags[j].indexOf("categorie") + 10)

                //put data from object in listCat
                listCat[indexCat] = new Object()
                listCat[indexCat].color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"));
                listCat[indexCat].name = dataProjects[i].title.replaceAll("_", " ");
                listCat[indexCat].img = dataProjects[i].images.hidpi
                nbCat++
            }
        }
    }
    //nbProject/2 because 2 post by project
    nbProject = (nbProject+1) / 2
})


//request user dribbble data in /getUser
const requestUser = async () => {
    const response = await axios.get(`./getUser`)
    try {
        return response
    } catch (err) {
        console.log(err)
    }
}
let dataUser;
requestUser().then(response => {
    console.log(response.data)
    //recovery data user dribbble
    dataUser = response.data
})


//when scroll
window.addEventListener("scroll", () => {
    //move scroll-wrapper with transition
    scrollWrap.style.transform = `translateY(${-window.scrollY}px)`
})

let pointer = document.querySelector("#pointer");


//if load
window.addEventListener("load", () => {
    //call function to move pointer when mouse move
    document.addEventListener('mousemove', logKey);

    //display pointer
    document.addEventListener('mouseover', mouseIn)
    //hide pointer
    document.addEventListener('mouseout', mouseout)
    setTimeout(() => {
        //after load all content(1.1s)
        let alla = document.querySelectorAll("a, .button, button");
        alla.forEach(a => {
            //for each element select, capt mouseover or not
            a.addEventListener('mouseover', logKeyOver);
            a.addEventListener('mouseout', logKeyNoOver);
        })


    }, 1100)

})

function logKey(e) {
    pointer.style.top = `${e.clientY - 6}px`;
    pointer.style.left = `${e.clientX - 6}px`;
}

function logKeyOver(e) {
    pointer.style.transform = `scale(2)`;
    pointer.style.background = "#00000000";
}

function logKeyNoOver(e) {
    pointer.style.transform = `scale(1)`;
    pointer.style.background = "#000000";
}

function mouseout(e) {
    pointer.style.display = `none`;
}

function mouseIn(e) {
    pointer.style.display = `block`;
}
