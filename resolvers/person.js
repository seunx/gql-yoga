const data = require("../data");

module.exports = {
  Query: {
    getPerson: (_, args) => data.people.find(p => p.id == args.id),
    getPeople: () => data.people,
    searchResults() {
      const allFields = [...data.people, ...data.animals];
      return allFields;
    }
  },
  Mutation: {
    newPerson(parent, args, ctx, info) {
      return {
        id: args.input.id,
        name: args.input.name
      };
    }
  },
  SearchResults: {
    __resolveType(searchResult) {
      if (!searchResult.type) {
        return "Person";
      } else {
        if (searchResult.type === "Lion") {
          return "Lion";
        } else if (searchResult.type === "Dog") {
          return "Dog";
        } else {
          return "Cat";
        }
      }
    }
  }
};
