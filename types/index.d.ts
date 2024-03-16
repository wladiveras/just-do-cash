import type { Avatar } from "#ui/types";

export type UserStatus = "subscribed" | "unsubscribed" | "bounced";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: Avatar;
  status: UserStatus;
  location: string;
}

export interface Mail {
  id: number;
  unread?: boolean;
  from: User;
  subject: string;
  body: string;
  date: string;
}

export interface Member {
  name: string;
  username: string;
  role: "customer" | "client" | "owner" | "admin";
  avatar: Avatar;
}

export interface Notification {
  id: number;
  unread?: boolean;
  sender: User;
  body: string;
  date: string;
}

export type Period = "daily" | "weekly" | "monthly";

export interface Range {
  start: Date;
  end: Date;
}

interface IOrderState {
  isLoading: boolean;
  steps: IStep;
  items: IItems[];
  seller: ISeller;
  customer: ICustomer;
  address: IAddress;
  payment: IPayment;
  token: string | "";
}
interface IStep {
  step: number;
  max: number;
  trigger: boolean;
}
interface IAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  complement: string;
  zipcode: string;
}
interface IItems {
  id: number;
  name: string;
  price: number;
}

interface IPayment {
  id: number;
  name: string;
  price: number;
  method: string;
  card: {
    holderName: string;
    number: string;
    expireMonth: string;
    expireYear: string;
    cvv: string;
    brand: string;
  };
}

interface ISeller {
  id: number;
  name: string;
}

interface ICustomer {
  id: number;
  name: string;
  email: string;
  phone: string;
  document: string;
}
