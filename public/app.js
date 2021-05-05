const scrollWrap = document.querySelector("#scroll-wrap")
const menu = document.querySelector("#menu")


window.addEventListener("load", function (event) {
    console.log("Toutes les ressources sont chargées !");
});

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
let img1, img2, desc1, desc2,cat, title, color, indexProject, indexCat, listProject = [], listCat = []
requestProjects().then(response => {
    console.log(response.data)
    dataProjects = response.data


    for (let i = 0; i < dataProjects.length; i++) {
        indexProject = 0, indexCat = 0, img1 = 0, desc1 = 0, img2 = 0, desc2 = 0, title = 0, color = 0,cat=0;
        for (let j = 0; j < dataProjects[i].tags.length; j++) {
            if (dataProjects[i].tags[j].indexOf("project") !== -1) {
                nbProject++
                indexProject = dataProjects[i].tags[j].substring(dataProjects[i].tags[j].indexOf("project") + 7, dataProjects[i].tags[j].indexOf("project") + 8)
                if (!listProject[indexProject]) {
                    listProject[indexProject] = new Object();
                }


                console.log(indexProject)

                if (img1 !== 0) {
                    console.log("img1 : " + img1)
                    listProject[indexProject].cat = cat
                    listProject[indexProject].img1 = img1
                    listProject[indexProject].color = color
                    listProject[indexProject].title = title
                    listProject[indexProject].desc1 = desc1
                } else if (img2 !== 0) {
                    listProject[indexProject].img2 = img2
                    listProject[indexProject].desc2 = desc2
                }
            }
            if (dataProjects[i].tags[j].indexOf("image") !== -1) {
                if (dataProjects[i].tags[j].indexOf("image1") !== -1) {
                    if (indexProject !== 0) {
                        listProject[indexProject].cat = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$cat") + 5, dataProjects[i].description.indexOf("!cat"))
                        listProject[indexProject].color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"))
                        listProject[indexProject].title = dataProjects[i].title.replaceAll("_", " ")
                        listProject[indexProject].img1 = dataProjects[i].images.hidpi
                        listProject[indexProject].desc1 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))
                    } else {
                        cat = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$cat") + 5, dataProjects[i].description.indexOf("!cat"))
                        img1 = dataProjects[i].images.hidpi
                        color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"))
                        title = dataProjects[i].title.replaceAll("_", " ")
                        desc1 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))

                    }
                } else {
                    if (indexProject !== 0) {
                        listProject[indexProject].img2 = dataProjects[i].images.hidpi
                        listProject[indexProject].desc2 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))

                    } else {
                        img2 = dataProjects[i].images.hidpi
                        desc2 = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$desc") + 6, dataProjects[i].description.indexOf("!desc"))
                    }
                }
            }

            if (dataProjects[i].tags[j].indexOf("categorie") !== -1) {
                indexCat = dataProjects[i].tags[j].substring(dataProjects[i].tags[j].indexOf("categorie") + 9, dataProjects[i].tags[j].indexOf("categorie") + 10)
                listCat[indexCat] = new Object()
                listCat[indexCat].color = dataProjects[i].description.substring(dataProjects[i].description.indexOf("$color") + 7, dataProjects[i].description.indexOf("!color"));
                listCat[indexCat].name = dataProjects[i].title.replaceAll("_", " ");
                listCat[indexCat].img = dataProjects[i].images.hidpi
                nbCat++
            }
        }
    }
    console.log(listProject)
    console.log(nbProject)
    console.log(listCat)

    nbProject = (nbProject+1) / 2
})
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
    dataUser = response.data
})
window.addEventListener("scroll", () => {
    scrollWrap.style.transform = `translateY(${-window.scrollY}px)`
})

let pointer = document.querySelector("#pointer");

window.addEventListener("load", () => {
//pointer
    document.addEventListener('mousemove', logKey);
    document.addEventListener('mouseover', mouseIn)
    document.addEventListener('mouseout', mouseout)
    setTimeout(() => {
        let alla = document.querySelectorAll("a, .button, button");

        alla.forEach(a => {
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
