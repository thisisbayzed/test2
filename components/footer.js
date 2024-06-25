import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const footerLogo = `https://res.cloudinary.com/dgkubiv6s/image/upload/v1714289715/footer_xipvbk.png`;
  return (
    <footer>
      <div className="   px-[10.125rem]">
        <div className="flex border-b border-white-W100">
          <div className=" w-1/4  mb-[102px]">
            <div className=" mt-24 flex">
              <Image src={footerLogo} width={44} height={44} alt="footer" />
              <h1 className="  ml-4 font-manrope  font-extrabold text-2xl  text-black-B900">
                Ecommerce
              </h1>
            </div>
            <p className=" mt-6 font-inter font-normal text-sm text-black-B500">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className=" flex mt-[34px] ">
              <FaGithub className="text-2xl text-black-B500" />
              <IoLogoInstagram className="text-2xl text-black-B500 ml-[26px]" />
              <FaYoutube className="text-2xl text-black-B500 ml-[26px]" />
            </div>
          </div>
          <div className=" w-2/4 mt-[79px] flex  justify-evenly">
            <div>
              <h2 className=" font-inter font-medium  text-sm text-black-B300">
                SUPPORT
              </h2>
              <div className="mt-10">
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  FAQ
                </p>
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  Terms of use
                </p>
                <p className=" mt-4 font-inter  font-medium text-sm text-black-B500">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div>
              <h2 className=" font-inter font-medium  text-sm text-black-B300">
                COMPANY
              </h2>
              <div className="mt-10">
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  About us
                </p>
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  Contact
                </p>
                <p className=" mt-4 font-inter  font-medium text-sm text-black-B500">
                  Careers
                </p>
              </div>
            </div>
            <div>
              <h2 className=" font-inter font-medium  text-sm text-black-B300">
                SHOP
              </h2>
              <div className="mt-10">
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  My Account
                </p>
                <p className="mt-4 font-inter  font-medium text-sm text-black-B500">
                  Checkout
                </p>
                <p className=" mt-4 font-inter  font-medium text-sm text-black-B500">
                  Cart
                </p>
              </div>
            </div>
          </div>
          <div className=" w-1/4 mt-[79px] ">
            <h2 className="font-inter font-medium  text-sm text-black-B300 text-center">
              ACCEPTED PAYMENTS
            </h2>
            <div className=" mt-10 flex justify-between">
              {cardTypes.map((item) => {
                return (
                  <div key={item.id} className=" relative  w-[30%] h-8">
                    <Image
                      src={item.name}
                      alt="mastercard"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" my-7 text-center ">
        <h3 className=" font-inter font-normal text-sm text-black-B500">
          &#169; 2023 DevCut.All rights reserved
        </h3>
      </div>
    </footer>
  );
}

const cardTypes = [
  {
    id: 1,
    name: "https://res.cloudinary.com/dgkubiv6s/image/upload/v1714289670/mastercard_v399dz.png",
  },
  {
    id: 2,
    name: "https://res.cloudinary.com/dgkubiv6s/image/upload/v1714289670/amex_nrpjub.png",
  },
  {
    id: 3,
    name: "https://res.cloudinary.com/dgkubiv6s/image/upload/v1714289671/visa_vmbvgb.png",
  },
];
