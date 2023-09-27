import { Link } from "react-router-dom";

const FeatureData = ({ data }) => {
      const { id, picture, title, category, category_bg,title_color,card_bg } = data;
      
      const buttonStyle1 = {
            backgroundColor: card_bg, 
            color: title_color,
            
      };
      const button2 = {
            backgroundColor:category_bg,
      }
      return (
            
            <Link to={`/feature/${id}`}>
             <div className="card w-full bg-base-100 shadow-xl m-3" style={buttonStyle1}>
                  <figure><img className="h-56 " src={picture} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title max-w-fit py-2 px-4 text-sm" style={button2}>{category}</h2>
                              <p className="text-xl font-bold">{title}</p>
                        
                 </div>
                 </div></Link>
      );
};

export default FeatureData;