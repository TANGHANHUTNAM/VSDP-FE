import { Carousel } from "antd";
import { ConfigProvider } from "antd";
import vsdp1 from "../../assets/images/vsdp1.jpg";
import vsdp2 from "../../assets/images/vsdp2.jpg";
import vsdp3 from "../../assets/images/vsdp3.jpg";
import vsdp4 from "../../assets/images/vsdp4.jpg";
import vsdp5 from "../../assets/images/vsdp5.jpg";

const CarouselComponent = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          arrowOffset: 20,
          arrowSize: 40,
          dotWidth: 10,
          dotActiveWidth: 16,
        },
      },
    }}
  >
    <Carousel
      autoplay
      effect="fade"
      autoplaySpeed={3000}
      arrows
      infinite={true}
      speed={2000}
    >
      <img
        src={vsdp1}
        alt="Image 1"
        className="h-[500px] w-full object-cover"
      />
      <img
        src={vsdp2}
        alt="Image 2"
        className="h-[500px] w-full object-cover"
      />
      <img
        src={vsdp3}
        alt="Image 3"
        className="h-[500px] w-full object-cover"
      />
      <img
        src={vsdp4}
        alt="Image 4"
        className="h-[500px] w-full object-cover"
      />
      <img
        src={vsdp5}
        alt="Image 5"
        className="h-[500px] w-full object-cover"
      />
    </Carousel>
  </ConfigProvider>
);
export default CarouselComponent;
