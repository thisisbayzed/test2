export default function NewsLatter() {
  return (
    <div className=" h-[200px] bg-white-W100 px-[10.125rem] flex  items-center">
      <div className=" flex justify-between w-full items-center">
        <div className=" w-2/5">
          <h1 className=" font-inter font-bold text-2xl  text-black-B900">
            Join Our Newsletter
          </h1>
          <p className=" mt-6 font-inter font-normal text-sm text-black-B500">
            We love to surprise our subscriobers with occasional gifts
          </p>
        </div>
        <div className=" w-2/5">
          <div className="flex items-center  justify-end">
            <input
              className=" border-2 border-black-B100 rounded-[6px] px-4 py-2 text-sm text-black-B100"
              type="text"
              placeholder="Enter your email address"
            />
            <button className=" ml-2 bg-black-B900 text-white-W100 px-4 py-2 text-sm rounded-[4px]">
              <p className=" font-inter font-medium text-sm text-white-W900">
                {" "}
                Subscribe
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
