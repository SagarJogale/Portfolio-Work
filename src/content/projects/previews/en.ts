// import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
// import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
// import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
// import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
// import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";

import thumbnailDigitalMarketing from "../../../assets/thumbnails/digitalmarketing.webp";
import thumbnailAppAnalytics from "../../../assets/thumbnails/appanalytics.webp";
import thumbnailContentStrategy from "../../../assets/thumbnails/contentstrategy.webp";
import thumbnailMobileAppMarketing from "../../../assets/thumbnails/mobileappmarketing.webp";
import thumbnailPerformanceMarketing from "../../../assets/thumbnails/performancemarketing.webp";
import thumbnailSeo from "../../../assets/thumbnails/seo.webp";
import thumbnailSocialMediaManagement from "../../../assets/thumbnails/socialmediamanagement.webp";
import thumbnailWebsiteStrategy from "../../../assets/thumbnails/websitestrategy.webp";
import thumbnailGameDeployement from "../../../assets/thumbnails/gamedeployment.webp";

import type { ProjectPreview } from "../../types";

export default [
  // {
  //   title: "CubeWar",
  //   slug: "cubewar",
  //   thumbnail: thumbnailCubeWar,
  //   description: "Multiplayer strategy game",
  // },
  // {
  //   title: "Quibbo",
  //   slug: "quibbo",
  //   thumbnail: thumbnailQuibbo,
  //   description: "Multiplayer gaming platform",
  // },
  // {
  //   title: "Sharkie",
  //   slug: "sharkie",
  //   thumbnail: thumbnailSharkie,
  //   description: "2D adventure game",
  // },
  // {
  //   title: "WebGL Particles",
  //   slug: "particles",
  //   thumbnail: thumbnailParticles,
  //   description: "Dynamic 3D particles",
  // },
  // {
  //   title: "Pokédex",
  //   slug: "pokedex",
  //   thumbnail: thumbnailPokedex,
  //   description: "Open-source learning project",
  // },
  {
    title: "Digital Marketing Strategy & Consulting",
    slug: "digitalmarketing",
    thumbnail: thumbnailDigitalMarketing,
    description: "Develop structured marketing plans based on business objectives, target audience, market positioning, and available resources."
  },
  {
    title: "Social Media Management",
    slug: "socialmedia",
    thumbnail: thumbnailSocialMediaManagement,
    description: "Build brand consistency, strengthen audience engagement, and support wider marketing goals."
  },
  {
    title: "Performance Marketing & Paid Advertising",
    slug: "digitalmarketing",
    thumbnail: thumbnailPerformanceMarketing,
    description: "Plan and manage paid advertising campaigns designed to reach relevant audiences and support specific business objectives."
  },
  {
    title: "Search Engine Optimisation (SEO)",
    slug: "seo",
    thumbnail: thumbnailSeo,
    description: "Build a stronger organic search foundation and support long-term discoverability. Rankings and traffic increases are not guaranteed."
  },
  {
    title: "Content Strategy & Creative Development",
    slug: "digitalmarketing",
    thumbnail: thumbnailContentStrategy,
    description: "Ensure content has a clear purpose, consistent messaging, and a defined role within the marketing strategy."
  },
  {
    title: "Website Strategy & Digital Presence",
    slug: "digitalmarketing",
    thumbnail: thumbnailWebsiteStrategy,
    description: "Create a professional digital presence that communicates value and supports enquiries, sales, or other business goals."
  },
  {
    title: "Mobile App Marketing & App Store Optimisation (ASO)",
    slug: "digitalmarketing",
    thumbnail: thumbnailMobileAppMarketing,
    description: "Improve app discoverability and support the acquisition of relevant users."
  },
  {
    title: "Game Deployment & Launch Support",
    slug: "digitalmarketing",
    thumbnail: thumbnailGameDeployement,
    description: "Support businesses and game teams preparing mobile games for release, including store deployment coordination and launch marketing."
  },
  {
    title: "Analytics, Reporting & Optimisation",
    slug: "analytics",
    thumbnail: thumbnailAppAnalytics,
    description: "Provide a clearer understanding of marketing performance and support informed decisions"
  },
] as const satisfies ProjectPreview[];
