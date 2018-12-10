import { Contact } from './contact';


export enum MessageStatust {
  SENT = 'sent',
  REPLIES = 'replies',
}
export interface Message {
  id?: number;
  userId?: number;
  user?: Contact;
  text: string;
  status: MessageStatust;
}
