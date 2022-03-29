import { Injectable } from '@nestjs/common';

interface Name {
  name: string;
  middle_name: string;
  surename: string;
}

@Injectable()
export class InterfaceService {
  number_id: number;
  name: Name;
  kind_of_therapy: string;
  date: number;
  time: number;
}
