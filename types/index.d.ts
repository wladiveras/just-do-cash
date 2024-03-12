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
  steps: IStep;
  items: IItems[];
  seller: ISeller;
  customer: ICustomer;
  checkout: ICheckout;
  token: string | "";
}
interface IStep {
  step: number;
  max: number;
  trigger: boolean;
}
interface IItems {
  id: number;
  name: string;
  price: number;
}

interface ICheckout {
  id: number;
  name: string;
  price: number;
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
}
