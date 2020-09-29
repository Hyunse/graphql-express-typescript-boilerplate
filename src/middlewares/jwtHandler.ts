import { Response, NextFunction } from 'express';
import decodeJWT from '@utils/decodeJWT';

/**
 * Json Web Token Handler
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const jwtHandler = async (
  req,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token: any = req.headers['authorization'];
  if (token) {
    const user = await decodeJWT(token);
    if (user) {
      req.user = user;
    } else {
      req.user = undefined;
    }
  }

  next();
};

export default jwtHandler;
