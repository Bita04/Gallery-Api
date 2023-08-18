import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Photo, getPhotos } from "./Services/Api";
import ShowPhotos from "./component/Show";
import "./component/SelectingCategories";
// import { categorySelector } from "./component/SelectingCategories";

function App() {
  const [category, setcategory] = useState([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos().then((photos) => setPhotos(photos));
  }, []);

  console.log(photos);
  // const showPhotos =photos?.map(function(data){
  //   return data.url
  // })

  return (
    <div>
      <ShowPhotos photos={photos} />
    </div>
  );
}
export default App;
