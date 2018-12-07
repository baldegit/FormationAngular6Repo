type contactStatus = 'onlive' | 'ofline' | 'busy' | 'away';

export interface Contact {
  id?: number;
  firstname: string;
  lastname: string;
  status: contactStatus;
  mood: string;
  avatar: string;
}

