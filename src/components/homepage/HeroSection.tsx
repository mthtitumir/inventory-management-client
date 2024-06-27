const HeroSection = () => {
  return (
    <div className="bg-sky-100">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 flex align-center justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold leading-relax">
              Organize inventory <br /> and process orders<br />
              <span className="text-sky-900">the simple way</span>
            </h1>
            <p className="text-gray-500">
              Effective inventory control drives business success. <br />{" "}
              Simplify your inventory tasks and boost sales with reduced effort.
            </p>
            <div className="flex  gap-3">
              <button className="bg-sky-600 border-main rounded-sm py-2 px-4 text-white text-center text-md">
                Try Demo Version
              </button>
              <button className="bg-sky-600 border-main rounded-sm py-2 px-4 text-white text-center text-md">
                Sign Up - It's Free
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-20">
          <img
            src="https://www.zoho.com/us/inventory/mobile-banner-img.png"
            alt=""
            className="w-[80%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
