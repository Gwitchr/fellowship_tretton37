function JumboTitle({ title, subtitle }) {
  return (
    <section className="col-start-1 row-start-1 sm:col-span-2 flex">
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-6">
        <div className="relative col-start-1 row-start-1 row-span-2 col-span-3 ">
          <img
            src="https://source.unsplash.com/SBK40fdKbAg/800x600"
            alt=""
            className="absolute inset-0 w-full h-full object-cover bg-gray-100"
          />
        </div>
        <div className="relative z-10 col-start-1 col-span-3 row-span-2 row-start-1 px-4 pt-40 sm:pt-60 md:pt-80  bg-gradient-to-tr from-blue-800 flex items-center justify-center flex-col border-b-4 border-green-400 pb-5 text-center">
          <h2
            className="text-5xl
          font-mono font-bold text-green-400 text-white "
          >
            {title || ""}
          </h2>
          <p className="text-white">{subtitle || ""}</p>
        </div>
      </div>
    </section>
  );
}

export default JumboTitle;
