import { Controller, Get } from '@nestjs/common';
import * as planner from '../data/planner.json';

interface Plan {
  patient_id: number;
  kind_of_therapy: string;
  therapist: string;
  date_time: number;
}

@Controller('calendar')
export class CalendarController {
  @Get()
  findAll(): Plan[] {
    return planner;
  }
}
