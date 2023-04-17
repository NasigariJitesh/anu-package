/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Container,
  IconButton,
  OTPInput,
  SearchBar,
  TextField,
  TextFieldReferenceProps,
  Typography,
} from 'anu/lib';
import { FileUpload, FileUploadReferenceProps } from 'anu/lib/advanced';
import { FileDropZone } from 'anu/lib/advanced/file-upload/components';
import { useEffect, useRef, useState } from 'react';

/**
 *
 */
export default function Example() {
  const fuReference = useRef<FileUploadReferenceProps | null>(null);

  return (
    <Container>
      <FileUpload
        ref={fuReference}
        title='Upload'
        size='medium'
        category='regular'
        icon={{ name: 'delete' }}
        type='filled'
        multiple
        variant='file'
        onChange={(data: Blob | Blob[] | null) => {
          console.log(data);
        }}
      />

      <FileDropZone
        multiple
        variant='image'
        fileType={{ image: ['image/png', 'image/jpeg'] }}
        onChange={(data: Blob | Blob[] | null) => {
          console.log(data);
        }}
      >
        Upload here
      </FileDropZone>
    </Container>
  );
}
