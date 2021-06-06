const validateEmail = str => {
  const response = {
    valid: true,
    message: ''
  };
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
  const valid = !!that && that.length > 0 && typeof that !== 'undefined';
  return {
    valid: valid,
    message: valid ? '' : 'This field is required'
  }
};

export { validateEmail, validateRequired  };