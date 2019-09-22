import React from "react";
import { NextComponentType } from "next";

// Gets the display name of a JSX component for dev tools
export const getDisplayName = (
  Component: React.ComponentClass | React.FunctionComponent | NextComponentType
) => Component.displayName || Component.name || "Component";
