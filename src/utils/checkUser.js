export function userInfosCheck(firstName, lastName) {
  // I create a regex function to check if the user infos are valid
  const userRegex = /^[a-zA-Z ]+$/;
  if (!userRegex.test(firstName) || !userRegex.test(lastName)) {
    alert('Please input alphabet characters only');
    return false;
  } else {
    return true;
  }
}
