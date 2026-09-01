import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
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
