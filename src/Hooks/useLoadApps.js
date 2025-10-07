import axios from "axios";
import { useEffect, useState } from "react";


const useLoadApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        axios("../appsData.json")
          .then(data => setApps(data.data))
          .catch(err => setError(err))
          .finally(() => setLoading(false))
    }, [])

    return {apps, loading, error};
};

export default useLoadApps;