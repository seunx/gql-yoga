const { getUserId } = require('../utils');

module.exports = {
	Query: {
		feed: (root, args, ctx, info) => {
			return ctx.prisma.links();
		}
	},
	Mutation: {
		post: (root, args, ctx) => {
			const userId = getUserId(ctx);
			return ctx.prisma.createLink({
				url: args.url,
				description: args.description,
				postedBy: { connect: { id: userId } }
			});
		}
	},
	Link: {
		postedBy(parent, args, ctx) {
			return ctx.prisma.link({ id: parent.id }).postedBy();
		}
	}
};
