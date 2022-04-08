import { Controller, Get, Param } from '@nestjs/common';
import * as plannerForTherapist from '../data/plannerForTherapist.json';

export interface PlanForTherapist {
  therapist: string;
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

  @Get(':month')
  getByMonth(@Param('month') month: string): PlanForTherapist[] {
    return plannerForTherapist.filter((planObj: PlanForTherapist) => {
      const data = new Date(planObj.date_time);
      return data.getMonth() === parseInt(month);
    });
  } 
}