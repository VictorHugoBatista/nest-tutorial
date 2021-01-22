import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDTO } from './dto/create-test.dto';

@Controller('test')
export class TestController {
    constructor(private testService: TestService) { }

    @Get()
    index(): string {
      return 'test';
    }

    @Post('/create')
    async addTest(@Res() res, @Body() createTestDTO: CreateTestDTO) {
        const test = await this.testService.addTest(createTestDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            test
        })
    }
}
