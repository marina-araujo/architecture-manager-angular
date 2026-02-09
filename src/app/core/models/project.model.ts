import { Client } from './client.model'

export interface Project {
  id: number;
  moment: Date;
  status: string;
  client: Client;
}
