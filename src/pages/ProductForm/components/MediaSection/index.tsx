import React, { useState } from "react";
import {
  Dropzone,
  FileItem,
  FileItemContainer,
  FileValidated,
} from "@dropzone-ui/react";
import { Box, Heading } from "grommet";

import "./index.css";

type Props = {
  onMediaUpload: (files: FileValidated[]) => void;
};

const MediaSection = ({ onMediaUpload }: Props) => {
  const [files, setFiles] = useState<any>(null);

  const updateFiles = (files: FileValidated[]) => {
    setFiles(files);
    onMediaUpload(files);
  };

  const onDelete = (id: any) => {
    const updatedFiles = files.filter((file: FileValidated) => file.id !== id);
    setFiles(updatedFiles);
    onMediaUpload(updatedFiles);
  };

  return (
    <Box align={"center"} pad={"large"}>
      <Heading alignSelf={"start"} level={4}>
        Media
      </Heading>
      {files && (
        <FileItemContainer>
          {files.map((file: FileValidated) => (
            <FileItem {...file} key={file.id} onDelete={onDelete} preview />
          ))}
        </FileItemContainer>
      )}
      <Dropzone
        onChange={updateFiles}
        value={files}
        clickable={true}
        onClean={() => setFiles(null)}
        accept={".png,image/*"}
        label={"Add Files or drop files to upload"}
        minHeight={"195px"}
        maxHeight={"500px"}
        disableScroll
      />
    </Box>
  );
};

export default MediaSection;
