import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const data: string[] = [
    "Precise inventory tracking with barcode and RFID technology",
    "Monitor items by batches and serial numbers",
    "Flexible selling with unit of measure conversions",
    "Get notified of low stock with reorder alerts",
    "Update inventory quantities easily",
    "Set up and apply sales tax rules",
    "Create quick and detailed reports",
    "Define and manage user roles and permissions",
    "Enhance collaboration with customer and vendor portals",
    "Conduct transactions in multiple currencies and countries",
  ];
  const navigate = useNavigate();
  return (
    <section className="relative">
      <div className="bg-sky-500">
        <div className="c-auto px-12 pt-24 pb-48">
          <div className="flex gap-5 items-center">
            <div>
              <h1 className="mb-5">AT YOUR FINGERTIPS</h1>
              <h1 className="text-white text-5xl">
                Know your inventory and grow your business
              </h1>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <div className="w-[80%]">
                <button className="w-full bg-gradient-to-r from-[#0A192F] to-sky-800 text-slate-100 rounded-md py-3 px-5 text-center text-lg">
                  TRY DEMO VERSION
                </button>
              </div>
              <div className="text-right">
                <button
                  onClick={() => navigate("/register")}
                  className="w-[80%] bg-gradient-to-r from-sky-800 to-[#0A192F] text-slate-100 rounded-md py-3 px-5 text-center text-lg"
                >
                  SIGN UP - IT'S FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-auto -mt-24 rounded-xl custom-box-shadow">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img
              className="rounded-bl-xl rounded-tl-xl"
              src="https://www.zoho.com/us/inventory/know-zom.webp"
              alt=""
            />
          </div>
          <div className="bg-white col-span-8 p-12 rounded-br-xl rounded-tr-xl">
            <div className="flex gap-8">
              <ul className="flex flex-col gap-8">
                {data.slice(0, 5).map((d, index) => (
                  <li key={index} className="text-md">
                    <span className="bg-sky-300 px-2 py-1 rounded-full text-sm">
                      {" "}
                      ✔
                    </span>{" "}
                    {d}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-8">
                {data.slice(5, 10).map((d, index) => (
                  <li key={index} className="text-md">
                    <span className="bg-sky-300 px-2 py-1 rounded-full text-sm">
                      {" "}
                      ✔
                    </span>{" "}
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
