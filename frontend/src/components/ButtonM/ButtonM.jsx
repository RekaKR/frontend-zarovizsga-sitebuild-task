import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  color: 'rgb(36, 45, 56)',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0 30px',
});

function ButtonM() {
  return (
    <MyButton>READ MORE</MyButton>
  )
}

export default ButtonM;
