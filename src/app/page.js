import Categories from "../../components/category";

import NavBar from "../../components/navbar";
import { IoIosArrowForward } from "react-icons/io";
import ProductSection from "../../components/product.product";
import NewsLatter from "../../components/newslatter";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <>
      <nav>
        {/* get offer line */}
        <div className="h-10 bg-black-B900 flex justify-center  items-center">
          <h3 className="font-inter  font-normal text-sm  text-white-W100 tracking-[.03em]">
            Get 25% OFF on your first order.
          </h3>
          <h3 className=" ml-2 font-inter  font-medium text-sm  text-white-W100 tracking-[.01em]">
            Order Now
          </h3>
        </div>
        {/* navigation route */}
        <NavBar />
      </nav>
      <main>
        <div className=" h-16 bg-white-W100 flex items-center w-full  px-[10.125rem]">
          <h2 className=" font-inter font-medium text-sm text-black-B500">
            Ecommerce
          </h2>
          <span>
            <IoIosArrowForward className=" text-black-B400 text-sm mx-2" />
          </span>
          <h2 className="font-inter font-medium text-sm text-black-B900">
            Search
          </h2>
        </div>
        {/* here main body part */}
        <div className="mt-8 px-[10.125rem] flex justify-between">
          {/* category */}
          <Categories />
          {/* product part */}
          <ProductSection />
        </div>
        <NewsLatter />
        <Footer />
      </main>
    </>
  );
}
