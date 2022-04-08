import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import * as plannerForTherapist from '../data/plannerForTherapist.json';
import { JwtGuard } from '../guards/jwt.guard';

export interface PlanForTherapist {
  therapist: string;
  patient_name: string;
  kind_of_therapy: string;
  date_time: number;
}

@UseGuards(JwtGuard)
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
