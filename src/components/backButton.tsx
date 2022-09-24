import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const BackButton: FC = () => {
  const router = useRouter();
  return (
    <Button aria-label='back to lists' variant='outline' onClick={() => router.back()}>
      戻る
    </Button>
  );
};
