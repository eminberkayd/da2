import { Injectable } from '@nestjs/common';
import { UpdatePostDto, CreatePostDto } from './dto';

@Injectable()
export class PostService {

    get(id: number) {
        return 123;
    }


    create(createPostDto: CreatePostDto) {

    }

    update({ id, updatePostDto }: { id: string, updatePostDto: UpdatePostDto }) {

    }


    delete(id: number) {

    }

    like({ id, user }: { id: number, user: string }) {

    }

    dislike({ id, user }: { id: number, user: string }) {

    }
}
