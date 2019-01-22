export class SearchFilter {
  profession: string;
  location: string;
  date: Date;
  price: number;

  constructor(profession: string, location: string, date: Date, price: number) {
    this.profession = profession;
    this.location = location;
    this.date = date;
    this.price = price;
  }
}
