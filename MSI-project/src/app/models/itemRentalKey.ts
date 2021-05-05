export class ItemRentalKey {

  constructor(
    private _rentalId: number,
    private _equipementId: number
  ){}

  public get equipementId(): number {
    return this._equipementId;
  }
  public set equipementId(value: number) {
    this._equipementId = value;
  }
  public get rentalId(): number {
    return this._rentalId;
  }
  public set rentalId(value: number) {
    this._rentalId = value;
  }
}
