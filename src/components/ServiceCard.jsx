// import { useState } from "react";
// import ChatBox from "@/components/ChatBox";

// const ServiceCard = ({ service, clientId, vendorId }) => {
//   const [showChat, setShowChat] = useState(false);

//   return (
//     <div className="border rounded p-4 shadow-lg">
//       <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded" />
//       <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
//       <p>{service.description}</p>
//       <p className="font-bold">Price: ${service.price}</p>
//       <button
//         onClick={() => setShowChat(true)}
//         className="w-1/3 bg-amber-400 rounded text-lg text-white font-bold"
//       >
//         Hire
//       </button>

//       {showChat && <ChatBox clientId={clientId} vendorId={vendorId} />}
//     </div>
//   );
// };

// export default ServiceCard;
