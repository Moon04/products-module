import React from "react";
import { FormField, TextInput } from "grommet";

type Props = {
  id: string;
  label: string;
  placeholder: any;
  value: string;
  onChange: (e: any) => void;
};

export const TextInputGroup = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <FormField label={label} htmlFor={id} width={"100%"}>
      <TextInput
        id={id}
        plain={false}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
};
