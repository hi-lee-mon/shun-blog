import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const BackButton: FC = () => {
  const router = useRouter();
  return (
    <Button alia-label='戻る' onClick={() => router.back()}>
      戻る
    </Button>
  );
};
