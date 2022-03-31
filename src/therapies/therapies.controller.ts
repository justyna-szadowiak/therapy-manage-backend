import { Controller, Get } from '@nestjs/common';
import * as therapies from '../data/therapies.json';

@Controller('therapies')
export class TherapiesController {
  @Get()
  findAll(): any[] {
    return therapies;
  }
}
