import { NavLink } from "react-router-dom";
import { TSidebarRoute, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[]) => {
  
  const adminSidebarItems = items.reduce((acc: TSidebarRoute[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item?.icon,
        label: <NavLink to={`${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        icon: item?.icon,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          icon: child?.icon,
          label: <NavLink to={`${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebarItems;
};