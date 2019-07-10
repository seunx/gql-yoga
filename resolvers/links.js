module.exports = {
	Query: {
		feed: (root, args, ctx, info) => {
			return ctx.prisma.links();
		}
	},
	Mutation: {
		post: (root, args, ctx) => {
			return ctx.prisma.createLink({
				url: args.url,
				description: args.description
			});
		}
	}
};
