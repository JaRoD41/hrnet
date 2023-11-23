export function isAlphabet(str) {
  // I create a regex function to check if the user infos are valid
  const userRegex = /^[a-zA-Z ]+$/;
  if (!userRegex.test(str)) {
    return false;
  } else {
    return true;
  }
}

export function isNumber(str) {
  // I create a regex function to check if the user infos are valid
  const userRegex = /^[0-9]+$/;
  if (!userRegex.test(str)) {
    return false;
  } else {
    return true;
  }
}