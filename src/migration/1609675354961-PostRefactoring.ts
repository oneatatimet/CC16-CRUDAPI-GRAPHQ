import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Music } from '../entity/music';
import { MusicSeed } from '../seeds/music.seed';

export class PostRefactoring1609675354961 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const musicSeed: any = MusicSeed;
		await getRepository(Music).save(musicSeed);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
