import React from "react";
import { FormField, TextInput } from "grommet";

type Props = {
  id: string;
  label: string;
  icon?: JSX.Element;
  pattern?: RegExp;
  placeholder?: string;
  value: string | number;
  onChange: (e: any) => void;
};

export const TextInputGroup = ({
  id,
  label,
  icon,
  pattern,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <FormField label={label} htmlFor={id} width={"100%"}>
      <TextInput
        id={id}
        plain={false}
        icon={icon}
        placeholder={placeholder}
        value={pattern ? (pattern.test(String(value)) ? value : "") : value}
        onChange={onChange}
      />
    </FormField>
  );
};
