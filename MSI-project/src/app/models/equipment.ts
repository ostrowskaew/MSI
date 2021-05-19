import { EquipmentType } from "./equipmentType";

export class Equipment {

  constructor(
    private _id: number,
    private _urlImage: string,
    private _brand: string,
    private _model: string,
    private _pricePerHour: number,
    private _lenderInstructor: string,
    private _size: string,
    private _description: string,
    private _year: string,
    private _equipmentType: EquipmentType){}

    public get year(): string {
      return this._year;
    }
    public set year(value: string) {
      this._year = value;
    }
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    }

    public get model(): string {
      return this._model;
    }
    public set model(value: string) {
      this._model = value;
    }
    public get size(): string {
      return this._size;
    }
    public set size(value: string) {
      this._size = value;
    }

    public get urlImage(): string {
      return this._urlImage;
    }
    public set urlImage(value: string) {
      this._urlImage = value;
    }

    public get brand(): string {
      return this._brand;
    }
    public set brand(value: string) {
      this._brand = value;
    }
    public get lenderInstructor(): string {
      return this._lenderInstructor;
    }
    public set lenderInstructor(value: string) {
      this._lenderInstructor = value;
    }
    public get pricePerHour(): number {
      return this._pricePerHour;
    }
    public set pricePerHour(value: number) {
      this._pricePerHour = value;
    }
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }

    public get equipmentType(): EquipmentType {
      return this._equipmentType;
    }
    public set equipmentType(value: EquipmentType) {
      this._equipmentType = value;
    }

}
