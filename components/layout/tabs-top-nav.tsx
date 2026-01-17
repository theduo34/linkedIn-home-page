import React from 'react';
import {View, TextInput} from 'react-native';
import {UserProfile} from "@/components/shared/user-profile";

interface Props {
  id: string;
  placeholder?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}

const TabsTopNav = ({ id, placeholder, leftContent, rightContent, children }: Props) => {
  return (
    <View key={id} className="bg-white relative py-1 min-h-[48px] flex-row items-center justify-between px-4 gap-4 border-b border-neutral-200 shadow-xs">
      <View className="items-start">{leftContent || <UserProfile />}</View>

      <View className={"flex-1 items-center"}>
        <TextInput
          className={"w-full items-center pl-2 leading-normal h-9 rounded-lg border border-neutral-200 text-neutral-400"}
          placeholder={placeholder ? placeholder : "Search here"}
        />
      </View>

      <View className="items-end">{rightContent || <View />}</View>
    </View>
  );
};

export default TabsTopNav;
