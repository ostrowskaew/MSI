import { Equipment } from "./equipment";
import { ItemRentalKey } from "./itemRentalKey";
import { Rental } from "./rental";
import { RentalReview } from "./rentalReview";

export class ItemRental {

  constructor(
    private _id: ItemRentalKey,
    private _rental: Rental,
    private _equipement: Equipment,
    private _rentalReview: RentalReview
    ){}

    public get rentalReview(): RentalReview {
      return this._rentalReview;
    }
    public set rentalReview(value: RentalReview) {
      this._rentalReview = value;
    }
    public get equipement(): Equipment {
      return this._equipement;
    }
    public set equipement(value: Equipment) {
      this._equipement = value;
    }
    public get rental(): Rental {
      return this._rental;
    }
    public set rental(value: Rental) {
      this._rental = value;
    }
    public get id(): ItemRentalKey {
      return this._id;
    }
    public set id(value: ItemRentalKey) {
      this._id = value;
    }
}
