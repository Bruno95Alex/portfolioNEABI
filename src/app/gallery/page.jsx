import database from "@/database/database";
import GalleryClient from "./galleryClient";
import "./gallery.css";

export default async function Gallery() {

  const sql = `
    SELECT id, image, description
    FROM gallery
    ORDER BY id DESC
  `;

  const responseDB = await database.query(sql);
  const imagens = responseDB.rows;

  return <GalleryClient imagens={imagens} />;
}