import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { MusicResolver } from './resolvers/music-resolver';

async function runServer() {
	const connection = await createConnection();
	const schema = await buildSchema({
		resolvers: [MusicResolver],
	});

	const server = new ApolloServer({ schema });
	await server.listen(3000);

	console.log('Server started at http://localhst:3000');
}

runServer();
