const data = require('../data');

module.exports = {
	Query: {
		getAnimals: () => data.animals
	},
	Animal: {
		__resolveType(Animal, context, info) {
			if (Animal.type === 'Lion') {
				return 'Lion';
			} else if (Animal.type === 'Dog') {
				return 'Dog';
			} else {
				return 'Cat';
			}
		}
	}
};
