import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('me')
  @ApiOperation({ summary: 'Get the authenticated user profile' })
  getProfile() {
    return {
      id: 'user_1001',
      email: 'member@fitnessformula.local',
      name: 'Anna Petrovna',
      role: 'USER',
      phone: '+7 (900) 100-20-30',
      memberships: [
        { id: 'sub_1', name: 'Unlimited 8', lessonsRemaining: 5, endsAt: '2026-09-15T00:00:00.000Z' },
      ],
    };
  }

  @Get('me/subscriptions')
  @ApiOperation({ summary: 'List active subscriptions for the current user' })
  getSubscriptions() {
    return [
      { id: 'sub_1', plan: 'Unlimited 8', lessonsRemaining: 5, status: 'ACTIVE' },
    ];
  }

  @Get('me/bookings')
  @ApiOperation({ summary: 'List bookings for the current user' })
  getBookings() {
    return [
      { id: 'booking_1', className: 'Power Flow', trainer: 'Elena', startsAt: '2026-09-01T18:00:00.000Z', status: 'BOOKED' },
      { id: 'booking_2', className: 'Strength Lab', trainer: 'Mikhail', startsAt: '2026-09-03T08:30:00.000Z', status: 'PAID' },
    ];
  }
}
