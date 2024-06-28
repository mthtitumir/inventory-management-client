import { IconType } from "react-icons";
import { Icon } from "../../icons";

const SectionThree = () => {
  const data: {
    icon: IconType;
    title: string;
    desc: string;
    buttonText: string;
    buttonLink: string;
  }[] = [
    {
      icon: Icon.sales,
      title: "Simplify Your Sales",
      desc: "Sort your stock, develop compelling price offers, and streamline your production process efficiently.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      icon: Icon.discount,
      title: "Craft Discounts That Drive Sales",
      desc: "Create compelling discounts, attract customers with special offers, and boost your sales effortlessly",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      icon: Icon.inventory,
      title: "Master Your Inventory Effortlessly",
      desc: "Track stock levels, organize items efficiently, and streamline your inventory management to ensure you never miss a sale.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ];
  return (
    <section className="py-28 bg-sky-100">
      <div className="c-auto flex flex-col gap-5">
        <h1 className="text-4xl text-center">LET'S BEGIN THE RIGHT WAY</h1>
        <div className=" text-center">
          <h1>Optimize the way you manage your inventory</h1>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {data?.map((d, index) => (
            <div
              key={index}
              className="p-12 flex flex-col gap-3 rounded-lg bg-slate-50 hover:bg-slate-200 col-span-12 md:col-span-6 lg:col-span-4"
            >
                <div className="mb-3">
                    <d.icon size={36} className="text-sky-500" />
                </div>
              <h1 className="text-xl font-semibold">{d.title}</h1>
              <h1>{d.desc}</h1>
              <a
                href={d.buttonLink}
                className="flex items-center gap-2 text-sky-700"
              >
                {d.buttonText}
                <Icon.ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
