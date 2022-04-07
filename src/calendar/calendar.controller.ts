import { Controller, Get, Param } from '@nestjs/common';
import * as planner from '../data/planner.json';

interface Plan {
  patient_id: number;
  kind_of_therapy: string;
  therapist: string;
  date_time: number;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

@Controller('calendar')
export class CalendarController {
  @Get()
  findAll(): Plan[] {
    return planner;
  }

  @Get(':month')
  getByMonth(@Param('month') month: string): Plan[] {
    // const dataArr = [];
    // for (let i = 0; i < 10; i++) {
    //   const kind_of_therapy = getRandomArbitrary(0, 22);
    //   dataArr.push({
    //     patient_id: planner.length + i,
    //     kind_of_therapy: planner[kind_of_therapy].kind_of_therapy,
    //     therapist: planner[getRandomArbitrary(0, 22)].therapist,
    //     date_time: new Date(
    //       2022,
    //       getRandomArbitrary(3, 11),
    //       getRandomArbitrary(0, 28),
    //     ).getTime(),
    //   });
    // }
    //
    // console.log(dataArr);

    return planner.filter((planObj: Plan) => {
      const data = new Date(planObj.date_time);
      return data.getMonth() === parseInt(month);
    });
  }

  // @Get()
  // findByMonth(@Param() params): PlanForTherapist[] {
  //   console.log(params);
  //   return [];
  // }
}
