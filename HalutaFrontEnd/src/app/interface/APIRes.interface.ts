import { IProduct } from './IProduct.interface';

export interface APIRes {
  status: boolean;
  message: string;
  content: IProduct[];
}
