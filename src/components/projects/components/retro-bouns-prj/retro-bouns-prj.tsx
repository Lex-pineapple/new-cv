import { AlfaleasingLogo } from "~components/projects/components/alfaleasing-logo";
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

export const RetroBonusPrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={4}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/alfaleasing-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<AlfaleasingLogo />}
      translationKey="retro-bonus"
    />
  );
};
