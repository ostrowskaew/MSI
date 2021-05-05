export class UserReview {

  constructor(
    private _id: number,
    private _content: string,
    private _rating: number,
    private _reviewerLogin: string,
    private _postReviewLogin: string
  ){}

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public get rating(): number {
    return this._rating;
  }
  public set rating(value: number) {
    this._rating = value;
  }
  public get reviewerLogin(): string {
    return this._reviewerLogin;
  }
  public set reviewerLogin(value: string) {
    this._reviewerLogin = value;
  }
  public get postReviewLogin(): string {
    return this._postReviewLogin;
  }
  public set postReviewLogin(value: string) {
    this._postReviewLogin = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
