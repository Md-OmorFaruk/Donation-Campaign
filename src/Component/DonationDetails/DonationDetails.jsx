import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
      const data = useLoaderData();
      const { id } = useParams()
      const idInt = parseInt(id);
      const dataAll = data.find(dataAll => dataAll.id === idInt);
      console.log(dataAll);


        const buttonStyle = {
    backgroundColor: dataAll.category_bg, 
    color: 'white',
      };

      const handleToast = () => {
            toast('Donate Successful.Thank you for Donate💖');
      }
      
      return (
            <div className="max-w-screen-xl mx-auto ">
                  <img className="w-full h-[600px]  object-cover  opacity-100" src={dataAll.picture} alt="" />
                    <button onClick={handleToast}  className="bg-red m-8 absolute top-[560px] py-3 px-7 font-bold" style={buttonStyle}>Donate ${dataAll.price}</button>
                  <h1 className="text-4xl font-bold mt-5 mb-5">{dataAll.title}</h1>
                  <p className="text-base mb-10">{dataAll.description}</p>
                    <ToastContainer />
            </div>
      )
            
};

export default DonationDetails;