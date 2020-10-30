import {
  Dashboard,
  VideogameAsset,
  CalendarToday,
  ContactPage,
  HelpCenter,
} from "@styled-icons/material";
import {
  CalendarAlt,
  CalendarCheck,
  Wallet,
  Tools,
  Calculator,
} from "@styled-icons/fa-solid";
import { ScikitLearn, Youtube, Blogger, Docker } from "@styled-icons/simple-icons";
import { Admin, Plant } from "@styled-icons/remix-fill";

export default [
  {
    id: "dashboardLink",
    displayName: "Dashboard",
    translation: "sidemenu.dashboard",
    iconComponent: Dashboard,
    type: "link",
    url: "/",
  },
  {
    id: "godownsLink",
    displayName: "Godowns",
    translation: "sidemenu.godowns",
    iconComponent: Docker,
    className: "active",
    type: "link",
    url: "/features/godowns/list",
  },
  {
    id: "adminLink",
    displayName: "Select Crop",
    translation: "sidemenu.selectCrop",
    iconComponent: Plant,
    type: "link",
    url: "/auth/selectCrop/",
  },
  {
    id: "walletLink",
    displayName: "My Wallet",
    translation: "sidemenu.myWallet",
    iconComponent: Wallet,
    type: "link",
  },
  {
    id: "helpCenter",
    displayName: "Help Center",
    translation: "sidemenu.helpCenter",
    iconComponent: HelpCenter,
    type: "link",
  },
  {
    id: "calendarLink",
    displayName: "Calendar",
    translation: "sidemenu.calendar",
    iconComponent: CalendarAlt,
    showSubmenu: true,
    type: "link",
    subMenu: [
      {
        id: "calendarToday",
        displayName: "My Day",
        translation: "sidemenu.myDay",
        iconComponent: CalendarToday,
        type: "link",
      },
      {
        id: "calendarCrop",
        displayName: "Crop Calendar",
        translation: "sidemenu.cropCalendar",
        iconComponent: CalendarCheck,
        type: "link",
      },
    ],
  },
  {
    id: "contactsLink",
    displayName: "Phone Book",
    translation: "sidemenu.phoneBook",
    iconComponent: ContactPage,
    type: "link",
  },
  {
    id: "assetsLink",
    displayName: "Assets",
    translation: "sidemenu.assets",
    iconComponent: VideogameAsset,
    type: "link",
    subMenu: [
      {
        type: "info",
        displayName: "No Assets Registered",
        translation: "sidemenu.noAssetsRegistered",
      },
    ],
  },
  {
    id: "learningLink",
    displayName: "Learnings",
    translation: "sidemenu.learnings",
    iconComponent: ScikitLearn,
    type: "link",
    subMenu: [
      {
        id: "videoLearningLink",
        displayName: "Videos",
        translation: "sidemenu.videos",
        iconComponent: Youtube,
        type: "link",
      },
      {
        id: "blogLink",
        displayName: "Blog",
        translation: "sidemenu.blog",
        iconComponent: Blogger,
        type: "link",
      },
    ],
  },
  {
    id: "calculatorTool",
    displayName: "Farming Calculator",
    translation: "sidemenu.farmingCalculator",
    iconComponent: Calculator,
    type: "link",
  },
  {
    id: "adminLink",
    displayName: "Admin",
    translation: "sidemenu.admin",
    iconComponent: Admin,
    type: "link",
  },
];
