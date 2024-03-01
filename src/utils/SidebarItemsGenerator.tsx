import { NavLink } from "react-router-dom";
import { TSidebarRoute, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[]) => {
  
  const adminSidebarItems = items.reduce((acc: TSidebarRoute[] , item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item.icon,
        label: <NavLink to={`${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name as string,
        label: item.name,
        icon: item.icon,
        children: item?.children?.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        })  as TSidebarRoute[],
      });
    }
    return acc;
  }, []);
  return adminSidebarItems;
};