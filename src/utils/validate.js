const validateEmail = str => {
  const response = {
    valid: true,
    message: ''
  };
  if (typeof str !== "string") {
    response.valid = false;
    response.message = 'Invalid value';
    return response
  }
  if (!str || str.length === '') {
    response.valid = false;
    response.message = 'This field is required';
  } else if (!/\S+@\S+\.\S+/.test(str)) {
    response.valid = false;
    response.message = 'Please enter a valid e-mail';
  }
  return response;
};

const validateRequired = that => {
  let valid = !!that && that.length > 0 && typeof that !== 'undefined';
  if (that && Object.keys(that).length > 0 && that.constructor === Object) {
    valid = true;
  }
  return {
    valid: valid,
    message: valid ? '' : 'This field is required'
  }
};

export { validateEmail, validateRequired  };
