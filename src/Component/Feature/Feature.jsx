import { useEffect, useState } from "react";
import FeatureData from "../FeatureData/FeatureData";

const Feature = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
            fetch('Data.json')
                  .then(res => res.json())
                  .then(data => setData(data));
      }, []);
      return (
            <div>
                  <div  className="mt-16 max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5">
                        {
                              data.map(data=><FeatureData key={data.id} data={data}></FeatureData>)
                        }
                  </div>
                  
            </div>
      );
};

export default Feature;