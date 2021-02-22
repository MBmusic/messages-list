import {
    Body,
    Get,
    Post,
    Delete, 
    Controller,
    Param,
    HttpCode,
    HttpStatus
} from '@nestjs/common';
import { CommentsService } from "./comments.service";
import { Comment } from "./schemas/comments.schema";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Get()
    getAll(): Promise<Comment[]> {
        return this.commentsService.getAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    addOne(@Body() addMessage: CreateCommentDto): Promise<Comment> {
        return this.commentsService.addOne(addMessage);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<Comment> {
        return this.commentsService.deleteOne(id);
    }

    @Delete('message/:id')
    deleteAllById(@Param('id') id: string): Promise<Comment> {
        return this.commentsService.deleteAllById(id);
    }
}
