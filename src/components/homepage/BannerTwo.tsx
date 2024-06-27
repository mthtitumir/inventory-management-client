const BannerTwo = () => {
  return (
    <section className="bg-slate-100 py-28">
      <div className="c-auto flex flex-col gap-5">
        <h1 className="text-6xl text-center">Real-Time Inventory Management</h1>
        <p className="text-center text-slate-500">Helping Over</p>
        <div className="flex justify-center items-center gap-10">
          <div>
            <h1 className="text-6xl text-sky-500">10000+</h1>
            <p className="text-center">Locations</p>
          </div>
          <div>
            <h1 className="text-6xl text-sky-500">60+</h1>
            <p className="text-center">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
