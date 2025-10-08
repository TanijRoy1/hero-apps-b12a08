import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useLoadApps from "../../Hooks/useLoadApps";
import AppNotFound from "../AppNotFound/AppNotFound";
import DownloadIcon from "../../assets/icon-downloads.png";
import RatingIcon from "../../assets/icon-ratings.png";
import ReviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { addIdToLS, getStoredAppsId } from "../../Utilities/LocalStorage";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
// const data = [
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
//   { name: "Page A", uv: 600, pv: 2400, amt: 2400 },
// ];

const AppDetails = () => {
  const { apps, loading } = useLoadApps();
  const { appId } = useParams();
  const convertedId = parseInt(appId);

  const [installedIds, setInstalledIds] = useState(getStoredAppsId());
  useEffect(() => {
    setInstalledIds(getStoredAppsId());
  }, [])

  if (loading) return <Loading></Loading>;

  const app = apps.find((app) => app.id === convertedId);
  if (!app) return <AppNotFound />;

  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  
  // const installedAppsId = getStoredAppsId();
  // const installedApps = apps.filter(app => installedAppsId.includes(app.id));
  const isInstalled = installedIds.includes(id);
  // console.log(isInstalled);
  const handleInstall = () => {
    addIdToLS(id);
    setInstalledIds([...installedIds, id]);
    toast("The App is installed successfully.");
  }

  return (
    <div className="px-4 bg-[#F5F5F5]">
      <div className="container mx-auto py-10">

        <div className="flex items-stretch gap-8 text-blue-950">
          <div className="w-60">
            <img
              className="w-full h-full rounded-md object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="info">
            <p className="text-2xl text-blue-950 font-bold">{title}</p>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium mt-1">
                {companyName}
              </span>
            </p>
            <hr className="text-gray-400 my-4" />
            <div className="flex items-center gap-10 mb-3">
              <div className="flex flex-col gap-0.5 items-center">
                <img src={DownloadIcon} className="w-7 h-7" alt="Download" />
                <p>Downloads</p>
                <p className="text-3xl font-black">{downloads / 1000000}M</p>
              </div>
              <div className="flex flex-col gap-0.5 items-center">
                <img src={RatingIcon} className="w-7 h-7" alt="Rating" />
                <p>Average Ratings</p>
                <p className="text-3xl font-black">{ratingAvg}</p>
              </div>
              <div className="flex flex-col gap-0.5 items-center">
                <img src={ReviewIcon} className="w-7 h-7" alt="Review" />
                <p>Total Reviews</p>
                <p className="text-3xl font-black">{reviews / 1000}K</p>
              </div>
            </div>
            <button onClick={handleInstall} disabled={isInstalled} className={`bg-green-600 ${isInstalled ? "opacity-50 cursor-not-allowed":"cursor-pointer opacity-100"} text-white py-1.5 px-4 rounded font-medium`}>
              {isInstalled?"Installed":`Install Now (${size} MB)`}
            </button>
          </div>
        </div>

        <hr className="text-gray-400 my-4" />

        <div className="barChart">
          <h1 className="text-2xl text-blue-950 font-bold">Ratings</h1>
          <div className="w-full h-70">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={600}
                height={300}
                data={ratings}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
              >
                <YAxis type="category" dataKey="name" stroke="#8884d8" />
                <XAxis type="number" stroke="#8884d8" />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="count" fill="#FF8811" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <hr className="text-gray-400 my-4" />

        <div className="description">
            <h1 className="text-2xl text-blue-950 font-bold">Description</h1>
            <p className="text-blue-950">
                {description}
            </p>
        </div>

        <ToastContainer className={`absolute`}></ToastContainer>
      </div>
    </div>
  );
};

export default AppDetails;
