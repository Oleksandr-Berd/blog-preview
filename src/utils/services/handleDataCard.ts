import React from "react";
import Card from "../../components/Card/Card";
import ICard from "../interfaces/icard";

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/images/${imageName}`);
  } catch (error) {
    console.error(`Image not found: ${imageName}`, error);
  }
};

export const handleDataCard = (data: ICard[]) => {
  return data.map(
    ({ id, imagePost, status, date, title, content, author, authorAvatar }) => {
      const imagePostPath = importImage(imagePost);
      const authorAvatarPath = importImage(authorAvatar);

      return React.createElement(Card, {
        id,
        imagePost: imagePostPath,
        status,
        date,
        title,
        content,
        author,
        authorAvatar: authorAvatarPath,
      });
    }
  );
};
