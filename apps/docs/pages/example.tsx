/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import {
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
  Typography,
} from 'anu/lib';
import { FileUpload, FileUploadReferenceProps } from 'anu/lib/advanced';
import { DocumentResult } from 'expo-document-picker';
import { useRef, useState } from 'react';

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
        variant='image'
        previewStyle='list'
        multiple
        fileType='image/*'
        onUpload={(data: Blob | Blob[]) => {
          console.log(data);
        }}
      />
    </Container>
  );
}
