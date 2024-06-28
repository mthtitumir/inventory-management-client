const SectionTwo = () => {
  const data = [
    { number: 50000, name: "Companies" },
    { number: 10000, name: "Locations" },
    { number: 100, name: "Countries" },
  ];
  return (
    <section className="bg-slate-100 py-28">
      <div className="c-auto flex flex-col gap-5">
        <h1 className="text-6xl text-center">Real-Time Inventory Management</h1>
        <p className="text-center text-slate-500">Helping Over</p>
        <div className="flex justify-center items-center gap-10">
          {data?.map((d, index) => (
            <div key={index}>
              <h1 className="text-6xl text-sky-900">{d.number}<sup>+</sup></h1>
              <p className="text-center">{d.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
