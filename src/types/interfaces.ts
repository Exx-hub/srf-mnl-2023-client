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
  title: string;
  description: string;
  price: number;
  isActive: boolean;
  createdOn: Date;
  _id: string;
}

export interface LoginValidateValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type CourseIdType = string | undefined;
