import { UserAccount } from "./UserAccount";

export class Rental {


  constructor(
    private _id: number,
    private _totalPrice: number,
    private _dateRental: string,
    private _hourRental: string,
    private _status: string,
    private _lender: string,
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
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
  public get lender(): string {
    return this._status;
  }
  public set lender(value: string) {
    this._status = value;
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
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
