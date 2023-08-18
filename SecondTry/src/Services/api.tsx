import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.tsx";

export function api() {
  interface Photo {
    id: number;
    category: string;
    url: string;
    photographer: string;
    alt: string;
  }
  const [category, setcategory] = useState([]);
  const [photos, setPhotos] = useState<Photo[]>();

  useEffect(() => {
    fetch(`https://frontend-gallery.darkube.app/api/photos`)
      .then((res) => res.json())
      .then((json) => setPhotos(json));
  }, []);
  return
}
