type AuthProfile = {
  email: string;
  family_name: string;
  given_name: string;
  granted_scopes: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};

type AuthResult = {
  isNewUser: boolean;
  profile: AuthProfile;
  providerId: "google.com";
};
