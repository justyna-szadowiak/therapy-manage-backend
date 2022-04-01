import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterfaceService } from './interface/interface.service';
import { PatientsController } from './patients/patients.controller';
import { TherapiesController } from './therapies/therapies.controller';
import { TherapistsController } from './therapists/therapists.controller';
import { CalendarController } from './calendar/calendar.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PatientsController,
    TherapiesController,
    TherapistsController,
    CalendarController,
  ],
  providers: [AppService, InterfaceService],
})
export class AppModule {}
