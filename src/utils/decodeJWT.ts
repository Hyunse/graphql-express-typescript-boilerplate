import jwt from 'jsonwebtoken';
import User from '@entities/User';

const decodeJWT = async (token: string): Promise<User | undefined> => {
  const decoded: any = jwt.verify(
    token.substr(token.indexOf(' ') + 1),
    `${process.env.JWT_TOKEN}`
  );
  const { id } = decoded;
  const user: User | undefined = await User.findOne({ id });

  return user;
};

export default decodeJWT;
