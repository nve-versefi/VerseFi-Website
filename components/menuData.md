

const menuData = [
  {
    id: 1,
    title: "Our Services",
    path: "/services",
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "Full-Stack Web Development",
        path: "/web",
        newTab: false,
      },
      {
        id: 12,
        title: "Tailored Enterprise Software",
        path: "/software",
        newTab: false,
      },
      {
        id: 13,
        title: "Cybersecurity & Performance",
        path: "/cybersec",
        newTab: false,
      },
      {
        id: 14,
        title: "Blockchain & Smart Contracts",
        path: "/blockchain",
        newTab: false,
      },
      {
        id: 15,
        title: "Digital Transformation & Automation",
        path: "/automation",
        newTab: false,
      },
      {
        id: 16,
        title: "Data Analytics",
        path: "/data",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: true,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
]
export default menuData;
