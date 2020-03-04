/**
 * Describes fields available in the form
 */
export interface IUserFields {
  phone?: any;
  social?: any;
  email?: any;
  password?: any;
  country?: any;
}

/**
 * Typed keys for {@see IUserFields}
 */
export const UserFieldKeys: IUserFields = {
  phone: 'phone',
  social: 'social',
  email: 'email',
  password: 'password',
  country: 'country',
};
