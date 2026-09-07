import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { AdminClassesService } from './admin-classes.service.js';

class CancelClassDto {
  @IsOptional()
  @IsString()
  reason?: string;
}

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminClassesService: AdminClassesService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get admin dashboard summary' })
  getDashboard() {
    return {
      clients: 1284,
      activeSubscriptions: 412,
      upcomingClasses: 26,
      sales: 1240000,
      trialUses: 88,
      activePromotions: 5,
    };
  }

  @Get('classes')
  @ApiOperation({ summary: 'List upcoming classes for admin management' })
  listClasses() {
    return this.adminClassesService.listUpcoming();
  }

  @Post('classes/:id/cancel')
  @HttpCode(200)
  @ApiOperation({ summary: 'Cancel a class manually from the admin account' })
  @ApiResponse({ status: 200, description: 'Class cancelled and visible to clients' })
  cancelClass(@Param('id') id: string, @Body() body?: CancelClassDto) {
    return this.adminClassesService.cancelClass(id, body?.reason);
  }

  @Get('clients/export')
  @ApiOperation({ summary: 'Export client records as CSV/XLSX' })
  exportClients() {
    return {
      status: 'queued',
      format: 'csv',
      fileName: 'clients-export.csv',
      filters: ['active', 'inactive', 'with-subscription', 'without-subscription'],
    };
  }
}
