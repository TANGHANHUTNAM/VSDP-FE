import BodyLayout from "../../layouts/BodyLayout";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const FooterContent = () => {
  const { t } = useTranslation();
  return (
    <BodyLayout
      color={`bg-bgVH`}
      other={`border-t-2 border-solid border-black/20`}
    >
      <div className="flex flex-col flex-wrap gap-6 py-14 font-medium text-white md:flex-row md:gap-0">
        {/* col 1 */}
        <div className="md:w-4/12 md:p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">VietHope VSDP</h2>
            <p className="">{t("Footer.des")}</p>
            <div className="text-xl font-semibold">
              {t("Footer.title-location")}
            </div>
            <div className="">
              <FaMapLocationDot className="inline-block h-6 w-6" />
              <span className="ml-2">
                <b>USA:</b> 440 N Barranca Ave #9666 Covina, CA 91723
              </span>
            </div>
            <div className="">
              <FaMapLocationDot className="inline-block h-6 w-6" />
              <span className="ml-2">
                <b>VIETNAM:</b> 11 Le Ngo Cat St., Dist. 3 Ho Chi Minh City,
                Vietnam
              </span>
            </div>
            <div className="">
              <FaPhoneAlt className="inline-block h-6 w-6" />
              <span className="ml-2">
                <b>Phone:</b>{" "}
                <a href="tel:03-0485362" className="hover:text-green-400">
                  03-0485362
                </a>
              </span>
            </div>
            <div className="">
              <MdEmail className="inline-block h-6 w-6" />
              <span className="ml-2">
                <b>Email:</b>{" "}
                <a
                  href="mailto:info@viethope.org"
                  className="hover:text-green-400"
                >
                  info@viethope.org
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="md:w-3/12 md:p-4">
          <div className="flex w-full flex-col gap-4 md:mx-auto md:items-center">
            <div className="flex flex-col gap-2">
              <div className="connect text-left">
                <h2 className="text-2xl font-bold">
                  {t("Footer.title-connect")}
                </h2>
              </div>
              <span className="facebook">
                <a
                  href="https://www.facebook.com/VietHopeInc/"
                  className="flex items-center gap-1 hover:text-green-400"
                >
                  <RiFacebookBoxFill className="inline-block h-6 w-6" />
                  Facebook
                </a>
              </span>
              <span className="youtube">
                <a
                  href="https://www.youtube.com/channel/UCqB7AQRKkIMKl0nyRwtvZtw"
                  className="flex items-center gap-1 hover:text-green-400"
                >
                  <FaYoutube className="inline-block h-6 w-6" />
                  Youtube
                </a>
              </span>
              <span className="instagram">
                <a
                  href="https://www.instagram.com/viethope_inc/?hl=en"
                  className="flex items-center gap-1 hover:text-green-400"
                >
                  <FaInstagramSquare className="inline-block h-6 w-6" />
                  Instagram
                </a>
              </span>
              <span className="twitter">
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FVietHope"
                  className="flex items-center gap-1 hover:text-green-400"
                >
                  <FaSquareXTwitter className="inline-block h-6 w-6" />
                  Twitter
                </a>
              </span>
              <span className="linkedin">
                <a
                  href="https://www.linkedin.com/company/viethope/"
                  className="flex items-center gap-1 hover:text-green-400"
                >
                  <FaLinkedin className="inline-block h-6 w-6" />
                  Linkedin
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="md:w-5/12 md:p-4">
          <div className="map">
            <h2 className="mb-4 text-2xl font-bold">
              {" "}
              {t("Footer.title-map")}
            </h2>
            <div className="flex flex-col gap-1">
              <div className="rounded-sm">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9656139183754!2d106.68456110783187!3d10.776818996289789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f25ae9a7b25%3A0xdccf32f448e85607!2zMTEgTMOqIE5nw7QgQ8OhdCwgUGjGsOG7nW5nIDcsIFF14bqtbiAzLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1726474317597!5m2!1svi!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p> {t("Footer.Vietnam")}</p>
              </div>
              <div className="rounded-sm">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.5122810828127!2d-117.88126203836548!3d34.09010631105245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32859273c7a1b%3A0x3b01057b1170ed11!2s440%20N%20Barranca%20Ave%20%239666%2C%20Covina%2C%20CA%2091723%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1726474699179!5m2!1svi!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>{t("Footer.US")}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/contact-us"
              className="w-fit rounded-md bg-green-400 px-3 py-2 hover:bg-green-500 hover:text-black/60"
            >
              {t("Footer.title-button")}
            </Link>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default FooterContent;
