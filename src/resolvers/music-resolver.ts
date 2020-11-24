import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Music } from '../entity/music';
import { AddMusicInput } from '../inputs/add-music-Input';
import { UpdateMusicInput } from '../inputs/update-music-input';

@Resolver()
export class MusicResolver {
	// get all music list in an Array []
	@Query(() => [Music])
	musics() {
		return Music.find();
	}

	// add music(CREATE)
	// disabled class-validator because we are not using it otherwise it will throw error
	// because this feature enabled by default.
	@Mutation(() => Music)
	async createMusic(@Arg('data', { validate: false }) data: AddMusicInput) {
		const music = Music.create(data);
		await music.save();
		return music;
	}

	// get music by id
	@Query(() => Music)
	music(@Arg('id') id: string) {
		return Music.findOne({ where: { id } });
	}

	// update music by id
	@Mutation(() => Music)
	async updateMusic(
		@Arg('id') id: string,
		@Arg('data', { validate: false }) data: UpdateMusicInput
	) {
		const music = await Music.findOne({ where: { id } });

		if (!music) {
			throw new Error(`The music with id: ${id} does not exist!`);
		}

		// data will be assign to music variable
		Object.assign(music, data);
		//then new music Object will be saved under that id.
		await music.save();

		return music;
	}

	// delete a music by id
	@Mutation(() => Boolean)
	async deleteUser(@Arg('id') id: string) {
		const music = await Music.findOne({ where: { id } });

		if (!music) {
			throw new Error(`The music with id: ${id} does not exist!`);
		}

		await music.remove();
		return true;
	}
}
