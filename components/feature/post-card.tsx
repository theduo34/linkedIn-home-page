import {PostInterface} from "@/constants/dummy-posts";
import {Pressable, View, Text} from "react-native";
import {Ellipsis, Globe, MessageCircle, Repeat2, Send, ThumbsUp, UserPlus, X} from "lucide-react-native";
import {Image} from "expo-image";
import {formatDistanceToNow} from "date-fns";

export const PostCard = ({post} : {post: PostInterface}) => {
  return(
    <View className={"flex-col bg-white gap-2 items-center shadow-xs py-2 border border-neutral-200"}>
      {/*author*/}
      <View className={"w-full flex-row items-start justify-between gap-2 px-4"}>
        <View className={"flex-row items-center gap-1"}>
          <View
            //source={{ uri: post.author?.profilePicture}}
            className={"h-10 w-10 border rounded-full object-cover"}
          ></View>
          <View className={"flex-col items-center gap-0 "}>
            <View className={"flex-row gap-1 items-center my-0 px-0"}>
              <Text className={"text-lg font-bold leading-normal text-neutral-600"}>
                {post.author.firstName} {post.author.lastName} {post.author?.additionalName}
              </Text>
              <View className={"items-center bg-neutral-600 w-1 h-1 rounded-full"}></View>
              <Text className={"flex-row text-sm leading-normal text-neutral-400"}>
                { post.author.isFollowing ?
                  "Following" : `${post.author.connectionDegree}`}
              </Text>
            </View>
           <Text  className={"my-0 px-0 text-sm line-clamp-1 truncate text-neutral-400"}>
             {post.author.headlines}
           </Text>
            <View className={"my-0 px-0 flex-row items-center gap-1"}>
              <Text className={"text-sm text-neutral-400"}>
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </Text>
              <View className={"bg-neutral-600 w-1 h-1 rounded-full"}></View>
              <Globe size={10} />
            </View>
          </View>
        </View>
        {post.author.isFollowing ? (
          <View className={"items-start flex-row gap-2"}>
            <Pressable onPress={() => ''}>
              <Ellipsis size={18} width={18} height={18} />
            </Pressable>
            <Pressable onPress={() => ''}>
              <X size={18} width={18} height={18} />
            </Pressable>
          </View>
        ): (
          <View className={"items-start"}>
            <Pressable className={"flex-row gap-1"}>
              <UserPlus size={14} color={"blue"} />
              <Text className={"text-blue-600"}>Connect</Text>
            </Pressable>
          </View>
        )}
      </View>

      {/*actual post*/}
      <View className={"flex-col gap-2"}>
        <Text className={"px-4"}>
          {post.contents.text}
        </Text>
        {post.contents?.media && (
          post.contents?.media.map((media) => (
            <View key={media.alt}>
              {media.type === "image" && (
                <Image
                  source={{ uri: media.thumbnail}}
                  className="w-full h-96 object-cover"
                  contentFit="cover"
                />
              )}
              {/*{media.type === "video" &&*/}
              {/*  */}
              {/*}*/}
            </View>
          ))
        )}
      </View>

      {/*reaction tab*/}
      <View className={"w-full flex-col gap-1 py-1 px-4"}>
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="flex-row">
              <View className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white" />
              <View className="w-5 h-5 rounded-full bg-green-600 border-2 border-white -ml-1" />
              <View className="w-5 h-5 rounded-full bg-amber-500 border-2 border-white -ml-1" />
            </View>
            <Text className="ml-2 text-sm text-neutral-600">
              {post.likesCount.toLocaleString()} likes
            </Text>
          </View>
          <Text className="text-sm text-neutral-600">
            {post.repostsCount} reposts
          </Text>
        </View>

        <View className={"w-full h-px bg-neutral-200 my-1"} />

          <View className="w-full flex-row items-center justify-around">
            <Pressable className="flex-col items-center gap-1 flex-1">
              <ThumbsUp size={20} className="text-neutral-600" />
              <Text className="text-xs font-medium text-neutral-700">Like</Text>
            </Pressable>
            <Pressable className="flex-col items-center gap-1 flex-1">
              <MessageCircle size={20} className="text-neutral-600" />
              <Text className="text-xs font-medium text-neutral-700">Comment</Text>
            </Pressable>
            <Pressable className="flex-col items-center gap-1 flex-1">
              <Repeat2 size={20} className="text-neutral-600" />
              <Text className="text-xs font-medium text-neutral-700">Repost</Text>
            </Pressable>
            <Pressable className="flex-col items-center gap-1 flex-1">
              <Send size={20} className="text-neutral-600" />
              <Text className="text-xs font-medium text-neutral-700">Send</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
}