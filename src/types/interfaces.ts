export type FixMeLater = any;

export interface IUser {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  _id: string;
  courses: [];
}

export interface ICourse {
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  createdOn: Date;
  //   enrollees: []; // research on this
}
