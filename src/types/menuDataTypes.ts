export interface IconType {
  img: string;
  background: string;
}

export interface MenuItem {
  img: string;
  title: string;
  description: string;
  calories: number;
  calorieDetails: string;
  deg: number;
  newPrice: number;
  oldPrice: number;
  btnText: string;
  icons: IconType[];
}

export type Menu = {
  pizza: MenuItem;
  pasta: MenuItem;
  cake: MenuItem;
};