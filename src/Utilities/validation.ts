export const isEmail = (str: string): boolean => {
  const regex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.test(str);
};

export const isNumber = (str: string): boolean => {
  const regex = new RegExp(/^\d*$/);
  return regex.test(str);
};

export const isMobilePhoneNumber = (str: string): boolean => {
  // const regex = new RegExp(/^\+?(?:\d{1,4}[\. -]?){1,10}$/);
  const trimStr = str.replace(/\s/g, '');
  const regex = new RegExp(/^(0|(00|\+)33)[67][0-9]{8}$/);
  return regex.test(trimStr);
};


export const isPhoneNumber = (str: string): boolean => {
  // const regex = new RegExp(/^\+?(?:\d{1,4}[\. -]?){1,10}$/);
  const trimStr = str.replace(/\s/g, '');
  const regex = new RegExp(/^(0|(00|\+)33)[123459][0-9]{8}$/);
  return regex.test(trimStr);
};


export const isPassword = (str: string): boolean => {
  const regex = new RegExp(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/);
  return regex.test(str);
};



// RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
// @[]^_!"#$%&'()*+,-./:;{}<>=|~?