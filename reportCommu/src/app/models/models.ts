export interface User {
    uid?: string;
    lname: string;
    fname: string;
    email: string;
    phone: number; 
    city: string;
    state: string;
   street: string;
   eircode:string;
   password: string
  }

  export interface type{
      id: number;
      incident: string
      options: {
          a: string, 
          b: string, 
          c: string
        }
  }


