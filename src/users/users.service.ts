import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashPassword: (password: string) => Promise<string>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.save({
      ...createUserDto,
    });

    const hashedPassword = await this.hashPassword(createUserDto.password);

    const existingUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new ConflictException('A user with this email alread');
    }

    return await this.userRepository.save({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
