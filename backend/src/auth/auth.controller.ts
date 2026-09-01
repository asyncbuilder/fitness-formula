import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service.js';

class YandexAuthDto {
  code!: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('yandex')
  @ApiOperation({ summary: 'Authenticate a user via Yandex OAuth' })
  @ApiResponse({ status: 201, description: 'Authenticated user and JWT token returned' })
  @ApiBody({ type: YandexAuthDto })
  async yandexLogin(@Body() body: YandexAuthDto) {
    return this.authService.authenticateWithYandex(body.code);
  }

  @Get('me')
  @ApiOperation({ summary: 'Return the current authenticated user' })
  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
}
