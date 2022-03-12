import React from "react";
import { Box, FormField, TextInput } from "grommet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  title: string;
  desc: any;
  onChange: (e: any) => void;
  onDescChange: (desc: string) => void;
};

const DescriptionSection = ({ title, desc, onChange, onDescChange }: Props) => {
  return (
    <Box align="center" pad="large">
      <FormField label="Title" htmlFor="title" width={"100%"}>
        <TextInput
          id="title"
          plain={false}
          placeholder="Short sleeve t-shirt"
          value={title}
          onChange={onChange}
        />
      </FormField>
      <FormField
        label="Description"
        htmlFor="desc"
        height={"200px"}
        width={"100%"}
      >
        <ReactQuill
          id="desc"
          theme="snow"
          preserveWhitespace
          value={desc}
          onChange={onDescChange}
        />
      </FormField>
    </Box>
  );
};

export default DescriptionSection;
