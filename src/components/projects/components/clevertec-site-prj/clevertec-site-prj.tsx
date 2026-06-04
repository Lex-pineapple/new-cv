import { PrjTemplate } from "~components/projects/components/prj-template";
import type { TWithClassname } from "~types/general";
import styles from "./clevertec-site-prj.module.scss";
import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
import type { TPrjType } from "~components/projects/projects";

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

  // "Спроектировала и внедрила 5 сложных интерактивных форм ввода данных со сквозной валидацией, а также динамический каталог медицинских анализов.",
  // "Интегрировала платежный шлюз, обеспечив безопасный и бесшовный процесс онлайн-оплаты внутри приложения.",
  // "Расширила функционал приложения, заинтегрировав сторонний виджет карт и модуль сканирования/распознавания QR-кодов.",
];

const stack = [
  {
    icon: "/icons/ts-icon.svg",
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

export const ClevertecSitePrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={2}
      onBackwardsClick={onBackwardsClick}
      onForwardClick={onForwardClick}
      stack={stack}
      imgSrc="/clevertec-bg.jpg"
      className={className}
      title={"Клевер Технолоджи"}
      description={
        "В своём стремлении повысить качество жизни, они забывают, что современная методология разработки предопределяет высокую востребованность своевременного выполнения сверхзадачи. Ясность нашей позиции очевидна: социально-экономическое развитие не оставляет шанса для экспериментов, поражающих по своей масштабности и грандиозности."
      }
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<ClevertecLogo />}
      data={infoData}
    >
      <div className={styles.mockup}>
        <div className={styles.mockup__device}>
          <img className={styles.mockup__imgSite} src="/clevertec-site.png" />
          <img className={styles.mockup__imgDevice} src="/laptop-mockup.svg" />
        </div>
        <div className={styles.mockup__device_phone}>
          <img
            className={styles.mockup__imgSite_phone}
            src="/clevertec-site.png"
          />
          <img
            className={styles.mockup__imgDevice_phone}
            src="/phone-mockup.svg"
          />
        </div>
      </div>
    </PrjTemplate>
  );
};
