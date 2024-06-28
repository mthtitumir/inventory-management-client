const Footer = () => {
  return (
    <section className="bg-slate-100 p-12">
      <div className="c-auto">
        <h1 className="text-center">©{new Date().getFullYear()} All Rights Reserved by <a href="https://mth-titumir.vercel.app/" target="_blank" className="font-semibold text-sky-800 underline">M. T. H. Titumir</a></h1>
      </div>
    </section>
  )
}

export default Footer