import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = (props) => (
  <HeaderButton
    IconComponent={AntDesign}
    iconSize={23}
    color="dodgerblue"
    {...props}
  />
);

export const MaterialHeaderButtons = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
  );
};
export { Item } from "react-navigation-header-buttons";
