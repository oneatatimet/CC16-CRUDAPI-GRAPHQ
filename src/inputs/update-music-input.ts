import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdateMusicInput {
	@Field({ nullable: true })
	artistName?: string;

	@Field({ nullable: true })
	title?: string;

	@Field({ nullable: true })
	genre?: string;
}
