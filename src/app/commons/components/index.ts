export * from "./atoms";
export * from "./molecules";

import { ATOMS_COMPONENT } from "./atoms";
import { MOLECULES_COMPONENT } from "./molecules";

export const BcpComponents = [...ATOMS_COMPONENT, ...MOLECULES_COMPONENT];
