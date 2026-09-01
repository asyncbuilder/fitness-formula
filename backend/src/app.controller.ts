import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Service information' })
  @ApiResponse({ status: 200, description: 'Returns API metadata' })
  getRoot() {
    return {
      app: 'Fitness Formula API',
      status: 'online',
      timestamp: new Date().toISOString(),
    };
  }
}
