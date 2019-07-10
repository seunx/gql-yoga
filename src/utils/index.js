const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET || 'GraphQL-15-V3ry-C001';

const getUserId = ctx => {
	const Auth = ctx.request.get('Authorization');
	if (Auth) {
		const token = Auth.replace('Bearer ', '');
		const { userId } = jwt.verify(token, APP_SECRET);
		return userId;
	}
	throw new Error('You are not Authorized!');
};
module.exports = {
	APP_SECRET,
	getUserId
};
