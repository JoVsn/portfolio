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
    baseImageUrl: string;
    onHomepage: boolean;
}

export interface ILink {
    url: string;
    caption: string;
    active: boolean;
    priority: IPriority;
}

export type IPriority = "main" | "secondary";

export type IProjectType = "video" | "other";
