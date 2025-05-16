import { Document, ObjectId } from "mongoose";
import { AppChannel, OtpType, PasswordType, UserType } from "./enums.util";

export type Nullable<T> = T | null;
export interface IRoleDoc extends Document {
  name: string;
  description: string;
  slug: string;
  scope?: string;
  scopeId?: string;

  // relationships
  permissions: Array<string>;
  users: Array<ObjectId | any>;

  // timestamps
  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId; 
  id: ObjectId;
}

export interface IPermissionDoc extends Document {
  action: string;
  description: string;

  // timestamps
  createdAt: string;
  updatedAt: string;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}

export interface IUserDoc extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordType: PasswordType; // encrypt this data
  userType: UserType;

  //user: string;
  phoneNumber: string;
  phoneCode: string;
  country: string;
  countryPhone: string;

  avatar: string;
  dateOfBirth: Date;
  gender: string;
  location: ILocationInfo;

  Otp: string;
  OtpExpiry: number;
  otpType: OtpType;
  accessToken: string;
  accessTokenExpiry: Date;

  isSuper: boolean;
  isAdmin: boolean;
  isUser: boolean;

  loginInfo: ILoginType;
  lastLogin: string;
  isActive: boolean;
  isActivated: boolean;
  isDeactivated: boolean;
  loginLimit: number;
  isLocked: boolean;
  lockedUntil: Nullable<Date>;
  twoFactorEnabled: boolean;

  // Notification Preferences
  // deviceToken: IDeviceToken;
  notificationPreferences: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };

  // relationships
  role: ObjectId | any;

  matchPassword: (password: string) => boolean;
  getAuthToken: () => string;

  // time stamps
  createdAt: Date;
  updatedAt: Date;
  _version: number;
  _id: ObjectId;
  id: ObjectId;
}


export interface IAdminDoc extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordType: PasswordType; // encrypt this data
  userType: UserType;
}

export interface ILoginType {
  ip: string;
  deviceType: string;
  platform: AppChannel
  deviceInfo?: {
    manufacturer?: string; 
    model?: string; 
    osName?: string; 
    osVersion: string;
    browser?: string; 
    browserVersion?: string;
    appVersion?: string; 
  };
  location?: {
    country: string;
    city: string;
    timezone: string;
  };
}

export interface ILocationInfo {
  address: string;
  city: string;
  state: string;
}

export interface IResult<T = any> {
  error: boolean;
  message: string;
  code: number;
  data: any;
}

export interface IData {
  key: string;
  value: any;
}