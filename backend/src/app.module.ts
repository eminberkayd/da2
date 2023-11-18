import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/entities';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Post } from './post/entities';
import { CommentModule, CommentController, CommentService } from "./comment"
import { LikeModule, LikeController, LikeService } from './like';
import { DislikeModule, DislikeController, DislikeService } from './dislike';
import { FollowModule, FollowController, FollowService } from './follow';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: [Post],
      synchronize: true,
      logging: false,
      autoLoadEntities: true
    }), PostModule, CommentModule, LikeModule, DislikeModule, FollowModule],
  controllers: [UserController, PostController, CommentController, LikeController, DislikeController, FollowController],
  providers: [PostService, CommentService, LikeService, DislikeService, FollowService],
})
export class AppModule { }
