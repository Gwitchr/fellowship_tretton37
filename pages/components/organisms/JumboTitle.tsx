function JumboTitle({title}){
  return <section className="col-start-1 row-start-1 flex">
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
      <div className="relative col-span-3 row-span-2">

        <img src="https://source.unsplash.com/SBK40fdKbAg/800x600" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100"/>
      </div>
      <div className="relative z-10 col-start-1 row-start-1 px-4">
        <h2 className="text-xl font-bold text-white">
          {title||''}
        </h2>
      </div>
    </div>
  </section>
}

export default JumboTitle
