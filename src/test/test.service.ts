import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './Interfaces/test.interface';
import { CreateTestDTO } from './dto/create-test.dto';

@Injectable()
export class TestService {
    constructor(
        @InjectModel('Test') private readonly customerModel: Model<Test>,
      ) {}

    async addTest(createCustomerDTO: CreateTestDTO): Promise<Test> {
        const newCustomer = await new this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }
}
