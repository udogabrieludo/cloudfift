import React from 'react';
import { Container,LineBox,ImgBox,Image} from './styles/fancy-image-card';

const FancyCard = ({image, height,width, size, maxWidth}) => {
  return (
    <Container width={width}>
    <LineBox  height={height} maxWidth={maxWidth}/>
    <ImgBox size={size}>
        <Image src={image}   alt='hero-image' />
       </ImgBox>
   </Container>
  )
};

export default FancyCard;
