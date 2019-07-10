const { getUserId } = require('../utils');

const newLinkSubscribe = (root, args, ctx, info) => {
	return ctx.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
};

const newLink = {
	subscribe: newLinkSubscribe,
	resolve: payload => {
		return payload;
	}
};

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
	Subscription: {
		newLink
	},
	Link: {
		postedBy(parent, args, ctx) {
			return ctx.prisma.link({ id: parent.id }).postedBy();
		}
	}
};
