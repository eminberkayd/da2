import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule, UserController, UserService } from './user'
import { PostModule, PostController, PostService } from './post';
import {CommentModule, CommentController, CommentService} from "./comment"
import { LikeModule, LikeController, LikeService } from './like';
import { DislikeModule, DislikeController, DislikeService } from './dislike';
import { MessageModule } from './message/message.module';
import { FollowModule } from './follow/follow.module';
@Module({
  imports: [UserModule, PostModule, CommentModule, LikeModule, MessageModule, FollowModule],
  controllers: [AppController, UserController, CommentController, LikeController],
  providers: [AppService, PostService, CommentService, LikeService],
})
export class AppModule {}
