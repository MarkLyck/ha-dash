interface Attributes {
  friendly_name?: string;
  icon?: string;
  entity_picture?: string;
  assumed_state?: boolean;
  unit_of_measurement?: string;
  [key: string]: unknown;
}

interface Context {
  context_id: string;
  user_id: string;
  parent_id: string;
}

interface EntityBase {
  state: string;
  entity_id: string;
  domain: string;
  object_id: string;
  name: string;
  last_updated: Date;
  last_changed: Date;
  attributes?: Attributes;
  context?: Context;
}

interface Lock extends Omit<EntityBase, "state" | "domain"> {
  domain: "lock";
  state: "locked" | "unlocked";
}

// interface Camera extends Omit<EntityBase, "state" | "domain"> {
//   domain: "camera";
//   state: "on" | "off";
// }

// interface Light extends Omit<EntityBase, "state" | "domain"> {
//   domain: "light";
//   state: "on" | "off";
// }

export type Entity = Lock; //| Camera | Light;
