import { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = ({ testimonialsPromise }) => {
    const reviews = use(testimonialsPromise);
    // console.log(reviews);
    return (
        <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className="text-3xl text-center font-bold my-8">Review</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta, perspiciatis esse eius praesentium similique asperiores quasi veniam repellat architecto repellendus, deserunt accusantium, debitis ipsa. Expedita possimus facilis voluptas deserunt.</p>
            </div>


            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <TestimonialCard review={review}></TestimonialCard>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;