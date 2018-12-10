
export enum ContactStatus {
  ONLINE = 'online',
  OFLINE = 'ofline',
  BUSY = 'busy',
  AWAY = 'eway'
}

export interface Contact {
  id?: number;
  firstname: string;
  lastname: string;
  status: ContactStatus;
  mood: string;
  avatar: string;
}

