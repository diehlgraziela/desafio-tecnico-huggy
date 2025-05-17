export interface Chat {
  agentId: number;
  agents: Agent[];
  attendedAt: string;
  channel: string;
  channels: Channel[];
  chatCustomer: ChatCustomer;
  chatDepartment: number | null;
  chatTabulation: number | null;
  closedAt: string | null;
  contactId: number;
  createdAt: string;
  departmentId: number | null;
  enabledSession: boolean;
  id: number;
  lastMessage: LastMessage;
  queueNumber: null;
  secondAgentId: number | null;
  situation: string;
  tabulationId: number | null;
  unread: number;
  updatedAt: string;
  workflowID: null;
  workflowStepID: null;
}

interface LastMessage {
  file: string | null;
  sendAt: string;
  senderType: string;
  text: string;
  type: string;
  sender: Sender;
}

interface ChatCustomer {
  id: number;
  name: string;
  mobile: string;
  phone: string | null;
  email: string;
  photo: string;
  custom_fields: any[];
  organizations: any[];
  groups: any[];
}

interface Channel {
  uuid: string;
  id: string;
  name: string;
  type: string;
}

interface Agent {
  id: number;
  name: string;
  mobile: string | null;
  phone: string | null;
  email: string;
  photo: string;
  isActive: boolean;
  isOnline: boolean;
  isAvailable: boolean;
  statusID: number | null;
  statusType: number;
  photo_url: string;
  smallPhotoUrl: string;
}

interface Sender {
  email: string;
  id: number;
  mobile: string | null;
  name: string;
  phone: string | null;
  photo: string;
}
