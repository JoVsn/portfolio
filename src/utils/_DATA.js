let projects = {
    life: {
        projectId: "life",
        name: "Life",
        type: "Video",
        client: "IMAC - School Project",
        tools: "Sony Vegas, After Effects, Premiere Pro",
        description:
            'A title sequence for an eventual movie called "Life", for a school project. Made in association with Joris Oeuvray, we entirely produced the soundtrack and made the visual effects by compositing several videos.',
        links: [
            {
                url: "https://www.youtube.com/watch?v=ACfPy7o-Fnc",
                caption: "Watch on YouTube",
                active: true,
                priority: "mainLink"
            },
        ],
        media: {
            type: "image",
            link: "",
        },
    },
};

let aptitudes = {
    development: {
        title: "Web development",
        description:
            "Design and development of user-friendly responsive websites matching users expectations (sometimes).",
    },
    video: {
        title: "Video making",
        description:
            "Editing and post-production of various kinds of videos, trying to provide a fresh and overwhelming experience to the viewers. ",
    },
    animation: {
        title: "Animation",
        description:
            "Motion design, animation for mobile and desktop loaders used to demonstrate ideas through videos.",
    },
};

export function _getProjects() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...projects }), 0);
    });
}

export function _getAptitudes() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...aptitudes }), 0);
    });
}
