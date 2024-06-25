import Image from "next/image";
import logo from "../asstes/logo.png";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function NavBar() {
  const navlogo = `https://res.cloudinary.com/dgkubiv6s/image/upload/v1714289732/logo_u7oijm.png`;
  return (
    <div className="  h-[84px] flex  items-center">
      <div className="flex w-full  px-[10.125rem]  ">
        {/* logo */}
        <div className=" flex items-center w-1/4">
          <Image src={navlogo} alt="logo" width={40} height={40} />
          <h2 className="ml-3 font-manrope text-black-B900  font-extrabold  text-xl  tracking-[.03em]">
            Ecommerce
          </h2>
        </div>
        {/* routes */}
        <ul className="flex items-center  w-2/5">
          {nav_link.map((item, index) => {
            {
              /* if it is first tag don't need margin left for that */
            }
            const firstIndexCheck = index === 0 ? "" : "ml-8";
            return (
              <li key={item._id} className={`nav-tag ${firstIndexCheck}`}>
                <Link href={item.link}>
                  <span className="flex  items-center">
                    {item.name}
                    {item?.sub_links?.length > 0 && (
                      <IoIosArrowDown className="ml-2" />
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* search */}
        <div className="flex w-2/6 justify-between">
          <div className="h-11  w-[65%] rounded-[6px] flex items-center border border-black-B100">
            <div className=" ml-2">
              <IoIosSearch className="text-2xl  text-black-B300" />
            </div>
            <input
              type="text"
              placeholder="Search products"
              className="pl-3 w-[80%] placeholder:tracking-[.03em] focus:outline-none"
            />
          </div>
          <div className="flex  w-[30%] items-center  justify-around">
            <HiOutlineShoppingCart className="text-2xl  text-black-B300" />
            <CgProfile className=" text-2xl  text-black-B300" />
          </div>
        </div>
      </div>
    </div>
  );
}

const nav_link = [
  {
    _id: 1,
    name: "Home",
    link: "/",
  },
  {
    _id: 2,
    name: "Categories",
    link: "/categories",
    sub_links: [
      {
        _id: 5,
        name: "Men",
        link: "/categories/men",
      },
    ],
  },
  {
    _id: 3,
    name: "About",
    link: "/about",
  },
  {
    _id: 4,
    name: "Contact",
    link: "/contact",
  },
];
