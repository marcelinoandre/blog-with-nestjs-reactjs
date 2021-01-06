import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }

  @Get()
  find(): Observable<User[]> {
    return this.userService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Observable<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Observable<User> {
    return this.userService.update(id, user);
  }

  @Get(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this.userService.delete(id);
  }
}
