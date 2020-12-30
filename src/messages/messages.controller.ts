import {
    Controller,
    Get,
    Delete,
    Param,
    Post,
    Put,
    Body,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './schemas/message.schema';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    getAll(): Promise<Message[]> {
        return this.messagesService.getAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    addOne(@Body() addMessage: CreateMessageDto): Promise<Message> {
        return this.messagesService.addOne(addMessage);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<Message> {
        return this.messagesService.deleteOne(id);
    }

    @Put(':id')
    updateOne(
        @Body() updateMessage: UpdateMessageDto,
        @Param('id') id: string,
    ): Promise<Message> {
        return this.messagesService.updateOne(id, updateMessage);
    }
}
