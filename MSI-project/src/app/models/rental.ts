import { UserAccount } from "./UserAccount";

export class Rental {


  constructor(
    private _id: number,
    private _totalPrice: number,
    private _dateRental: Date,
    private _duration: number,
    private _userAccount: UserAccount
  ){}

  public get userAccount(): UserAccount {
    return this._userAccount;
  }
  public set userAccount(value: UserAccount) {
    this._userAccount = value;
  }
  public get duration(): number {
    return this._duration;
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public get dateRental(): Date {
    return this._dateRental;
  }
  public set dateRental(value: Date) {
    this._dateRental = value;
  }
  public get totalPrice(): number {
    return this._totalPrice;
  }
  public set totalPrice(value: number) {
    this._totalPrice = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
