export enum ENVType {
  PRODUCTION = "production",
  STAGING = "staging",
  DEVELOPMENT = "development",
}

export enum AppChannel {
  WEB = "web",
  MOBILE = "mobile",
  DESKTOP = "desktop",
  TABLET = "tablet",
  SMART_TV = "smart-tv",
  WATCH = "watch",
}

export enum UserType {
  USER = "user",
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
}

export enum DbModelsType {
  USER = "user",
  ROLE = "role",
  PERMISSION = "permission",
  API_KEY = "ApiKey",
  PLAN = "plan",
  SUBSCRIPTION = "subscription",
  TRANSACTION = "transaction",
}

export enum PasswordType {
  USERGENERATED = "user-generated",
  SYSTEMGENERATED = "system-generated",
  TEMPORARY = "temporary",
  RESET = "reset",
}

export enum OtpType {
  REGISTER = "register",
  LOGIN = "login",
  GENERIC = "generic",
  ACTIVATEACCOUNT = "activate-account",
  CHANGEPASSWORD = "change-password",
  FORGOTPASSWORD = "forgot-password",
}

export enum VerifyOTP {
  REGISTER = "register",
  PASSWORD_RESET = "password-reset",
  CHANGE_PASSWORD = "change-password",
  LOGIN = "login",
  VERIFY = "verify",
}
