import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sky-200 pt-12">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 flex align-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="text-5xl font-bold">
              <h1>Organize Inventory</h1>
              <h1 className="my-3">Process Sales</h1>
              <h1 className="text-sky-900">The Simple Way</h1>
              {/* <h1>
                Organize inventory <br /> and process orders
                <br />
                <span className="text-sky-900">the simple way</span>
              </h1> */}
            </div>
            <p className="text-gray-500">
              Effective inventory control drives business success. <br />{" "}
              Simplify your inventory tasks and boost sales with reduced effort.
            </p>
            <div className="flex  gap-3">
              <button className="bg-gradient-to-r from-[#0A192F] to-sky-800 text-slate-100 rounded-md py-2 px-5 text-center text-lg">
                TRY DEMO VERSION
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-sky-800 to-[#0A192F] text-slate-100 rounded-md py-2 px-5 text-center text-lg"
              >
                SIGN UP - IT'S FREE
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
