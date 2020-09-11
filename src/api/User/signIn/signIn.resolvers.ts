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

        if (!user) {
          return {
            ok: false,
            error: 'User Not Found',
            token: '',
          };
        }

        const checkPassword = await user.comparePassword(password);

        if (checkPassword) {
          const token = createJWT(user.id);
          return {
            ok: true,
            error: null,
            token,
          };
        } else {
          return {
            ok: false,
            error: 'Wrong Password',
            token: null,
          };
        }
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
