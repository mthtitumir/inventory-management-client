import { IconType } from "react-icons";
import { Icon } from "../../icons";

const OurPartners = () => {
  const data: { icon: IconType; name: string }[] = [
    {
      icon: Icon.wooCom,
      name: "",
    },
    {
      icon: Icon.bigCom,
      name: "BigCommerce",
    },
    {
      icon: Icon.facebook,
      name: "Facebook",
    },
    {
      icon: Icon.insta,
      name: "Instagram",
    },
    {
      icon: Icon.shopify,
      name: "Shopify",
    },
    {
      icon: Icon.stripe,
      name: "",
    },
    {
      icon: Icon.etsy,
      name: "Etsy",
    },
    {
      icon: Icon.ebay,
      name: "Ebay",
    },
    {
      icon: Icon.amazon,
      name: "Amazon",
    },
    {
      icon: Icon.salesForce,
      name: "Sales Force",
    },
  ];
  return (
    <section className="bg-sky-300">
      <div className="c-auto py-24 px-12">
        <h1 className="text-5xl text-center mb-5">Our Partners</h1>
        <div className="grid gap-5 grid-cols-10">
          {data?.map((d, index) => (
            <div key={index} className="col-span-2 flex items-center justify-center gap-3 min-w-[120px] border-main p-3 rounded-md shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-800 text-sky-600">
              <d.icon size={30} />
              <p className="text-xl">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
