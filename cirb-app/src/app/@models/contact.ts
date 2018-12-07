export interface Contact {
  id?: number;
  firstname: string;
  lastname: string;
  status: 'onlive' | 'ofline' | 'busy' | 'away';
  mood: string;
  avatar: string;
}

