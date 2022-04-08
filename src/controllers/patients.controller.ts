import { Controller, Get, UseGuards } from '@nestjs/common';
import * as patients from '../data/patients.json';
import { JwtGuard } from '../guards/jwt.guard';
import { RoleGuard } from '../guards/role.guard';

interface Patients {
  number_id: number;
  name: string;
  middle_name: string;
  surename: string;
}

@UseGuards(RoleGuard)
@UseGuards(JwtGuard)
@Controller('patients')
export class PatientsController {
  @Get()
  findAll(): Patients[] {
    return patients;
  }
}
