import { Member } from "./member";

export interface CityEvent {
  title: string;
  description: string;
  dateTime: string;
  image: string;
  id: number;
  members: Array<Member>;
  status: string;
}



