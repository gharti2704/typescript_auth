import { Request, Response } from 'express';

export class AuthController {
  public register = async (req: Request, res: Response) => {
    res.status(200).send('Register here');
  };

  public login = async (req: Request, res: Response) => {
    res.status(200).send('Login here');
  };

  public logout = async (req: Request, res: Response) => {
    res.status(200).send('Log out here');
  };
}
