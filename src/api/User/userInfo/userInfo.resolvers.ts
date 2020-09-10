import { Resolvers } from 'src/types/resolvers';
import User from '../../../entities/User'
import { getRepository } from 'typeorm';

const resolvers: Resolvers = {
  Query: {
    GetAllUser: async (_, __, ___) => {
      const users: User[] = await getRepository(User).find();

      return {
        ok: true,
        users,
      };
    },
  },
};

export default resolvers;
