import { Controller, Get } from '@nestjs/common';
import * as therapists from '../data/therapists.json';

interface Therapist {
  id: number;
  therapist_vocational_education: string;
  therapist_name: string;
  therapist_surename: string;
}

@Controller('therapists')
export class TherapistsController {
  @Get()
  findAll(): Therapist[] {
    return therapists;
  }
}
