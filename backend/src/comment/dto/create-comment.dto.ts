export class CreateCommentDto {
    content: string;
    postID: number;
    parentCommentID?: number;
}