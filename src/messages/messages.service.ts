import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    ) {}

    async getAll(): Promise<Message[]> {
        return this.messageModel.find().exec();
    }

    async addOne(messageDto: CreateMessageDto): Promise<Message> {
        const newMessage = new this.messageModel(messageDto);
        return newMessage.save();
    }

    async deleteOne(id: string): Promise<Message> {
        return this.messageModel.findByIdAndRemove(id);
    }

    async updateOne(
        id: string,
        messageDto: UpdateMessageDto,
    ): Promise<Message> {
        return this.messageModel.findByIdAndUpdate(id, messageDto, {
            new: true,
        });
    }
}
