import React, { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target } = event;
    setValue((target as HTMLInputElement).value);
  };

  return {
    value: value,
    onChange: handleChange,
  };
}
