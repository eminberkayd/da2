import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/entities';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Post } from './post/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { Comment, CommentController, CommentModule, CommentService } from './comment';
import { CommentLike, PostLike } from './like/entities';
import { CommentDislike, PostDislike } from './dislike/entities';
import { Message, MessageController, MessageService } from './message';
import { Follow, FollowController, FollowService } from './follow';
import { LikeController, LikeService } from './like';
import { DislikeController, DislikeService } from './dislike';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: [User,
        Post,
        PostLike,
        PostDislike,
        Comment,
        CommentLike,
        CommentDislike,
        Message,
        Follow
      ],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
    PostModule, CommentModule
  ],
  controllers: [PostController, CommentController, LikeController, DislikeController, MessageController, FollowController],
  providers: [PostService, CommentService, LikeService, DislikeService, MessageService, FollowService]
})
export class AppModule { }
