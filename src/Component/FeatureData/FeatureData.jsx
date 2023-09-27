const FeatureData = ({ data }) => {
      const {picture,title,category } = data;
      return (
            
                  <div className="card w-full bg-base-100 shadow-xl m-3">
                  <figure><img className="h-56" src={picture} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{category}</h2>
                        <p>{title}</p>
                 </div>
                 </div>
                  
      );
};

export default FeatureData;