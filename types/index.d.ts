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

interface ILandingState {
  isLoading: boolean;
  faq: IFaq;
  header: IFaqHeader;
  logos: ILogos;
  plans: IPlans;
  services: IServices;
  testimonials: ITestimonials;
  promotion: IPromotion;
}

interface IPromotion {
  title: string;
  description: string;
  label: string;
  path: string;
  label: string;
  src: string;
}

interface ITestimonials {
  title: string;
  headline: string;
  description: string;
  items: ITestimonialsItems[];
}

interface ITestimonialsItems {
  quote: string;
  author: ITestimonialsAuthor;
}

interface ITestimonialsAuthor {
  name: string;
  description: string;
  avatar: ITestimonialsAVatar;
}

interface ITestimonialsAVatar {
  src: string;
  loading: string;
}

interface IServices {
  title: string;
  description: string;
  headline: string;
  items: iServicesItems[];
}

interface iServicesItems {
  title: string;
  description: string;
  icon: string;
  to: string;
}

interface IPlans {
  title: string;
  description: string;
  headline: string;
  subscriptions: IPlansSubscriptions[];
}

interface IPlansSubscriptions {
  title: string;
  description: string;
  price: string;
  align: string;
  highlight: boolean;
  scale: boolean;
  button: IPlansButton;
  features: array;
}

interface IPlansButton {
  label: string;
  color: string;
  to: string;
  click?: Function;
}

interface IFaqHeader {
  title: string;
  description: string;
  content: IContentHeader;
}

interface IContentHeader {
  type: string;
  src: string;
}

interface ILogos {
  title: string;
  icons: Array;
}

interface IFaq {
  title: string;
  description: string;
  items: IFaqItem[];
}

interface IFaqItem {
  label: string;
  content: string;
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
  rollback: boolean;
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
    installments: number;
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
