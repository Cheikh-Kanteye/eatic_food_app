import { View, Text, ImageSourcePropType } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import colors from "@src/theme/colors";
import { images } from "@src/assets";
import { FlatList } from "react-native-gesture-handler";

type ITabItems = {
  id: string;
  label: string;
  img: ImageSourcePropType;
}[];

type ItemType = { id: string; label: string; img: ImageSourcePropType };

const TabItems: ITabItems = [
  {
    id: "001",
    label: "Pizza",
    img: images.pizza,
  },
  {
    id: "002",
    label: "Burger",
    img: images.burger,
  },
  {
    id: "003",
    label: "Salad",
    img: images.salad,
  },
  {
    id: "004",
    label: "Bifteck",
    img: images.bifteck,
  },
  {
    id: "005",
    label: "Ice",
    img: images.ice,
  },
  {
    id: "006",
    label: "Bacon",
    img: images.bacon,
  },
  {
    id: "007",
    label: "Chicken",
    img: images.chicken,
  },
];

interface TabItemProps {
  item: ItemType;
  index: number;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}
const TabItem = ({
  item,
  index,
  activeIndex,
  setActiveIndex,
}: TabItemProps) => {
  const active = activeIndex === index;
  return (
    <Tab
      style={{
        borderColor: colors.primary,
        borderWidth: active ? 1 : 0,
        elevation: 2,
      }}
      onPress={() => setActiveIndex(index)}
    >
      <Icon
        style={{ tintColor: active ? colors.primary : colors.textGrey }}
        resizeMode="contain"
        source={item.img}
      />
      <Label style={{ color: active ? colors.primary : colors.textGrey }}>
        {item.label}
      </Label>
    </Tab>
  );
};

export default function FoodItemsTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);

  useEffect(() => {
    scrollRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
      viewPosition: 0.1,
    });
  }, [activeIndex]);
  return (
    <ScrollableContainer
      //@ts-ignore
      data={TabItems}
      ref={scrollRef}
      keyExtractor={(item: ItemType) => item.id}
      initialScrollIndex={activeIndex}
      renderItem={({ item, index }: { item: ItemType; index: number }) => (
        <TabItem {...{ item, index, activeIndex, setActiveIndex }} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const ScrollableContainer = styled(FlatList<ItemType>)`
  height: 60px;
`;
const Icon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const Tab = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 16px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
  background-color: ${colors.white};
`;

const Label = styled.Text`
  font-size: 14px;
  font-family: "SF_REGULAR";
`;
