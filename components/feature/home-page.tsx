import {RefreshControl, ScrollView} from "react-native";
import {dummyPosts} from "@/constants/dummy-posts";
import {PostCard} from "@/components/feature/post-card";
import React from "react";

export function HomePage() {
  const [refreshing, setRefreshing] = React.useState(false);

  return(
    <ScrollView
      keyboardDismissMode={"on-drag"}
      contentInsetAdjustmentBehavior={"automatic"}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={() => ''}/>}
      style={{ flex: 1}}
      contentContainerClassName="pb-4 flex-col gap-2"
      showsVerticalScrollIndicator={false}
    >
      {dummyPosts.map((post) => (
      <PostCard key={post.id} post={post}/>
      ))}
    </ScrollView>
  )
}