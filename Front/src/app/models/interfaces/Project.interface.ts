export interface ProjectModel {
    _id: string;
    name: string;
    userCreator: string;
    member: string[];
    background: string;
    createdAt: Date;
    updatedAt: Date;
}