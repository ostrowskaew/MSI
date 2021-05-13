import { Role } from "./role";

export class UserAccount {


  constructor(
    private _id: number,
    private _login: string,
    private _password: string,
    private _email: string,
    private _description: string,
    private _instructor: boolean,
    private _pricePerHour: number,
    private _role: Role
  ) {}

  public get role(): Role {
    return this._role;
  }
  public set role(value: Role) {
    this._role = value;
  }
  public get pricePerHour(): number {
    return this._pricePerHour;
  }
  public set pricePerHour(value: number) {
    this._pricePerHour = value;
  }
  public get instructor(): boolean {
    return this._instructor;
  }
  public set instructor(value: boolean) {
    this._instructor = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get login(): string {
    return this.login;
  }
  public set login(value: string) {
    this.login = value;
  }
}
