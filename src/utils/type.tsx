export type StackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Root: undefined;
};

export type AuthStackParamList = {
  Sign_up: undefined;
  Log_in: undefined;
  OTP: {
    phoneNumber: string | undefined;
  };
};

export type TabParamList = {
  Home: undefined;
  Favorite: undefined;
  Cart: undefined;
  Profile: undefined;
};
