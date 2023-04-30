import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const g1 = await prisma.great.create({
		data: {
			name: 'William Shakespeare'
		}
	});
	const g2 = await prisma.great.create({
		data: {
			name: 'Aristotle'
		}
	});
	const g3 = await prisma.great.create({
		data: {
			name: 'Socrates'
		}
	});

	const g4 = await prisma.great.create({
		data: {
			name: 'Alexander Pope'
		}
	});

	const q1 = await prisma.quote.create({
		data: {
			body: 'In delay there lies no plenty!',
			greatId: g1.id
		}
	});

	const q2 = await prisma.quote.create({
		data: {
			body: 'We are what we repeatedly do!',
			greatId: g2.id
		}
	});
	// const alice = await prisma.user.upsert({
	// 	where: { email: 'alice@prisma.io' },
	// 	update: {},
	// 	create: {
	// 		email: 'alice@prisma.io',
	// 		name: 'Alice',
	// 		posts: {
	// 			create: {
	// 				title: 'Check out Prisma with Next.js',
	// 				content: 'https://www.prisma.io/nextjs',
	// 				published: true
	// 			}
	// 		}
	// 	}
	// });
	// const bob = await prisma.user.upsert({
	// 	where: { email: 'bob@prisma.io' },
	// 	update: {},
	// 	create: {
	// 		email: 'bob@prisma.io',
	// 		name: 'Bob',
	// 		posts: {
	// 			create: [
	// 				{
	// 					title: 'Follow Prisma on Twitter',
	// 					content: 'https://twitter.com/prisma',
	// 					published: true
	// 				},
	// 				{
	// 					title: 'Follow Nexus on Twitter',
	// 					content: 'https://twitter.com/nexusgql',
	// 					published: true
	// 				}
	// 			]
	// 		}
	// 	}
	// });
	// console.log({ alice, bob });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
