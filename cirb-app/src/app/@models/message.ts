import { Contact } from './contact';

export interface Message {
  id?: number;
  userId?: number;
  user?: Contact;
  text: string;
  status: 'sent' | 'replie' | 'read';
}
