import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
import { RgsLogo } from "~components/projects/components/rgs-logo";
import type { TPrjType } from "~components/projects/projects";
import type { TWithClassname } from "~types/general";

const stack = [
  {
    icon: "",
    name: "TypeScript",
  },
  {
    icon: "",
    name: "React",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
  },
];

export const WebClient = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={6}
      onBackwardsClick={onBackwardsClick}
      onForwardClick={onForwardClick}
      stack={stack}
      imgSrc="/rgs-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<RgsLogo />}
      translationKey="web-client"
    />
  );
};
