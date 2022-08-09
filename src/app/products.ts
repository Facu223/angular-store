export interface product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export const products: Array<product> = [
  {
    id: 1,
    name: 'Apple iPhone 11',
    price: 348.95,
    img: '../assets/iphone11.png',
    description:
      'The Apple iPhone 11 is the successor to the iPhone Xr for 2019. This year the iPhone 11 arrives with a 6.1-inch screen with Liquid Retina resolution and powered by an Apple A13 Bionic processor with 64GB, 128GB or 256GB of internal storage. The rear camera of the iPhone 11 is now dual, with a 12 MP regular lens and a 12 MP wide angle, while its front camera is 12 MP. The iPhone 11 has a 3110 mAh battery with fast charging, stereo speakers with Dolby Atmos sound, wireless charging and uses Face ID facial recognition for security.',
  },
  {
    id: 2,
    name: 'Samsung Galaxy A03',
    price: 125,
    img: '../assets/galaxya03.png',
    description:
      "The Galaxy A03 combines Octa-core processing power with up to 3GB or 4GB of RAM, depending on the model. No matter the task, you'll have fast and efficient performance. You can enjoy the best content with 32 GB, 64 GB or 128 GB of internal storage.",
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro Max',
    price: 999,
    img: '../assets/iphon12promax.png',
    description:
      "The Pro Max is a 6.7-inch OLED super retina XDR with a 2778 x 1284 resolution. This is the largest iPhone to date and with the best resolution, but it's not that big of a difference compared to the iPhone 12 Pro. The A14 chip Bionic is one of the most advanced components of the iPhone 12 family.",
  },
  {
    id: 4,
    name: 'LG K41S',
    price: 99.99,
    img: '../assets/lg2.png',
    description:
      'The LG K41S mounts a 6.5-inch HD+ panel with a 20:9 aspect ratio and a drop-shaped notch for the front camera, a detail that differentiates it from the other two models. The company does not specify what processor it has included in these three new models, but in this case, it is a 2.0 GHz octa-core chipset, with 3 GB of RAM and 32 GB of storage.',
  },
];
