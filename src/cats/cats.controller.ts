import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }


  @Get()
  findAll(): string {
    return 'This action returns all cats'
  }
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }
}
