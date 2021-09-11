type PrblmItem = {
  no: number | string;
  name: string;
  difficulty: string;
};

export type Prblm = {
  no: number | string;
  name: string;
  text: string;
  difficulty: string;
  isLC: boolean;
};

export type UserStatistics = {
  hard: number;
  medium: number;
  easy: number;
  personal: number;
  total: number;
  personalCounter: number;
};

export default PrblmItem;
