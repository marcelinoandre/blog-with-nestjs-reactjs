import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  find(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  findById(id: string): Observable<User> {
    return from(this.userRepository.findOne({ id }));
  }

  delete(id: string): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  update(id: string, user: User): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
}
