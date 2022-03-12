import React from "react";
import { Box } from "grommet";

import { TextEditorGroup, TextInputGroup } from "../../../../components";

type Props = {
  title: string;
  desc: string;
  onChange: (e: any) => void;
  onDescChange: (desc: string) => void;
};

const DescriptionSection = ({ title, desc, onChange, onDescChange }: Props) => {
  return (
    <Box align="center" pad="large">
      <TextInputGroup
        id={"title"}
        label={"Title"}
        placeholder={"Short sleeve t-shirt"}
        value={title}
        onChange={onChange}
      />
      <TextEditorGroup
        id={"desc"}
        label={"Description"}
        value={desc}
        onChange={onDescChange}
      />
    </Box>
  );
};

export default DescriptionSection;
