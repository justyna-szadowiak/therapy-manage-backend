import { Controller, Get, Param } from '@nestjs/common';
import * as plannerForTherapist from '../data/plannerForTherapist.json';

export interface PlanForTherapist {
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
