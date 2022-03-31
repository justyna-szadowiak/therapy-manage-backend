import { Controller, Get } from '@nestjs/common';
import * as patients from '../data/patients.json';

@Controller('patients')
export class PatientsController {
  @Get()
  findAll(): any[] {
    return patients;
  }
}
