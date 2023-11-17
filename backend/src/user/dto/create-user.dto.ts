export class CreateUserDto {
    userName: string;
    fullName: string | undefined;
    email: string;
    password: string;
    profilePhotoUrl: string | undefined;
    biography: string | undefined;
    timezone: string | undefined;
}
