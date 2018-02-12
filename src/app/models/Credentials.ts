export class LoginCredentials {
  email: string;
  password: string;
}

export class RegisterCredentials extends LoginCredentials {
  firstName: string;
  lastName: string;
  street: string;
  town: string;
  phone: string;
  zipCode: number;
}
