import { CoinType } from "../type/coin-type.enum";


export interface FacturaModel {
  id: number;
  coin: CoinType;
  amount: number
  descriptionProduct: string
  countProduct: number;
  clientId: number
}