import { NotFoundException } from '@nestjs/common';
import { describe, expect, it } from 'vitest';
import { AdminClassesService } from './admin-classes.service.js';

describe('AdminClassesService', () => {
  it('lists upcoming classes', () => {
    const service = new AdminClassesService();

    expect(service.listUpcoming().length).toBeGreaterThan(0);
    expect(service.listUpcoming()[0].status).toBe('SCHEDULED');
  });

  it('cancels a class by id and keeps the reason', () => {
    const service = new AdminClassesService();

    const cancelled = service.cancelClass('class_1', 'Trainer is sick');

    expect(cancelled.status).toBe('CANCELLED');
    expect(cancelled.cancellationReason).toBe('Trainer is sick');
  });

  it('falls back to a default reason and rejects unknown ids', () => {
    const service = new AdminClassesService();

    expect(service.cancelClass('class_2').cancellationReason).toBe('Cancelled by administrator');
    expect(() => service.cancelClass('missing')).toThrow(NotFoundException);
  });
});
