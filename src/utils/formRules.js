export const REQUIRED_RULE = [
  {
    required: true,
    message: 'This field is required!',
  },
];

export const EMAIL_RULE = [
  {
    type: 'email',
    message: 'Email is not correct!',
  },
  REQUIRED_RULE[0],
];
