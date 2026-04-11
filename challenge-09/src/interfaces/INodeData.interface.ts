import type { ComponentType } from "react";

export interface INodeData {
  title: string;
  link?: string;
  component?: ComponentType;
  children: INodeData[];
}
