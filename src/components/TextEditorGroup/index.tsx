import React from "react";
import { FormField } from "grommet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextEditorGroup = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <FormField label={label} htmlFor={id} height={"160px"} width={"100%"}>
      <ReactQuill
        id={id}
        theme="snow"
        preserveWhitespace
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormField>
  );
};
