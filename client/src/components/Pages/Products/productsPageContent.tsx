export const productsPageContent = {
  jumboText: "Products",
  sloganText: 'Check out our "hottest" vintage stoves!',
};

export const products = [
  {
    id: 1,
    title: "Big Red",
    description:
      "This is a classic red stove, sure to be a coversation starter in your home! Go Big Red!",
    imgSrc: "/imgs/BigRed.jpg",
    altText: "Big Red vintage stove",
  },
  {
    id: 2,
    title: "Double Mint",
    description:
      "Check out this lovely mint-mint colored vintage stove. It's bound to double your cooking and baking pleasure!",
    imgSrc: "/imgs/DoubleMint.png",
    altText: "Double Mint vintage stove",
  },
  {
    id: 3,
    title: "Envy Green",
    description:
      "This classic beauty is bound to make the other chefs in your neighborhood green with envy!",
    imgSrc: "/imgs/EnvyGreen.jpg",
    altText: "Envy Green vintage stove",
  },
];

export const azReaderData = [
  {
    id: 1,
    html: `
    <h5>${products[0].title}</h5>
    <p>${products[0].description}</p>
    `,
  },
  {
    id: 2,
    html: `
    <h5>${products[1].title}</h5>
    <p>${products[1].description}</p>
    `,
  },
  {
    id: 3,
    html: `
    <h5>${products[2].title}</h5>
    <p>${products[2].description}</p>
    `,
  },
];
