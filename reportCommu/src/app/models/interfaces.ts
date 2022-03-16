export interface User {
    uid: string;
    uFname: string;
    uLname: string;
    uEmail: string;
    uStreet: string;
    uCity: string;
    uState: string;
    uPhone: string;
    uEircode: string;
    uPassword: string
}

export interface Report {
    userId: string;
    inclocation: string;
    incimagen: string[];
    incdescription: string;
    inctType: string
}
