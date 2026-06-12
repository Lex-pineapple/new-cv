import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
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
