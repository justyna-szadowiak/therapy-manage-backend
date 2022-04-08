import { Module } from '@nestjs/common';
import { PatientsController } from './controllers/patients.controller';
import { TherapiesController } from './controllers/therapies.controller';
import { TherapistsController } from './controllers/therapists.controller';
import { CalendarController } from './controllers/calendar.controller';
import { PlannerForTherapistController } from './controllers/plannerForTherapist.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as jwtConstants from './data/jwtConstants.json';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './auth.service';
import { LoginStrategy } from './strategies/login.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    AuthController,
    PatientsController,
    TherapiesController,
    TherapistsController,
    CalendarController,
    PlannerForTherapistController,
  ],
  providers: [AuthService, LoginStrategy, JwtStrategy],
})
export class AppModule {}
