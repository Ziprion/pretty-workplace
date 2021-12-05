export const getAuthUserEmail = (req) => req?.userEmail?.toLowerCase();

export const getAuthBodyData = (req) => {
  if (req?.body) {
    const {
      email, password, firstName, lastName, confirm,
    } = req.body;

    return {
      email: email?.toLowerCase(),
      password,
      firstName: firstName?.toLowerCase(),
      lastName: lastName?.toLowerCase(),
      confirm,
    };
  }

  return {};
};
