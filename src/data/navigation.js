// src/data/navigation.js

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Our Company", path: "/our-company" },

  {
    label: "Our Offering",
    path: "/our-offering",
    children: [
      {
        label: "Tea",
        path: "/our-offering/tea",
        items: [
          { label: "Our Tea Collection", path: "/our-offering/tea" },
          { label: "Tea Accessories", path: "/our-offering/tea/accessories" },
        ],
      },
      {
        label: "Kitchen Products",
        path: "/our-offering/kitchen-products",
        items: [
          { label: "Spices", path: "/our-offering/kitchen-products/spices" },
          { label: "Soya", path: "/our-offering/kitchen-products/soya" },
          { label: "Oil", path: "/our-offering/kitchen-products/oil" },
          { label: "Grains", path: "/our-offering/kitchen-products/grains" },
        ],
      },
      {
        label: "Baby Care",
        path: "/our-offering/baby-care",
        items: [
          { label: "Baby Care Product", path: "/our-offering/baby-care/product" },
          { label: "Baby Care Accessories", path: "/our-offering/baby-care/accessories" },
        ],
      },
      {
        label: "Beauty Products",
        path: "/our-offering/beauty-products",
        items: [
          { label: "Female", path: "/our-offering/beauty-products/female" },
          { label: "Male", path: "/our-offering/beauty-products/male" },
        ],
      },
    ],
  },
  { label: "Wholesale", path: "/wholesale" },
  { label: "Sustainability", path: "/sustainability" },

];

export const MEGA_MENU_CATEGORIES = [
  {
    id: "tea",
    label: "Tea",
    path: "/our-offering/tea",
    subItems: [
      { label: "Our Tea Collection", path: "/our-offering/tea" },
      { label: "Tea Accessories", path: "/our-offering/tea/accessories" },
    ],
  },
  {
    id: "kitchen-products",
    label: "Kitchen Products",
    path: "/our-offering/kitchen-products",
    subItems: [
      { label: "Spices", path: "/our-offering/kitchen-products/spices" },
      { label: "Soya", path: "/our-offering/kitchen-products/soya" },
      { label: "Oil", path: "/our-offering/kitchen-products/oil" },
      { label: "Grains", path: "/our-offering/kitchen-products/grains" },
    ],
  },
  {
    id: "baby-care",
    label: "Baby Care",
    path: "/our-offering/baby-care",
    subItems: [
      { label: "Baby Care Product", path: "/our-offering/baby-care/product" },
      { label: "Baby Care Accessories", path: "/our-offering/baby-care/accessories" },
    ],
  },
  {
    id: "beauty-products",
    label: "Beauty Products",
    path: "/our-offering/beauty-products",
    subItems: [
      { label: "Female", path: "/our-offering/beauty-products/female" },
      { label: "Male", path: "/our-offering/beauty-products/male" },
    ],
  },
];

export const NAV_LINKS_RIGHT = [
  { label: "News Room ", path: "/news" },
    { label: "Media Center", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
  { label: "Policies", path: "/policies" },
];

export const SITE_CONFIG = {
  name: "Golden Leaf Tea Co.",
  tagline: "Prefer It Perfect",
  email: "hello@goldenleaftea.com",
  phone: "+91 98765 43210",
  address: "Patna, Bihar, India",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};