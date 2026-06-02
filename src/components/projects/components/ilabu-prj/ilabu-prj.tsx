import styles from "./ilabu-prj.module.scss";
import cn from "classnames";
import { PrjTemplate } from "~components/projects/components/prj-template";
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

  // "Спроектировала и внедрила 5 сложных интерактивных форм ввода данных со сквозной валидацией, а также динамический каталог медицинских анализов.",
  // "Интегрировала платежный шлюз, обеспечив безопасный и бесшовный процесс онлайн-оплаты внутри приложения.",
  // "Расширила функционал приложения, заинтегрировав сторонний виджет карт и модуль сканирования/распознавания QR-кодов.",
];

export const IlabuPrj = ({ className }: TWithClassname) => {
  return (
    <PrjTemplate
      imgSrc="/ilabu-bg.png"
      companyLogo={
        <div className={styles.companyLogo}>
          <img src="/ilabu-logo.png" className={styles.companyLogo__img} />
        </div>
      }
      title={"iLabU Test Kits Site"}
      description={
        "В своём стремлении повысить качество жизни, они забывают, что современная методология разработки предопределяет высокую востребованность своевременного выполнения сверхзадачи. Ясность нашей позиции очевидна: социально-экономическое развитие не оставляет шанса для экспериментов, поражающих по своей масштабности и грандиозности."
      }
      colorMain={"#c1e5dd"}
      colorSecondary={"#f5fbf9"}
      data={infoData}
      className={className}
    >
      <div className={cn(styles.mockup__container_first, "prj2-phone-1")}></div>
      <div
        className={cn(styles.mockup__container_second, "prj2-phone-1")}
      ></div>
    </PrjTemplate>
  );
};
