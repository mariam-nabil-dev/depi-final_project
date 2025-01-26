import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Swiper CSS
import "swiper/css/autoplay"; // Autoplay CSS
import "./Sponsors.css"; // Your custom CSS

const sponsors = [
  "https://logolook.net/wp-content/uploads/2021/01/Air-Canada-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/01/Boeing-Defense-Space-Security-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/04/Oman-Air-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/01/Emirates-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/01/Qatar-Airways-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/01/SpaceX-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/04/EasyJet-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/02/Etihad-Airways-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/04/Gulf-Air-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2023/10/Hilton-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2022/08/Four-Seasons-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/01/Sheraton-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2023/09/UNICEF-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2023/12/Blogger-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/06/Google-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/04/Trivago-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/03/Travelers-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2021/06/Facebook-Log%D0%BE.png",
  "https://logolook.net/wp-content/uploads/2021/06/Tiktok-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/06/Holland-America-Line-Logo-768x432.png",
  "https://logolook.net/wp-content/uploads/2024/06/Regent-Seven-Seas-Cruises-Logo-768x432.png",
];

const Sponsors = () => {
  return (
    <section className="sponsors-section text-center py-5">
      <Container>
        <h3 className="mb-4">Our Sponsors</h3>
        <Swiper
          modules={[Autoplay]} 
          loop={true} 
          spaceBetween={30} 
          grabCursor={true} 
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
          }}
          speed={1000} 
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: "40"
            },
            576: {
              slidesPerView: 3, 
            },
            768: {
              slidesPerView: 4, 
            },
            992: {
              slidesPerView: 5, 
            },
          }}
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <img
                src={sponsor}
                className="sponsor-img"
                alt={`Sponsor ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Sponsors;
