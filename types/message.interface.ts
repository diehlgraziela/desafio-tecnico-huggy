export interface Message {
  channel: "email" | string;
  chat: Chat;
  customer: Customer;
  file: string | null;
  id: number;
  isEmail: boolean;
  isInternal: boolean;
  readAt: string | null;
  receiver: Receiver;
  receiverType: "email" | "whatsapp" | string;
  sendAt: string;
  sender: User;
  senderType: "agent" | string;
  text: string;
  type: "text";
}

interface User {
  email: string;
  id: number;
  isActive: boolean;
  isAvailable: boolean;
  isOnline: boolean;
  mobile: string | null;
  name: string;
  phone: string | null;
  photo: string;
  statusID: number | null;
  statusType: number;
}

interface Receiver {
  custom_fields: any[];
  email: string;
  groups: any[];
  id: number;
  mobile: string | null;
  name: string;
  organizations: any[];
  phone: string | null;
  photo: string;
}

interface Chat {
  channel: string;
  customer: Customer;
  department: boolean;
  entrypoint: string | null;
  id: number;
  situation: string;
  workflowID: number | null;
  workflowStepID: number | null;
}

interface Customer {
  custom_fields: any[];
  email: string;
  groups: any[];
  id: number;
  mobile: string | null;
  name: string;
  organizations: any[];
  phone: string | null;
  photo: string;
}
