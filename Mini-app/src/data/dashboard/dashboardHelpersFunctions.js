const { validationRules } = require("./dashboardData");

export const validateInputs = () => {
  let isValid = true;

  for (const key in validationRules) {
    const rule = validationRules[key];
    const value = form.value[key];

    if (!rule.validate(value)) {
      error.value[key] = rule.message;
      isValid = false;
    } else {
      error.value[key] = "";
    }
  }

  return isValid;
};
