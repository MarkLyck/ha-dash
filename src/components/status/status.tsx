import type { Entity } from "@/lib/types/entities";
import { cva } from "class-variance-authority";
import { FontAwesomeIcon, getEntityIcon } from "@/utils/icon";
import { getEntityColor } from "@/utils/color";

const iconContainer = cva(
  [
    "rounded-full",
    "w-12",
    "h-12",
    "flex",
    "items-center",
    "flex",
    "justify-center",
    "items-center",
    "mb-2",
    "bg-opacity-25",
  ],
  {
    variants: {
      type: {
        lock: "bg-blue-500 text-blue-600",
        light: "bg-yellow-500 text-yellow-600",
        camera: "bg-red-500 text-red-600",
      },
    },
  }
);

type StatusProps = {
  entity?: Entity;
};

export const Status = ({ entity }: StatusProps) => {
  if (!entity) return null;
  const entityColor = getEntityColor(entity);
  console.log("🔈 ~ entityColor:", entityColor);

  return (
    <div className="flex flex-col items-center">
      <div className={iconContainer({ type: entity.domain })}>
        <FontAwesomeIcon icon={getEntityIcon(entity)} />
      </div>
      <h4 className="font-semibold">{entity.name}</h4>
      <span className="opacity-50">{entity.state}</span>
    </div>
  );
};
