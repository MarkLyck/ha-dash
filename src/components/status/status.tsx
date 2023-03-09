import type { Entity } from "@/lib/types/entities";
import { cva } from "class-variance-authority";

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
  ],
  {
    variants: {
      type: {
        lock: ["bg-blue-500"],
        camera: ["bg-green-500"],
      },
    },
  }
);

type StatusProps = {
  entity: Entity;
};

export const Status = ({ entity }: StatusProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={iconContainer({ type: entity.domain })}>icon</div>
      <h4 className="font-semibold">{entity.name}</h4>
      <span>{entity.state}</span>
    </div>
  );
};
