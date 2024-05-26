import React from 'react';
import { WordCardProps } from './WordCardInt';
import classes from './WordCard.module.scss';
import { TextField } from '@mui/material';
import { textFieldSX } from './WordCardSX';

const WordCard: React.FC<WordCardProps> = (props) => {
  const { word, definition } = props;
  const { wordCard, wordCard__inner } = classes;
  return (
    <div className={wordCard}>
      <div className={wordCard__inner}>
        <div>
          <TextField variant='filled' sx={textFieldSX} />
          <TextField /> 
        </div>
        <div>sdfsd</div>
      </div>
    </div>
  );
};

export { WordCard };
