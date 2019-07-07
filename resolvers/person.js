const data = require('../data');

module.exports = {
	Query: {
		getPerson: (_, args) => data.people.find(p => p.id == args.id),
		getPeople: () => data.people
	},
	Mutation: {
		newPerson(parent, args, ctx, info) {
			return {
				id: args.input.id,
				name: args.input.name
			};
		}
	}
};
