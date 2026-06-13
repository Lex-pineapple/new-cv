import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
import type { TPrjType } from "~components/projects/projects";
import type { TWithClassname } from "~types/general";

const stack = [
  {
    icon: "/icons/js-icon.svg",
    name: "JavaScript",
  },
  {
    icon: "/icons/ts-icon.svg",
    name: "TypeScript",
  },
  {
    icon: "/icons/html-icon.svg",
    name: "HTML",
  },
  {
    icon: "/icons/css-icon.svg",
    name: "CSS/SCSS",
  },
  {
    icon: "/icons/react-icon.svg",
    name: "React",
  },
  {
    icon: "/icons/nextjs-icon.svg",
    name: "Next.js",
  },
  {
    icon: "/icons/fastify-icon.svg",
    name: "Fastify",
  },
  {
    icon: "/icons/mongodb-icon.svg",
    name: "MongoDB",
  },
  {
    icon: "/icons/ant-design-icon.svg",
    name: "Ant Design",
  },
  {
    icon: "/icons/jest-icon.svg",
    name: "Jest",
  },
  {
    icon: "/icons/cypress-icon.svg",
    name: "Cypress",
  },
  {
    icon: "/icons/formik-icon.svg",
    name: "Formik",
  },
  {
    icon: "/icons/axios-icon.svg",
    name: "Axios",
  },
  {
    icon: "/icons/redux-icon.svg",
    name: "Redux",
  },
  {
    icon: "/icons/redux-icon.svg",
    name: "Redux Saga/Redux Thunk",
  },
  {
    icon: "/icons/redux-icon.svg",
    name: "RTK Query",
  },
];

export const CleverscopePrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={3}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/clevertec-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<ClevertecLogo />}
      translationKey="cleverscope"
    />
  );
};
