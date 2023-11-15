import { Injectable } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dto';

@Injectable()
export class CommentService {

    findAll(postID: number){

    }

    create(createCommentDto: CreateCommentDto){

    }

    update(updateCommentDto: UpdateCommentDto){

    }

    delete(commentID: number){

    }
}
