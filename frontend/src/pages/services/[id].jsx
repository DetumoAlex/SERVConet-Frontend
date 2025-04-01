import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get ID from the URL
  const [service, setService] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`/api/services/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setService(data));
  //   }
  // }, [id]);

  if (!service) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{service.title}</h1>
      <p className="mt-2">{service.description}</p>
      <p className="font-bold text-lg mt-4">Price: ${service.price}</p>
    </div>
  );
};

export default ServiceDetail;
