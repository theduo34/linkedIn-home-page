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
    <View key={id} className="z-50 bg-white py-1">
      <View className="relative min-h-[48px] flex-row items-center justify-between px-4 gap-4">
        <View className="items-start">{leftContent || <UserProfile />}</View>

       <View className={"flex-1"}>
         <TextInput
           className={"w-full text-lg leading-normal h-9 rounded-lg border text-gray-400"}
           placeholder={placeholder ? placeholder : "Search here"}
         />
       </View>

        <View className="items-end">{rightContent || <View />}</View>
      </View>

      {children && <View className={'px-4'}>{children}</View>}
    </View>
  );
};

export default TabsTopNav;
