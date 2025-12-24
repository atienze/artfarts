// src/data/albums.ts
import tall from '../images/demo-tall.jpg';
import wide from '../images/demo-wide.jpg';
import square from '../images/demo-square.jpg';
import art from '../images/demo-art.jpg';

export const albums = [
  {
    id: "1",
    title: "Abstract Forms",
    slug: "abstract-forms",
    coverImage: tall, // Tall image
    photoCount: 12,
    description: "A study in verticality and color."
  },
  {
    id: "2",
    title: "Modern Horizons",
    slug: "modern-horizons",
    coverImage: wide, // Wide image
    photoCount: 8,
    description: "Landscapes from the digital frontier."
  },
  {
    id: "3",
    title: "Geometric Studies",
    slug: "geometric",
    coverImage: square, // Square image
    photoCount: 4,
    description: "Perfect symmetry in chaos."
  },
  {
    id: "4",
    title: "The Masterpiece",
    slug: "masterpiece",
    coverImage: art, // High res image
    photoCount: 1,
    description: "The featured collection."
  }
];