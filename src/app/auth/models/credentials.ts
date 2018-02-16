export class LoginCredentials {
  email: string;
  password: string;
}

export class RegisterCredentials extends LoginCredentials {
  name: string;
  address: string;
  phone: string;
  zipCode: number;
}
