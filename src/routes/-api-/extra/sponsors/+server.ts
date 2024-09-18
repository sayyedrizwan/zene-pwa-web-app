import { json } from "@sveltejs/kit";

export async function GET() {
  const imgsData = [
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/564x/94/fd/85/94fd85c648b6acb11c2fb52bd99ae8d0.jpg",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/564x/94/fd/85/94fd85c648b6acb11c2fb52bd99ae8d0.jpg",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/564x/94/fd/85/94fd85c648b6acb11c2fb52bd99ae8d0.jpg",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/564x/94/fd/85/94fd85c648b6acb11c2fb52bd99ae8d0.jpg",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif",
    },
    {
      link: "https://www.google.com/",
      img: "https://i.pinimg.com/564x/94/fd/85/94fd85c648b6acb11c2fb52bd99ae8d0.jpg",
    },
  ];

  const jsonAdsInfo = {
    top: {
      title: "Helloo soo what's up",
      imgs: imgsData,
    },

    bottom: {
      title: "Helloo soo what's up",
      imgs: imgsData,
    },
  };

  const jsonData = {
    ios: {
      showAds: true,
      showSponserAds: false,
      ads: jsonAdsInfo,
    },
    android: {
      showAds: true,
      showSponserAds: false,
      ads: jsonAdsInfo,
    },
    web: {
      showAds: true,
      showSponserAds: false,
      ads: jsonAdsInfo,
    },
  };

  return json(jsonData);
}
