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
      ar
      autoplay
      autoplaySpeed={3000}
      arrows
      infinite={true}
      className=""
    >
      <img
        src={vsdp1}
        alt="Image 1"
        className="w-full object-cover h-[500px]"
      />
      <img
        src={vsdp2}
        alt="Image 2"
        className="w-full object-cover h-[500px]"
      />
      <img
        src={vsdp3}
        alt="Image 3"
        className="w-full object-cover h-[500px]"
      />
      <img
        src={vsdp4}
        alt="Image 4"
        className="w-full object-cover h-[500px]"
      />
      <img
        src={vsdp5}
        alt="Image 5"
        className="w-full object-cover h-[500px]"
      />
    </Carousel>
  </ConfigProvider>
);
export default CarouselComponent;
