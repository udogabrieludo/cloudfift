import React from 'react';
import { CardOne, CardWrapper, CardTwo, CardThree, Image,Text, Footer} from './styles/grid-card';
import image1 from '../../assets/images/img1.svg'
import image3 from '../../assets/images/img3.svg'
import image2 from '../../assets/images/img2.svg'

const GridCard = () => {
  return (
      <CardWrapper>
        <CardOne>
            <Image src={image1} alt='image1' />
            <Footer>
               <Text align='center'> Product Analyst <span>@ Paystack</span></Text>
            </Footer>
        </CardOne>
        <CardTwo>
        <Image src={image3} alt='image2' />
        <Footer>
               <Text align='center'> Product Analyst <span>@ Paystack</span></Text>
            </Footer>
        </CardTwo>
        <CardThree>
        <Image src={image2} alt='image2' />
        <Footer>
               <Text align='center'> Securities Trader <span>@ Mckinnesy</span></Text>
            </Footer>
        </CardThree>
      </CardWrapper>
  )
};

export default GridCard;
