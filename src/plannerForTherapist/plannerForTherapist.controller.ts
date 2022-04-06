import { Controller, Get } from '@nestjs/common';
import * as plannerForTherapist from '../data/plannerForTherapist.json';

interface PlanForTherapist {
  therapist_id: number;
  patient_name: string;
  kind_of_therapy: string;
  date_time: number;
}

@Controller('plannerForTherapist')
export class PlannerForTherapistController {
  @Get()
  findAll(): PlanForTherapist[] {
    return plannerForTherapist;
  }
}
