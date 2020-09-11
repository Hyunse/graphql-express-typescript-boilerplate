import { SayHelloResponse, SayHelloQueryArgs } from '@type/graph';

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}!`,
      };
    },
  },
};

export default resolvers;
