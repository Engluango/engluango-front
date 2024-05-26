import React from 'react';
import { TextField as TextFieldMU, TextFieldProps } from '@mui/material';

const TextField: React.FC<TextFieldProps> = ({ sx, variant }) => {
  return <TextFieldMU sx={sx} variant={variant} />;
};

export { TextField };
