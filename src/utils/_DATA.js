let projects = {
    shopping: {
        projectId: "shopping",
        name: "Shopping Assistant",
        year: "2019",
        technologies: "React Native, Firebase",
        description:
            "A school project during which I had to develop a Shopping Assistant application. A prototype version is available for android",
        links: [
            {
                link: "https://shopping-assistant.app",
                caption: "Visit the website",
                active: true
            },
            {
                link: "https://play.google.com/store/apps",
                caption: "Google Play",
                active: false
            }
        ]
    },
    ecosystems: {
        projectId: "ecosystems",
        name: "Ecosystems",
        year: "2019",
        technologies: "React, ThreeJS",
        description:
            "A school project for the Artificial Intelligence Course. A 3D world generated from a seed in which you can interact thanks to various commands",
        links: [
            {
                link: "https://www.3d-ecosystems.com/",
                caption: "Visit the website",
                active: true
            },
            {
                link: "https://github.com/jmetterrothan/ecosystems",
                caption: "Github",
                active: true
            }
        ]
    },
    grdf: {
        projectId: "grdf",
        name: "GRDF - Internship",
        year: "2018",
        technologies: "Angular, Ionic",
        description:
            'A 3 months internship during which I worked on a mobile app, "Pros du Gaz ", developed with Ionic framework. This helped me to get better skills in terms of front-end development.',
        links: [
            {
                link:
                    "https://itunes.apple.com/nz/app/grdf-pros-du-gaz/id1440042196?mt=8",
                caption: "AppStore",
                active: true
            },
            {
                link:
                    "https://play.google.com/store/apps/details?id=fr.grdf.prosdugaz",
                caption: "Google Play",
                active: true
            }
        ]
    },
    mobilites: {
        projectId: "mobilites",
        name: "Mobilités Descartes",
        year: "2018",
        technologies: "Angular, Lumen (Laravel)",
        description:
            "A school project where we had to develop a carpooling web application for the students of the Campus Descartes (Université Paris-Est Marne-La-Vallée).",
        links: [
            {
                link: "https://mobilite-descartes.fr/",
                caption: "Visit the website",
                active: false
            }
        ]
    },
    life: {
        projectId: "life",
        name: "Life",
        year: "2018",
        technologies: "After Effects, Premiere Pro",
        description:
            'A title sequence for an eventual movie called "Life", for a school project. Made in association with Joris Oeuvray, we entirely produced the soundtrack and made the visual effects by compositing several videos.',
        links: [
            {
                link: "https://www.youtube.com/watch?v=ACfPy7o-Fnc",
                caption: "Watch on YouTube",
                active: true
            }
        ]
    },
    hoverboard: {
        projectId: "hoverboard",
        name: "Hoverboard 3000",
        year: "2017",
        technologies: "After Effects",
        description:
            "A motion design project made to promote the new Hoverboard 3000. Basically a school project :).",
        links: [
            {
                link: "https://www.youtube.com/watch?v=r_9sZUWzqMY",
                caption: "Watch on YouTube",
                active: true
            }
        ]
    },
    muse: {
        projectId: "muse",
        name: "Muse",
        year: "2016",
        technologies: "HTML, CSS, Javascript",
        description:
            'School project consisting in creating a showcase website for the artist of our choice, here, the group "Muse".',
        links: [
            {
                link: "",
                caption: "Visit the website",
                active: false
            }
        ]
    }
};

export function _getProjects () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...projects}), 1250)
    })
  }