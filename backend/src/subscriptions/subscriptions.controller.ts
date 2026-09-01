import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('subscriptions')
@Controller('subscriptions')
export class SubscriptionsController {
  @Get('plans')
  @ApiOperation({ summary: 'List subscription plans' })
  getPlans() {
    return [
      {
        id: 'plan_1',
        name: 'Unlimited 8',
        description: '8 lessons over 30 days',
        priceKopecks: 199000,
        type: 'LESSON_COUNT',
        lessonCount: 8,
        isActive: true,
      },
      {
        id: 'plan_2',
        name: 'Trial',
        description: 'One free introductory session',
        priceKopecks: 0,
        type: 'TRIAL',
        lessonCount: 1,
        isActive: true,
      },
    ];
  }

  @Post('purchase')
  @ApiOperation({ summary: 'Purchase a subscription plan' })
  purchaseSubscription() {
    return {
      id: 'sub_1',
      planId: 'plan_1',
      userId: 'user_1001',
      status: 'ACTIVE',
      lessonsRemaining: 8,
      startsAt: '2026-09-01T00:00:00.000Z',
      endsAt: '2026-09-30T00:00:00.000Z',
    };
  }
}
