
function SearchBar({
  handleSubmit,
  handleSearch,
  search,
  handleSortByName,
  sortByName,
  handleSortByOffice,
  sortByOffice
}) {
  return (
    <section className="row-start-2 col-span-2 flex justify-center mt-5 ">
      <div className="container bg-gray-100 rounded flex justify-center p-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            className="form-input px-4 rounded-md border-gray-300"
          />
          <button className="ml-2 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            Search
          </button>
          <div className="ml-2">
            <label htmlFor="">
              Order by name
              <input
                onChange={handleSortByName}
                checked={sortByName}
                type="checkbox"
                className="ml-3 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="ml-2">
            <label htmlFor="">
              Order by Office
              <input
                onChange={handleSortByOffice}
                checked={sortByOffice}
                type="checkbox"
                className="ml-3 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
