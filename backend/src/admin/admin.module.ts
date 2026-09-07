import { Module } from '@nestjs/common';
import { AdminClassesService } from './admin-classes.service.js';
import { AdminController } from './admin.controller.js';

@Module({
  controllers: [AdminController],
  providers: [AdminClassesService],
})
export class AdminModule {}
