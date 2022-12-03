const ThreeColumnPreview = () => {
  return (
    <div className="w-3/4 flex flex-row rounded-lg overflow-hidden border-[1px] border-slate-500">
      {/* first column */}
      <div className=" bg-orange-500 px-5 py-10">
        <h2 className=" uppercase font-semibold text-3xl pb-8">sedans</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy, Ideal for cruising in the city or on your
          next road trip.
        </p>
        <button disabled="disabled" className=" capitalize bg-white rounded-full p-2 text-orange-500">
          learn more
        </button>
      </div>

      {/* second column */}
      <div className=" bg-emerald-700 px-5 py-10">
        <h2>sedans</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy, Ideal for cruising in the city or on your
          next road trip.
        </p>
        <button disabled="disabled" className=" capitalize bg-white rounded-full p-2 text-orange-500">
          learn more
        </button>
      </div>

      {/* third column */}
      <div className=" bg-green-900 px-5 py-10">
        <h2>sedans</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy, Ideal for cruising in the city or on your
          next road trip.
        </p>
        <button disabled="disabled" className=" capitalize bg-white rounded-full p-2 text-orange-500">
          learn more
        </button>
      </div>
    </div>
  );
};

export default ThreeColumnPreview;
