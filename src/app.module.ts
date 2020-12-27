import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { Message, MessageSchema } from "./messages/schemas/message.schema";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://Dima:Mypass123@cluster0.abssz.azure.mongodb.net/messages_list?retryWrites=true&w=majority"),
        MongooseModule.forFeature([
            {
                name: Message.name,
                schema: MessageSchema
            }
        ])
    ],
    controllers: [MessagesController],
    providers: [MessagesService],
})
export class AppModule {}
