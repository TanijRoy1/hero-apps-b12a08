import React, { useState } from "react";
import { getStoredAppsId, removeIdFromLS } from "../../Utilities/LocalStorage";
import useLoadApps from "../../Hooks/useLoadApps";
import Loading from "../../Components/Loading/Loading";
import InstalledApp from "../../Components/InstalledApp/InstalledApp";
import { toast, ToastContainer } from "react-toastify";

const Installations = () => {
  const { apps, loading } = useLoadApps();
  const [installedIds, setInstalledIds] = useState(getStoredAppsId());
  const installedApps = apps.filter((app) => installedIds.includes(app.id));

  const handleUninstall = (id) => {
    removeIdFromLS(id);
    setInstalledIds((prev) => prev.filter((storedId) => storedId !== id));
    toast("App uninstalled.");
  };

  const [sortOrder, setSortOrder] = useState('none');
  const sortedInstalledApps = (() => {
  if (sortOrder === 'downloads-asc') {
    return [...installedApps].sort((a, b) => a.downloads - b.downloads);
  } else if (sortOrder === 'downloads-desc') {
    return [...installedApps].sort((a, b) => b.downloads - a.downloads);
  } else {
    return installedApps;
  }
})();


  if (loading) return <Loading></Loading>;


  return (
    <div className="bg-[#F5F5F5] px-4">
      <div className="container mx-auto py-14">
        <h1 className="text-center text-blue-950 font-bold text-3xl">
          Your Installed Apps
        </h1>
        <p className="text-center text-blue-950">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 my-6 items-center justify-between">
          <p className="text-blue-950 font-bold text-2xl">
            ({sortedInstalledApps.length}) Apps Found
          </p>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="downloads-asc">Low-&gt;High</option>
              <option value="downloads-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-4">
          {sortedInstalledApps.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            ></InstalledApp>
          ))}
        </div>
        <ToastContainer className={`absolute`}></ToastContainer>
      </div>
    </div>
  );
};

export default Installations;
