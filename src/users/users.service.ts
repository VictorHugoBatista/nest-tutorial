import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    async getUser(email: string): Promise<User> {
        const user = await this.userModel.findOne({email}).exec();
        console.log(user);
        if (user === null) {
            return undefined;
        }
        return user;
    }
}
