export default function handler(req, res) {
    const services = [
      {
        id: 1,
        title: "Home Cleaning",
        description: "Thorough cleaning service for homes and apartments.",
        image: "https://source.unsplash.com/400x300/?cleaning",
        price: 50,
      },
      {
        id: 2,
        title: "Office Cleaning",
        description: "Professional cleaning to maintain a tidy workspace.",
        image: "https://source.unsplash.com/400x300/?office,cleaning",
        price: 100,
      },
      {
        id: 3,
        title: "Carpet Cleaning",
        description: "Deep cleaning for carpets and rugs.",
        image: "https://source.unsplash.com/400x300/?carpet,cleaning",
        price: 80,
      },
      {
        id: 4,
        title: "Window Cleaning",
        description: "Crystal clear windows for homes and offices.",
        image: "https://source.unsplash.com/400x300/?window,cleaning",
        price: 40,
      },
    ];
  
    const { id } = req.query; // Get the id from the URL
    const service = services.find((service) => service.id === parseInt(id));
  
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  }
  