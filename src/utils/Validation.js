import strings from '../i18n/strings';

//regex for email
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

//regex for createpassword
let checkRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

//regex for fullName
let FullNamRegex = /^[a-zA-Z ]{2,40}$/;

// card regex
const CardNumberRegex = /^[0-9]{16}$/;

//expired dae regex
const expriredDate = /^(0[1-9]|1[0-2])\/?-([0-9]{4}|[0-9]{2})$/;

//expried cvv
const cvvRegex = /^[0-9]{3}$/;

const validateEmail = email => {
  if (!email) {
    return {
      status: false,
      msg: strings.regexEmail,
    };
  } else {
    return emailRegex.test(email)
      ? {status: true, msg: strings.blank}
      : {
          status: false,
          msg: strings.Invalid,
        };
  }
};

const validateFullName = fullname => {
  if (!fullname) {
    return {
      status: false,
      msg: strings.enterFullName,
    };
  } else {
    return FullNamRegex.test(fullname)
      ? {status: true, msg: strings.blank}
      : {
          status: false,
          msg: strings.FullNameRegex,
        };
  }
};

const passwordStrength = password => {
  if (!password) {
    return {
      status: false,
      msg: strings.enterPassword,
    };
  } else {
    return checkRegex.test(password)
      ? {status: true, msg: strings.StrongPassword}
      : {
          status: false,
          msg: strings.WeekPassword,
        };
  }
};

const validateCardNumber = CardNumber => {
  if (!CardNumber) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return CardNumberRegex.test(CardNumber)
      ? {status: true, msg: strings.blank}
      : {
          status: false,
          msg: strings.validCardNumber,
        };
  }
};
const validateDate = date => {
  if (!date) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return expriredDate.test(date)
      ? {status: true, msg: strings.blank}
      : {
          status: false,
          msg: strings.validDate,
        };
  }
};

const validateCVV = CVV => {
  if (!CVV) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return cvvRegex.test(CVV)
      ? {status: true, msg: strings.blank}
      : {
          status: false,
          msg: strings.validCvv,
        };
  }
};
export {
  validateEmail,
  validateFullName,
  passwordStrength,
  validateCardNumber,
  validateDate,
  validateCVV,
};
