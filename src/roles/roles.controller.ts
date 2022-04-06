import { Controller, Get } from '@nestjs/common';
import * as roles from '../data/roles.json';

interface Role {
  id: number;
  role: string;
  name: string;
}

@Controller('roles')
export class RolesController {
  @Get()
  findAll(): Role[] {
    return roles;
  }
}
