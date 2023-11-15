import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule, UserController, UserService } from './user';
import { PostModule, PostController, PostService } from './post';
import { CommentModule, CommentController, CommentService } from "./comment"
import { LikeModule, LikeController, LikeService } from './like';
import { DislikeModule, DislikeController, DislikeService } from './dislike';
import { FollowModule, FollowController, FollowService } from './follow';

@Module({
  imports: [UserModule, PostModule, CommentModule, LikeModule, DislikeModule, FollowModule],
  controllers: [AppController, UserController, PostController, CommentController, LikeController, DislikeController, FollowController],
  providers: [AppService, UserService, PostService, CommentService, LikeService, DislikeService, FollowService],
})
export class AppModule { }
