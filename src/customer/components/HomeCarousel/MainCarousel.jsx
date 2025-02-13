import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => <img className='cursor-pointer' src={item.image} alt='index' role='presentation' />)
    return (

        <AliceCarousel
            items={items}
            autoPlay
            disableButtonsControls
            autoPlayInterval={1000}
            infinite
        />

    )
}

export default MainCarousel
