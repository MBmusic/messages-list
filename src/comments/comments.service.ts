import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from "./schemas/comments.schema";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    ) {};

    async getAll(): Promise<Comment[]> {
        return this.commentModel.find().exec();
    }

    async addOne(commentDto: CreateCommentDto): Promise<Comment> {
        const newComment = new this.commentModel(commentDto);
        return newComment.save();
    }
    
    async deleteOne(id: string): Promise<Comment> {
        return this.commentModel.findByIdAndRemove(id);
    }

    async deleteAllById(id: string): Promise<Comment> {
        return this.commentModel.remove({
            message_id: id
        });
    }
}
