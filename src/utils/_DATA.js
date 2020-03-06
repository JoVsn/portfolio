let projects = {
    life: {
        projectId: "life",
        name: "Life",
        type: "video",
        genre: "Video",
        isMain: true,
        client: "IMAC - School Project",
        tools: "Sony Vegas, After Effects, Premiere Pro",
        description:
            'A title sequence for a fictitious movie called "Life", for a school project. Made in association with Joris Oeuvray, we entirely produced the soundtrack and made the visual effects by compositing several videos.',
        links: [
            {
                url: "https://www.youtube.com/watch?v=ACfPy7o-Fnc",
                caption: "Watch on YouTube",
                active: true,
                priority: "primary",
            },
            {
                url: "https://joris.oeuvray.fr/",
                caption: "Joris Oeuvray's portfolio",
                active: true,
                priority: "secondary",
            },
        ],
        medias: {
            mainUrl: "https://joordvn-portfolio.s3.eu-west-3.amazonaws.com/life.mp4",
            thumbnailUrl: "https://joordvn-portfolio.s3.eu-west-3.amazonaws.com/life.png",
        },
        onHomepage: true,
    },
    shopping_assistant: {
        projectId: "shopping_assistant",
        name: "Shopping Assistant",
        type: "other",
        genre: "Mobile Application",
        isMain: true,
        client: "IMAC - School Project",
        tools: "React Native, Firebase, NodeJS",
        description:
            'This is an application that allows you track stock and prices evolution accross multiple platforms such as Amazon, Boulanger, eBay, CDiscount, ...',
        links: [
            {
                url: "https://shopping-assistant.app",
                caption: "Visit the website",
                active: true,
                priority: "primary",
            },
        ],
        medias: {
            mainUrl: "https://joordvn-portfolio.s3.eu-west-3.amazonaws.com/shopping.png",
            thumbnailUrl: "https://joordvn-portfolio.s3.eu-west-3.amazonaws.com/shopping.png",
        },
        onHomepage: true,
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
