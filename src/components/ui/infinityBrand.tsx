import React from "react";
import {
  AstroIcon,
  CssIcon,
  DaisyuiIcon,
  DartIcon,
  FigmaIcon,
  FirebirdIcon,
  FlutterIcon,
  GithubIcon,
  GitIcon,
  HerouiIcon,
  HtmlIcon,
  JavascriptIcon,
  MysqlIcon,
  NextJsIcon,
  PostmanIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  ZustandIcon,
} from "@/components/ui/brands";

function InfinityBrand() {
  const elements = [
    {
      name: "NextJs",
      icon: <NextJsIcon />,
    },
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "Flutter",
      icon: <FlutterIcon />,
    },
    {
      name: "Astro",
      icon: <AstroIcon />,
    },
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
    },
    {
      name: "Html",
      icon: <HtmlIcon />,
    },
    {
      name: "Css",
      icon: <CssIcon />,
    },
    {
      name: "TailwindCss",
      icon: <TailwindIcon />,
    },
    {
      name: "Dart",
      icon: <DartIcon />,
    },
    {
      name: "HeroUi",
      icon: <HerouiIcon />,
    },
    {
      name: "DaisyUi",
      icon: <DaisyuiIcon />,
    },
    {
      name: "Zustand",
      icon: <ZustandIcon />,
    },
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "Github",
      icon: <GithubIcon />,
    },
    {
      name: "Vercel",
      icon: <VercelIcon />,
    },
    {
      name: "MySQL",
      icon: <MysqlIcon />,
    },
    {
      name: "FirebirdSQL",
      icon: <FirebirdIcon />,
    },
    {
      name: "Postman",
      icon: <PostmanIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
  ];

  return (
    <>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] ">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          role="list"
          aria-label="Tecnologías - Primera lista"
        >
          {elements.map((element) => (
            <li
              key={element.name}
              role="listitem"
              title={element.name}
              className="rounded-full bg-base-200 p-6 w-37.5 h-37.5 flex items-center justify-center"
            >
              <div
                className="tooltip tooltip-bottom tech-icon-container"
                data-tip={element.name}
              >
                {element.icon}
              </div>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          role="list"
          aria-label="Tecnologías - Segunda lista (duplicada)"
          aria-hidden="true"
        >
          {elements.map((element) => (
            <li
              key={`duplicate-${element.name}`}
              role="listitem"
              title={element.name}
              className="rounded-full bg-base-200 p-6 w-37.5 h-37.5 flex items-center justify-center"
            >
              <div
                className="tooltip tooltip-bottom tech-icon-container"
                data-tip={element.name}
              >
                {element.icon}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InfinityBrand;
