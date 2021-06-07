const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
    deadline: String!
    tags: [Tag!]!
    done: Boolean!
  }

  type Appointment {
    id: ID!
    title: String!
    place: String!
    datetime: String!
    tags: [Tag!]!
  }

  union ScheduleItem = Todo | Appointment

  type Tag {
    id: ID!
    label: String!
    color: String!
  }

  type Query {
    schedule: [ScheduleItem!]!
  }
`;

const tags = [
  {
    id: "Tag:1",
    label: "Important",
    color: "#ff0000",
  },
  {
    id: "Tag:2",
    label: "Private",
    color: "#009900",
  },
];

const todos = [
  {
    id: "Todo:1",
    title: "Buy some milk",
    description: "I wanna make yogurt!",
    tags: [tags[0]],
    deadline: "2020-04-15T17:00",
    done: true,
  },
  {
    id: "Todo:2",
    title: "Read books",
    description: "I have to return them to the library.",
    tags: [],
    deadline: "2020-04-20T12:00",
    done: false,
  },
  {
    id: "Todo:3",
    title: "Book a hotel",
    description: "for the weekend trip",
    tags: [tags[0], tags[1]],
    deadline: "2020-04-21T22:00",
    done: false,
  },
];

const appointments = [
  {
    id: "Appointment:1",
    title: "Weekly meeting",
    place: "Meeting Room #3",
    datetime: "2020-04-16T14:30",
    tags: [tags[0]],
  },
  {
    id: "Appointment:2",
    title: "Dentist",
    place: "Donald's Dental Office",
    datetime: "2020-04-28T11:00",
    tags: [tags[1]],
  },
];

const resolvers = {
  Query: {
    schedule() {
      const items = [...todos, ...appointments];
      items.sort((a, b) => {
        const x = new Date(a.datetime || a.deadline).getTime();
        const y = new Date(b.datetime || b.deadline).getTime();
        return x - y;
      });
      return items;
    },
  },
  ScheduleItem: {
    __resolveType(obj, context, info) {
      if (obj.deadline) return "Todo";
      if (obj.datetime) return "Appointment";
      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
