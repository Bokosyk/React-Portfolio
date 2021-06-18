import React from 'react';
import { Document, Page } from 'react-pdf';

export default function Test() {
  return (
    <Document file={"https://drive.google.com/file/d/1zmJaGVMgNYjX-ToCFSBRtp29Tt3Q_X_i/view?usp=sharing"}>
      <Page pageNumber={1} />
    </Document>
  );
}