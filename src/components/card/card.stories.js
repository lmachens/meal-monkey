import "./card.css";
import cardItalian from "./card-italian.html";
import cardOffers from "./card-offers.html";
import cardSriLankan from "./card-sri-lankan.html";
import cardContainer from "./card-container.html";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const italian = () => cardItalian;
export const offers = () => cardOffers;
export const sriLankan = () => cardSriLankan;
export const container = () => cardContainer;
