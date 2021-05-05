import { Rental } from "./rental";
import { UserAccount } from "./UserAccount";

export class Class {
  public get userAccount(): UserAccount {
    return this._userAccount;
  }
  public set userAccount(value: UserAccount) {
    this._userAccount = value;
  }
  public get rental(): Rental {
    return this._rental;
  }
  public set rental(value: Rental) {
    this._rental = value;
  }
  public get level(): string {
    return this._level;
  }
  public set level(value: string) {
    this._level = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  constructor(
    private _id: number,
    private _level: string,
    private _rental: Rental,
    private _userAccount: UserAccount
  ){}
}
