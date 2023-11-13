export class PostDto {
    readonly user: string;
    readonly text: string;
    readonly image?: string;
    readonly likes: string[];
}