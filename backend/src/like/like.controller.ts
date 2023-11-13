import { Controller, Get, Post, Delete, Param } from '@nestjs/common';

@Controller('like')
export class LikeController {

    @Get('posts/:id')
    getPostLikes(@Param('id') id: number){

    }

    @Post('posts/:id')
    likePost(@Param('id') id: number){

    }

    @Delete('posts/:id')
    revertLikePost(@Param('id') id: number){

    }

    @Get('comments/:id')
    getCommentLikes(@Param('id') id: number){

    }

    @Post('comments/:id')
    likeComment(@Param('id') id: number){

    }

    @Delete()
    revertLikeComment(){

    }
}
