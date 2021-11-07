import { IMainProject } from "../../models/project";

export const projects: IMainProject[] = [
    {
        projectId: "papmobile",
        name: "PAP Mobile",
        type: "other",
        genre: "Website",
        isMain: true,
        client: "Client particulier",
        tools: "Adobe XD, React",
        description:
            "Un site vitrine proposant des services de réparations et vente d'appareils mobiles. Le design a été fait sur Adobe XD, puis le site a été fait \"from scratch\" à l'aide de React.",
        links: [
            {
                url: "https://papmobile.fr/",
                caption: "PAP Mobile",
                active: true,
                priority: "primary",
            },
            {
                url: "https://www.youtube.com/watch?v=ACfPy7o-Fnc",
                caption: "Watch on YouTube",
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
    {
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
    {
        projectId: "shopping_assistant",
        name: "Shopping Assistant",
        type: "other",
        genre: "Mobile Application",
        isMain: true,
        client: "IMAC - School Project",
        tools: "React Native, Firebase, NodeJS",
        description:
            "This is an application that allows you track stock and prices evolution accross multiple platforms such as Amazon, Boulanger, eBay, CDiscount, ...",
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
];
