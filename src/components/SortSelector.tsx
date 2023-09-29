import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              console.log(order.value);
              onSelectSortOrder(order.value);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
