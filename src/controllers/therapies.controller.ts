import { Controller, Get, UseGuards } from '@nestjs/common';
import * as therapies from '../data/therapies.json';
import { JwtGuard } from '../guards/jwt.guard';
import { RoleGuard } from '../guards/role.guard';

interface Therapy {
  id: number;
  therapy: string;
  therapist: string;
}

@UseGuards(RoleGuard)
@UseGuards(JwtGuard)
@Controller('therapies')
export class TherapiesController {
  @Get()
  findAll(): Therapy[] {
    return therapies;
  }
}
