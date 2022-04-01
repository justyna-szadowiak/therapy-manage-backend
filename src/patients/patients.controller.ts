import { Controller, Get } from '@nestjs/common';
import * as patients from '../data/patients.json';

interface Patients {
  number_id: number;
  name: string;
  middle_name: string;
  surename: string;
}

@Controller('patients')
export class PatientsController {
  @Get()
  findAll(): Patients[] {
    return patients;
  }
}
