import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { db } from 'src/database';
import { Post } from './entities';

@Injectable()
export class PostService {
  async create({ text }: CreatePostDto) {
    const postRepository = db.getRepository(Post);
    const post = new Post({ text });
    post.id = 2;
    await postRepository.save(post);
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
