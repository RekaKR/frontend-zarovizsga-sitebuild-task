import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  color: 'rgb(36, 45, 56)',
  margin: '20px 0 0 -5px',
  paddingRight: 30,
  fontWeight: 'bold',
  fontStyle: '"Open Sans", sans-serif',
  fontWeight: 700,
  fontSize: '20px',
  letterSpacing: 4,
});

function ButtonM() {
  return (
    <MyButton>READ MORE</MyButton>
  )
}

export default ButtonM;
