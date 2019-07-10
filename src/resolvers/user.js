const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');

const register = async (parent, args, ctx, info) => {
	const password = await bcrypt.hash(args.input.password, 14);
	const user = await ctx.prisma.createUser({ ...args.input, password });
	const token = jwt.sign({ userId: user.id }, APP_SECRET);

	return {
		token,
		user
	};
};

const login = async (parent, args, ctx, info) => {
	const user = await ctx.prisma.user({ email: args.input.email });
	if (!user) {
		throw new Error('User not found');
	}

	const valid = await bcrypt.compareSync(args.input.password, user.password);
	if (!valid) {
		throw new Error('Invalid username or password');
	}

	const token = jwt.sign({ userId: user.id }, APP_SECRET);

	return {
		token,
		user
	};
};
module.exports = {
	Mutation: {
		register,
		login
	},

	User: {
		links(parent, args, ctx) {
			return ctx.prisma.user({ id: parent.id }).links();
		}
	}
};
