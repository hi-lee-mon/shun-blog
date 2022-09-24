import { Button } from '@chakra-ui/react';
import React from 'react';

export const MoveHeaderPositionButton = () => {
  return (
    <Button as='a' position='fixed' bottom={4} right={24} href='#header'>
      ↑
    </Button>
  );
};
