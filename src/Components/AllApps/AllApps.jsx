import React, { useEffect, useState } from "react";
import AppCard from "../AppCard/AppCard";
import { NavLink } from "react-router";
import { SeacrhContext } from "../../Root/Root";
import Loading from "../Loading/Loading";

const AllApps = ({ search, setSearch, searchedApps, loading }) => {
  const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    if (search.trim()) {
      setSearchLoading(true);
      const timeout = setTimeout(() => setSearchLoading(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [search]);

  if (loading || searchLoading) return <Loading></Loading>;

  if (searchedApps.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-20">
        <h1 className="text-center text-blue-950 font-bold text-3xl">
          No App Found
        </h1>
        <NavLink
          to={`/apps`}
          onClick={() => setSearch("")}
          className={`flex items-center gap-2 cursor-pointer px-6 py-2.5 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition`}
        >
          Show All
        </NavLink>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
      {searchedApps.map((app) => (
        <AppCard key={app.id} app={app}></AppCard>
      ))}
    </div>
  );
};

export default AllApps;
