import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { images } from '../configurations';
import { Box } from '@chakra-ui/react';

export default function Images() {
  return (
    <Box w="430px" h="430px" pt="5" pl="5" pr="5">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image) => (
          <img src={image} alt="image" key={image} />
        ))}
      </Carousel>
    </Box>
  );
}
