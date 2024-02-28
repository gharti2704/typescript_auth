import { Request, Response } from 'express';
import { IUserAuthService } from '../service/interface/IUserAuthService.js';
import { IRegisterUser, IReturnUser } from '../data/model/interface/IUser.js';

export class AuthController {
  private userAuthService: IUserAuthService;

  constructor(userAuthService: IUserAuthService) {
    this.userAuthService = userAuthService;
  }

  public register = async (
    req: Request,
    res: Response
  ): Promise<Response<IReturnUser, Record<string, any>>> => {
    const { name, email, password, role }: IRegisterUser = req.body;

    try {
      const user: IReturnUser = await this.userAuthService.register(
        name,
        email,
        password,
        role
      );
      return res.status(201).send(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send(err.message);
      } else {
        return res.status(500).send('Internal Server Error');
      }
    }
  };

  public login = async (req: Request, res: Response) => {
    res.status(200).send('Login here');
  };

  public logout = async (req: Request, res: Response) => {
    res.status(200).send('Log out here');
  };
}
