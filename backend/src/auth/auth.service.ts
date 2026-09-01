import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async authenticateWithYandex(code: string) {
    if (!code || code === 'invalid') {
      throw new Error('Invalid Yandex OAuth code');
    }

    return {
      user: {
        id: 'user_1001',
        email: 'member@fitnessformula.local',
        name: 'Anna Petrovna',
        role: 'USER',
      },
      token: 'mock-jwt-token-for-development',
      provider: 'yandex',
    };
  }

  getCurrentUser() {
    return {
      id: 'user_1001',
      email: 'member@fitnessformula.local',
      name: 'Anna Petrovna',
      role: 'USER',
      status: 'ACTIVE',
    };
  }
}
