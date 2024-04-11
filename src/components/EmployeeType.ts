export interface IEmployee {
    id: string;
    firstname : string;
    lastname : string;
    email : string;
    phone : number;
    address : string;
}


export enum PageEnum {
    list,
    add,
    edit
}