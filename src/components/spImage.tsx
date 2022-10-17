import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
type Props = {
  src: string;
  alt: string;
  type: 'horizon' | 'vertical';
};
const SpImage: FC<Props> = ({ src, alt, type = 'horizon' }) => {
  if (type === 'horizon') {
    return (
      <Center position='relative' w='100%' h={{ base: '280px', md: '600px', lg: '700px', xl: '700px' }} mb={2}>
        <Image src={src} alt={alt} layout='fill' objectFit='contain' />
      </Center>
    );
  }
  return (
    <Center position='relative' w='100%' h={{ base: '500px', md: '800px', lg: '900px', xl: '900px' }} mb={2}>
      <Image src={src} alt={alt} layout='fill' objectFit='contain' />
    </Center>
  );
};

export default SpImage;
