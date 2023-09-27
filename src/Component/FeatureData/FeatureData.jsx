import { Link } from "react-router-dom";

const FeatureData = ({ data }) => {
      const {id,picture,title,category,category_bg } = data;
      return (
            
            <Link to={`/feature/${id}`}>
             <div className="card w-full bg-base-100 shadow-xl m-3">
                  <figure><img className="h-56" src={picture} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title bg-${category_bg}">{category}</h2>
                        <p>{title}</p>
                 </div>
                 </div></Link>
      );
};

export default FeatureData;