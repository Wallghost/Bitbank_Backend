import { hash, compare } from 'bcryptjs';
import HashProviderModel from "../models/HashProvider";

export default class HashProvider implements HashProviderModel {
  public async generateHash(password: string): Promise<string> {
    const hashedPassword = await hash(password, 8);

    return hashedPassword;
  }

}
