import { UserAccount } from "./UserAccount";

export class RentalForm {


  constructor(
    private _totalPrice: number,
    private _dateRental: string,
    private _hourRental: string,
    private _duration: number,
  ){}


  public get duration(): number {
    return this._duration;
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public get dateRental(): string {
    return this._dateRental;
  }
  public set dateRental(value: string) {
    this._dateRental = value;
  }

  public get hourRental(): string {
    return this._hourRental;
  }
  public set hourRental(value: string) {
    this._hourRental = value;
  }

  public get totalPrice(): number {
    return this._totalPrice;
  }
  public set totalPrice(value: number) {
    this._totalPrice = value;
  }

}
