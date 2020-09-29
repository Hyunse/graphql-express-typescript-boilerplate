import { SignInMutationArgs, SignInResponse } from '@type/graph';
import User from '@entities/User';
import { Resolvers } from '@type/resolvers';
import createJWT from '@utils/createJWT';

const resolver: Resolvers = {
  Mutation: {
    SignIn: async (_, args: SignInMutationArgs): Promise<SignInResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        // Can't find User
        if (!user) throw new Error('User Not Found');

        const checkPassword = await user.comparePassword(password);
        // Password is incorrect
        if (!checkPassword) throw new Error('Wrong Password');

        const token = createJWT(user.id);
        return {
          ok: true,
          error: null,
          token,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolver;
