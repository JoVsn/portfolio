export interface IProject {
    projectId: string;
    name: string;
    type: IProjectType;
    genre: string;
    isMain: boolean;
}

export interface IMainProject extends IProject {
    client: string;
    tools: string;
    description: string;
    links: ILink[];
    medias: IMedias;
    onHomepage: boolean;
}

export interface ILink {
    url: string;
    caption: string;
    active: boolean;
    priority: IPriority;
}

export interface IMedias {
    mainUrl: string;
    thumbnailUrl: string;
}

export type IPriority = "primary" | "secondary";

export type IProjectType = "video" | "other";

