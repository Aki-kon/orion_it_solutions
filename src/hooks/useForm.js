import React, { useState } from "react";

const useForm = (init) => {
  const [values, setValues] = useState(init);
  //   const { name, description, email } = values;
  const Change = (target) => {
    const { value, name } = target;
    setValues({ ...values, [name]: value });
  };

  return { values, Change };
};

export default useForm;
