import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "../App";
import "./component/show";

export interface Photo {
  id: number;
  category: string;
  url: string;
  photographer: string;
  alt: string;
}

export function getPhotos() {
  return fetch(`https://frontend-gallery.darkube.app/api/photos`).then((res) =>
    res.json()
  );
}

export const getPhotos_ = async () => {
  try {
    const response = await fetch(
      `https://frontend-gallery.darkube.app/api/photos`
    );
    return response;
  } catch (e) {
    return e;
  }
};
