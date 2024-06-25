"use client";
import { useState } from "react";
import MultiRangeSlider from "./multirangeSlider";

export default function Categories() {
  // color slider
  const [color, setcolor] = useState(colorCode);
  // set size
  const [size, setsize] = useState(dressSize);

  const handlerColor = (colorName) => {
    setcolor((prev) => {
      return prev.map((item) => {
        if (item.color === colorName) {
          return {
            ...item,
            isCheck: true,
          };
        } else {
          return {
            ...item,
            isCheck: false,
          };
        }
      });
    });
  };

  const handlerSizeChange = (size) => {
    setsize((prev) => {
      return prev.map((item) => {
        if (item.size === size) {
          return {
            ...item,
            isCheck: true,
          };
        } else {
          return {
            ...item,
            isCheck: false,
          };
        }
      });
    });
  };

  const handlerRangePrice = (data) => {
    // you can get multi ranger data
    const { min, max } = data || {};
  };

  return (
    <div className="w-1/4 h-[760px] border border-black-B100 rounded-[6px]   pl-[18px]  pr-[30px] pb-[71px]">
      <TitleStyle title="Categories" />
      <div className=" mt-3">
        {categories_link.map((item) => {
          return (
            <div key={item._id} className=" py-3 border-b border-b-white-W200">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-[18px] h-[18px]  border-black-B100 rounded focus:ring-black-B100"
              />
              <label
                for="checked-checkbox"
                className="ml-3 font-inter font-normal text-sm text-black-B600 tracking-[.03em]">
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      <TitleStyle title="Color" />
      <div className="mt-3">
        <div className="flex  items-center">
          {color.map((item) => {
            if (item.isCheck) {
              return (
                <div
                  key={item.id}
                  className="w-8 h-8 border border-black-B900  rounded-full">
                  <div
                    className={`w-6 h-6 mt-[3px] ml-[3px] rounded-full ${item.color}`}
                    onClick={() => handlerColor(item.color)}></div>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className={` ml-[${
                    item.id === 1 ? "0px" : "10px"
                  }] mr-[10px] w-6 h-6 rounded-full  ${item.color}`}
                  onClick={() => handlerColor(item.color)}></div>
              );
            }
          })}
        </div>
      </div>
      <TitleStyle title="Size" />

      <div className="mt-3">
        <div className="flex flex-wrap mr-5">
          {size.map((item, index) => {
            let isSizeMarginTop = [];

            for (let i = 1; i < size.length; i++) {
              isSizeMarginTop.push(2 * 2 * i);
            }

            if (item.isCheck) {
              return (
                <div
                  key={item.id}
                  onClick={() => handlerSizeChange(item.size)}
                  className={`${
                    isSizeMarginTop.includes(index) ? "mt-2" : ""
                  } w-10 h-10 mr-2 flex justify-center items-center rounded-[4px] border border-black-B900`}>
                  <h5 className="font-inter font-medium text-xs  text-black-B900">
                    {item.size}
                  </h5>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  onClick={() => handlerSizeChange(item.size)}
                  className={`${
                    isSizeMarginTop.includes(index) ? "mt-2" : ""
                  } w-10 h-10  mr-2 flex justify-center items-center rounded-[4px] border border-black-B100`}>
                  <h5 className=" font-inter font-medium text-xs  text-black-B900">
                    {item.size}
                  </h5>
                </div>
              );
            }
          })}
        </div>
      </div>

      <TitleStyle title="Price" />

      <div className="mt-6">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={(data) => handlerRangePrice(data)}
        />
      </div>
    </div>
  );
}

export function TitleStyle({ title }) {
  return (
    <div className="mt-6 ">
      <h2 className=" font-inter font-medium text-sm tracking-[.03em]">
        {title}
      </h2>
    </div>
  );
}

const categories_link = [
  {
    _id: 1,
    name: "Perfume",
  },
  {
    _id: 2,
    name: "Trousers",
  },
  {
    _id: 3,
    name: "Shoes",
  },
  {
    _id: 4,
    name: "Handbag",
  },
  {
    _id: 5,
    name: "Hat",
  },
  {
    _id: 6,
    name: "Thermos",
  },
];

const colorCode = [
  {
    id: 1,
    color: "bg-blue-B400",
    isCheck: true,
  },
  {
    id: 2,
    color: "bg-yellow-Y400",
    isCheck: false,
  },
  {
    id: 3,
    color: "bg-green-G400",
    isCheck: false,
  },
  {
    id: 4,
    color: "bg-blue-B900",
    isCheck: false,
  },
];

const dressSize = [
  {
    id: 1,
    size: "S",
    isCheck: true,
  },
  {
    id: 2,
    size: "M",
    isCheck: false,
  },
  {
    id: 3,
    size: "L",
    isCheck: false,
  },
  {
    id: 4,
    size: "XL",
    isCheck: false,
  },
  {
    id: 5,
    size: "XXL",
    isCheck: false,
  },
];
