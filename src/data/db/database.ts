import { connect } from 'mongoose';

export class Database {
  public initDb = async (): Promise<void> => {
    try {
      await connect(process.env.DATABASE || '');
      console.log('Connected to MongoDB database');
    } catch (error) {
      console.log(`Unable to connect to database, error:  ${error}`);
    }
  };
}
