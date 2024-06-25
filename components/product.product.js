import Image from "next/image";
import { TitleStyle } from "./category";
import { RxCross2 } from "react-icons/rx";
import { TfiAngleDown } from "react-icons/tfi";
import ImageOne from "../asstes/img/shirt1.png";
import ImageTwo from "../asstes/img/shirt2.png";
import ImageThree from "../asstes/img/shirt3.png";
import ImageFour from "../asstes/img/shirt4.png";
import ImageFive from "../asstes/img/shirt5.png";
import ImageSix from "../asstes/img/shirt6.png";
import ImageSeven from "../asstes/img/shirt7.png";
import ImageEight from "../asstes/img/shirt8.png";
import ImageNine from "../asstes/img/shirt9.png";
import { PaginationDemo } from "./pagination.product";

export default function ProductSection() {
  return (
    <div className=" w-3/4   pl-7">
      <div className="mr-4">
        {/* filter */}
        <TitleStyle title="Applied Filters:" />

        {/* result summary */}
        <div className=" mt-3 flex flex-wrap">
          <div className="flex justify-center items-center border border-black-B100 w-[111px] h-[36px] rounded-[100px]">
            <h5 className=" font-inter font-medium text-xs  text-black-B900">
              Perfume
            </h5>
            <RxCross2 className=" ml-[14px] text-black-B500" />
          </div>
          <div className="ml-3 flex justify-center items-center border border-black-B100 w-[111px] h-[36px] rounded-[100px]">
            <h5 className=" font-inter font-medium text-xs  text-black-B900">
              Size : M
            </h5>
            <RxCross2 className=" ml-[14px] text-black-B500" />
          </div>
        </div>

        <div className=" my-6 flex justify-between flex-wrap">
          <div>
            <p className=" font-inter text-xs text-black-B500 tracking-[.03em]">
              Showing 1-9 of 36 Results
            </p>
          </div>
          <div className="flex items-center">
            <p className=" mr-2 font-inter text-xs text-black-B500 tracking-[.03em]">
              SORT BY
            </p>
            <TfiAngleDown className="font-inter text-xs text-black-B500" />
          </div>
        </div>

        {/* product list */}
        {/* flex flex-wrap justify-between */}
        {/*  grid grid-cols-3 gap-x-6 gap-y-10 */}
        <div className=" grid grid-cols-3 gap-x-6 gap-y-10">
          {ProductListItem.map((item) => {
            return (
              <div className="" key={item.id}>
                <div className=" relative w-full h-[312px]">
                  <Image
                    src={item.image}
                    alt="shirt one"
                    layout="fill"
                    objectFit="contain"
                    className=" bg-white-W100"
                  />
                </div>
                <div className=" mt-6">
                  <p className=" font-inter font-medium text-sm text-black-B900">
                    {item.title}
                  </p>
                  <div className=" flex   items-center  mt-[13px]">
                    <div className="flex justify-center items-center border border-black-B100 w-[89px] h-[28px] rounded-[100px]">
                      <h5 className=" font-inter font-medium text-xs  text-black-B900">
                        In Stock
                      </h5>
                    </div>
                    <p className="  ml-[16px] font-inter text-xs text-black-B500 tracking-[.03em]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* pagination */}
        <div className=" mt-[64px] mb-[128px]">
          {" "}
          <PaginationDemo />{" "}
        </div>
      </div>
    </div>
  );
}

const ProductListItem = [
  {
    id: 1,
    image: ImageOne,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 2,
    image: ImageTwo,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 3,
    image: ImageThree,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 4,
    image: ImageFour,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 5,
    image: ImageFive,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 6,
    image: ImageSix,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 7,
    image: ImageSeven,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 8,
    image: ImageEight,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
  {
    id: 9,
    image: ImageNine,
    title: "Classic Monochrome Tees",
    price: "$35.00",
  },
];
