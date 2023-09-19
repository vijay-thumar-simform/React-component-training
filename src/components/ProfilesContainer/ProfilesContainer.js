import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfilesContainer = ({ classDesign }) => {
  const [images, setImages] = useState([]);

  const getImages = () => {
    const images = [];
    const directory = require.context(
      "../../assets",
      false,
      /\.(png|jpg|jpeg|gif)$/
    );
    directory.keys().forEach((file) => {
      images.push(directory(file));
    });
    return images;
  };

  useEffect(() => {
    const img = getImages();
    setImages(img);
  }, []);

  const userData = [
    { name: "Jerry Goldsmith", position: "Director of Finance" },
    { name: "John Smith", position: "CEO" },
    { name: "Natalie Fisher", position: "Digital Marketing Strategist" },
    { name: "William White", position: "Senior Designer" },
  ];

  return (
    <div className={classDesign}>
      {images.length > 0
        ? images.map((imageSrc, index) => {
            return (
              <ProfileCard
                key={index}
                img={imageSrc}
                name={userData[index]?.name}
                position={userData[index]?.position}></ProfileCard>
            );
          })
        : "No user images found"}
    </div>
  );
};

export default ProfilesContainer;
