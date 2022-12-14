import { IBaseUserClass } from './type';

export class BaseUserClass {
    private _userID: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;

    constructor(baseUserClassObj: IBaseUserClass) {
        this._userID = baseUserClassObj.userID;
        this._firstName = baseUserClassObj.firstName;
        this._lastName = baseUserClassObj.lastName;
        this._email = baseUserClassObj.email;
        this._password = baseUserClassObj.password;
    }
    public get userID(): string {
        return this._userID;
    }
    public set userName(value: string) {
        this._userID = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
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
}
