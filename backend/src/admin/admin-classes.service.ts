import { Injectable, NotFoundException } from '@nestjs/common';

export type AdminClassStatus = 'SCHEDULED' | 'CANCELLED';

export interface AdminClass {
  id: string;
  title: string;
  trainer: string;
  date: string;
  startsAt: string;
  endsAt: string;
  capacity: number;
  booked: number;
  status: AdminClassStatus;
  cancellationReason: string | null;
}

@Injectable()
export class AdminClassesService {
  private readonly classes: AdminClass[] = [
    {
      id: 'class_1',
      title: 'Power Flow',
      trainer: 'Elena',
      date: '2026-09-08',
      startsAt: '2026-09-08T18:00:00.000Z',
      endsAt: '2026-09-08T19:00:00.000Z',
      capacity: 12,
      booked: 8,
      status: 'SCHEDULED',
      cancellationReason: null,
    },
    {
      id: 'class_2',
      title: 'Strength Lab',
      trainer: 'Mikhail',
      date: '2026-09-09',
      startsAt: '2026-09-09T08:30:00.000Z',
      endsAt: '2026-09-09T09:30:00.000Z',
      capacity: 10,
      booked: 9,
      status: 'SCHEDULED',
      cancellationReason: null,
    },
    {
      id: 'class_3',
      title: 'Mobility Reset',
      trainer: 'Alicia',
      date: '2026-09-10',
      startsAt: '2026-09-10T12:15:00.000Z',
      endsAt: '2026-09-10T13:15:00.000Z',
      capacity: 14,
      booked: 7,
      status: 'SCHEDULED',
      cancellationReason: null,
    },
  ];

  listUpcoming(): AdminClass[] {
    return this.classes;
  }

  cancelClass(id: string, reason?: string): AdminClass {
    const target = this.classes.find((item) => item.id === id);
    if (!target) {
      throw new NotFoundException(`Class "${id}" was not found`);
    }

    target.status = 'CANCELLED';
    target.cancellationReason = reason?.trim() ? reason.trim() : 'Cancelled by administrator';
    return target;
  }
}
