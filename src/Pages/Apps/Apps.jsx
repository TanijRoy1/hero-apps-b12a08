import React, { useContext } from "react";
import AllApps from "../../Components/AllApps/AllApps";
import { SeacrhContext } from "../../Root/Root";
import useLoadApps from "../../Hooks/useLoadApps";

const Apps = () => {
  const { apps, loading } = useLoadApps();
  const { search, setSearch } = useContext(SeacrhContext);
  const searchTerm = search.trim().toLowerCase();
  const searchedApps = searchTerm
    ? apps.filter((app) => app.title.toLowerCase().includes(searchTerm))
    : apps;
  return (
    <div className="bg-[#F5F5F5] px-4">
      <div className="container mx-auto py-14">
        <h1 className="text-center text-blue-950 font-bold text-3xl">
          Our All Applications
        </h1>
        <p className="text-center text-blue-950">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 my-6 items-center justify-between">
          <p className="text-blue-950 font-bold text-2xl">
            ({searchedApps.length}) Apps Found
          </p>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps"
            className="border border-gray-300 rounded-md block bg-blue-200 outline-none py-2 px-4 max-w-xs w-full"
          />
        </div>
        <AllApps
          search={search}
          setSearch={setSearch}
          searchedApps={searchedApps}
          loading={loading}
        ></AllApps>
      </div>
    </div>
  );
};

export default Apps;
