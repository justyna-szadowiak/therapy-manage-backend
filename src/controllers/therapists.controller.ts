import { Controller, Get, UseGuards } from '@nestjs/common';
import * as therapists from '../data/therapists.json';
import { JwtGuard } from '../guards/jwt.guard';
import { RoleGuard } from '../guards/role.guard';

interface Therapist {
  id: number;
  therapist_vocational_education: string;
  therapist_name: string;
  therapist_surename: string;
}

@UseGuards(RoleGuard)
@UseGuards(JwtGuard)
@Controller('therapists')
export class TherapistsController {
  @Get()
  findAll(): Therapist[] {
    return therapists;
  }
}
