import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import photos from "../App";
import { Photo } from "../Services/Api";

// export function showPhotos(){
//         return(<div >
//              {photos.map((data:Photo ,i:number)=>data.url)}
//             </div>

// )}

// export const showCategory = photos.map((data :Photo)=>{data.category}

const ShowPhotos = ({ photos }: { photos: Photo[] }) => {
  return <div>{photos.map((data, i) => data.url)}</div>;
};

export default ShowPhotos;
