import { ItemRental } from "./itemRental";

export class RentalReview {

  constructor(
    private _id: number,
    private _review: string,
    private _rating: number,
    private _itemRental: ItemRental
  ){}

  public get itemRental(): ItemRental {
    return this._itemRental;
  }
  public set itemRental(value: ItemRental) {
    this._itemRental = value;
  }
  public get rating(): number {
    return this._rating;
  }
  public set rating(value: number) {
    this._rating = value;
  }
  public get review(): string {
    return this._review;
  }
  public set review(value: string) {
    this._review = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
