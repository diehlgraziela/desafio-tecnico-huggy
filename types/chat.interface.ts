export interface Chat {
  id: number;
  agentId: number;
  secondAgentId: number | null;
  contactId: number;
  departmentId: number | null;
  tabulationId: number | null;
  chatTabulation: number | null;
  lastMessage: LastMessage;
  chatDepartment: number | null;
  unread: number;
  chatCustomer: ChatCustomer;
  workflowID: null;
  workflowStepID: null;
  queueNumber: null;
  situation: string;
  createdAt: string;
  updatedAt: string;
  attendedAt: string;
  closedAt: string | null;
  enabledSession: boolean;
  channel: string;
  channels: Channel[];
  agents: Agent[];
}

interface LastMessage {
  text: string;
  file: string | null;
  sendAt: string;
  senderType: string;
  type: string;
  sender: {
    id: number;
    name: string;
    mobile: string | null;
    phone: string | null;
    email: string;
    photo: string;
  };
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
