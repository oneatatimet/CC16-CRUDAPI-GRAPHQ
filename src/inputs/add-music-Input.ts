import { Field, InputType } from 'type-graphql';

@InputType()
export class AddMusicInput {
	@Field()
	artistName: string;

	@Field()
	title: string;

	@Field()
	genre: string;
}
