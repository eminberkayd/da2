import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get(':id')
    get(@Param('id') id: number){
        const post = this.postService.get(id);
        if(post){

        }
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto){

    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto){
        
    }

    @Delete(':id')
    delete(@Param('id') id: number){

    }

}
