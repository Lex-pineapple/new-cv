import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
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

export const PlatformPrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={5}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/alfaleasing-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={undefined}
      translationKey="platform"
    />
  );
};
