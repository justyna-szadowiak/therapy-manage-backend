import { Controller, Get } from '@nestjs/common';
import * as therapists from '../data/therapists.json';

@Controller('therapists')
export class TherapistsController {
  @Get()
  findAll(): any[] {
    return therapists;
  }
}
