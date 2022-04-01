import { Controller, Get } from '@nestjs/common';
import * as therapies from '../data/therapies.json';

interface Therapy {
  id: number;
  therapy: string;
  therapist: string;
}

@Controller('therapies')
export class TherapiesController {
  @Get()
  findAll(): Therapy[] {
    return therapies;
  }
}
