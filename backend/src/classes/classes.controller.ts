import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  @Get()
  @ApiOperation({ summary: 'List all classes' })
  getAllClasses() {
    return [
      {
        id: 'class_1',
        title: 'Power Flow',
        trainer: 'Elena',
        date: '2026-09-01',
        startsAt: '2026-09-01T18:00:00.000Z',
        endsAt: '2026-09-01T19:00:00.000Z',
        durationMinutes: 60,
        capacity: 12,
        freeSpots: 4,
        price: 950,
        type: 'GROUP',
      },
      {
        id: 'class_2',
        title: 'Strength Lab',
        trainer: 'Mikhail',
        date: '2026-09-03',
        startsAt: '2026-09-03T08:30:00.000Z',
        endsAt: '2026-09-03T09:30:00.000Z',
        durationMinutes: 60,
        capacity: 10,
        freeSpots: 1,
        price: 1150,
        type: 'GROUP',
      },
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single class by id' })
  getClass(@Param('id') id: string) {
    return {
      id,
      title: 'Power Flow',
      trainer: 'Elena',
      description: 'A breath-led strength flow with moderate intensity.',
      startsAt: '2026-09-01T18:00:00.000Z',
      endsAt: '2026-09-01T19:00:00.000Z',
      capacity: 12,
      freeSpots: 4,
      price: 950,
      type: 'GROUP',
    };
  }
}
