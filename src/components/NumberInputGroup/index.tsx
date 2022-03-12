import React from "react";
import { FormField, TextInput } from "grommet";

type Props = {
  id: string;
  label: string;
  value: number;
  onChange: (e: any) => void;
};

export const NumberInputGroup = ({ id, label, value, onChange }: Props) => {
  return (
    <FormField label={label} htmlFor={id} width={"100%"}>
      <TextInput
        id={id}
        plain={false}
        type={"number"}
        min={0}
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
};
