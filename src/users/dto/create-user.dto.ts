import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'jenya@.gmail.com',
  })
  email: string;
  @ApiProperty({
    default: '12345',
  })
  password: string;
  @ApiProperty({
    default: 'Jenya B',
  })
  fullName: string;
}
