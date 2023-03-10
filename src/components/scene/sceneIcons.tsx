import { cva } from "class-variance-authority";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseNight,
  faStars,
  faSunBright,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  faHouseWindow as faHouseWindowSolid,
  faHeart as faHeartSolid,
} from "@fortawesome/pro-solid-svg-icons";

const icon = cva(["mr-3", "text-2xl", "h-6", "w-6"], {
  variants: {
    active: {
      true: "text-yellow-500",
      false: "text-neutral-700",
    },
  },
});

export const getSceneIcon = ({ name }: { name: string }) => {
  const sceneName = name.toLowerCase();
  if (sceneName.includes("night")) return GoodNightSceneIcon;
  if (sceneName.includes("morning")) return GoodMorningSceneIcon;
  if (
    sceneName === "romance" ||
    sceneName === "love" ||
    sceneName.includes("romantic") ||
    sceneName.includes("sexy")
  ) {
    return RomanticSceneIcon;
  }

  return DefaultSceneIcon;
};

export const DefaultSceneIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={faStars} className={icon({ active })} />
);
const goodMorningIconSun = cva([], {
  variants: {
    active: {
      true: "text-yellow-500",
      false: "text-neutral-400",
    },
  },
});
const goodMorningIconHouse = cva([], {
  variants: {
    active: {
      true: "text-[#7249E3]",
      false: "text-neutral-700",
    },
  },
});
export const GoodMorningSceneIcon = ({ active }: { active: boolean }) => (
  <span className={`${icon({ active })} fa-layers`}>
    <FontAwesomeIcon
      icon={faSunBright}
      transform="shrink-5 up-1 left-3"
      className={goodMorningIconSun({ active })}
      inverse
    />
    <FontAwesomeIcon
      icon={faHouseWindowSolid}
      transform="shrink-6 down-1 right-1"
      className={goodMorningIconHouse({ active })}
    />
  </span>
);

export const GoodNightSceneIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={faHouseNight}
    className={icon({ active })}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            "--fa-primary-color": "#7249E3",
            "--fa-secondary-color": "#DBC157",
          }
        : undefined
    }
  />
);

const romanticIcon = cva(["text-opacity-100"], {
  variants: {
    active: {
      true: "text-red-500",
      false: "text-neutral-700",
    },
  },
});
export const RomanticSceneIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={faHeartSolid}
    className={`${icon({ active })} ${romanticIcon({ active })}`}
  />
);

// Cooking
// Party
// Work
// Study
// Gaming
// Exercise
// Reading
