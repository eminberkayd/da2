import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('comments')
export class CommentController {

    @Get(':postID')
    findAll(@Param('postID') postID: number){

    }

    create(){

    }

    update(){

    }

    delete(){

    }
}
