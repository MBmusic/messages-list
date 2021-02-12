export class CreateCommentDto {
    readonly message_id: number
    readonly name: string;
    readonly comment: string;
    readonly date: Date;
}
