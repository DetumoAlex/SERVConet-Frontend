import ServiceCard from "@/components/ServiceCard";
import React, { useEffect, useState } from "react";


const Services = () => {
  const [service, setService] = useState([]);

  // useEffect(() => {
  //   fetch("/api/services")
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, []);

  return (
    <div className="mt-4 p-4">
      <div className="flex flex-col ">
        <div className="mb-4 text-3xl font-bold text-black">
          <h1>Services</h1>
          <hr />
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          {service.map((s, index) => {
            return <ServiceCard key={index} service={s} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services