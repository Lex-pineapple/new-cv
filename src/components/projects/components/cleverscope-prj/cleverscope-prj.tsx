import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
import type { TWithClassname } from "~types/general";

const infoData = [
  {
    text: "Спроектировала с нуля отказоустойчивую архитектуру взаимодействия Front- и Back-сервисов на Vue 3, сократив общие сроки интеграции команд.",
    icon: "/lab-svg-1.svg",
  },
  {
    text: "Разработала оптимальную структуру БД PostgreSQL: успешно реализовала весь цикл от сбора бизнес-сущностей до концептуального и логического проектирования.",
    icon: "/lab-svg-1.svg",
  },
  {
    text: "Ускорила выпуск продукта (Time-to-Market) за счет выстраивания эффективного взаимодействия с клиентом и грамотной трансформации требований в техническую документацию (BRD/SRS).",
    icon: "/lab-svg-1.svg",
  },
  {
    text: "Разработала архитектуру SPA-приложения с нуля: настроила безопасный роутинг, динамические зоны авторизации и централизованное управление состоянием через Vuex.",
    icon: "/lab-svg-2.svg",
  },
  {
    text: "Ускорила сборку интерфейса, внедрив современную компонентную базу Nuxt UI и обеспечив 100% адаптивность под Mobile и Desktop устройства.",
    icon: "/lab-svg-2.svg",
  },
];

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

export const CleverscopePrj = ({ className }: TWithClassname) => {
  return (
    <PrjTemplate
      stack={stack}
      imgSrc="/clevertec-bg.jpg"
      className={className}
      title={"CleverScope"}
      description={
        "В своём стремлении повысить качество жизни, они забывают, что современная методология разработки предопределяет высокую востребованность своевременного выполнения сверхзадачи. Ясность нашей позиции очевидна: социально-экономическое развитие не оставляет шанса для экспериментов, поражающих по своей масштабности и грандиозности."
      }
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<ClevertecLogo />}
      data={infoData}
    />
  );
};
