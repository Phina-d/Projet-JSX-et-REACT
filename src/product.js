import smartphone1 from "./assets/images/smartphone1.jpg";
import smartphone3 from "./assets/images/smartphone3.jpg";
import smartphone4 from "./assets/images/smartphone4.jpg";

const product = {
  name: "MultiMode Phone",
  description: "Un smartphone intelligent adaptable à différents profils d’utilisateurs.",
  variants: [
    {
      mode: "Développeur",
      name: "Samsung A 05",
      image: smartphone1,
      description: "Images simulées à des fins d’illustration, Mesurée en diagonale, la taille de l’écran est de 6,7 dans le rectangle complet et de 6,6 en tenant compte des angles arrondis La surface d’affichage réelle est inférieure en raison des angles arrondis et de l’encoche de l’appareil photo",
      price: "899€"
    },
    {
      mode: "Utilisateur simple",
      name: "Galaxy S",
      image: smartphone3,
      description: "Mémoire de 128 Go ou plus · Mémoire · Appareil photo de 48 MP ou plus · Quadruple appareil photo · Taille de l'écran de 6.4 ” ou plus · Super AMOLED",
      price: "499€"
    },
    {
      mode: "Communicant",
      name: "Samsung Galaxy Z Fold 2",
      image: smartphone4,
      description: "Ecran taille è.6 pouce Définition 2208 x 1768 pixels dalle super Amooled Fréquence d'affichage 120 Hz DPI 372 ppp Stokage Mémoire 256 Go.",
      price: "699€"
    }
  ]
};

export default product;
