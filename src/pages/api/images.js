import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" }); // Handle non-GET requests
  }

  try {
    const imagesDirectory = path.join(process.cwd(), "public/images"); // Folder path
    const imageFiles = fs.readdirSync(imagesDirectory); // Read all image files in the folder

    // Generate public URLs for each image
    const imagePaths = imageFiles.map((file) => `/images/${file}`);

    return res.status(200).json(imagePaths); // Send response
  } catch (error) {
    return res.status(500).json({ message: "Error reading images", error: error.message });
  }
}
