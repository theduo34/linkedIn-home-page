import { PostInterface } from "@/constants/dummy-posts";
import { Pressable, View, Text } from "react-native";
import { Ellipsis, Globe, Heart, MessageCircle, Repeat2, Send, ThumbsUp, UserPlus, X } from "lucide-react-native";
import { Image } from "expo-image";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";

const postActions: {key: string, label: string, icon: React.ReactNode, onClick: () => void}[] = [
  {
    key: "like",
    label: "Like",
    icon:  <ThumbsUp size={20} color="#6b7280" />,
    onClick: () => ''
  },
  {
    key: "comment",
    label: "Comment",
    icon:  <MessageCircle size={20} color="#6b7280" />,
    onClick: () => ''
  },
  {
    key: "repost",
    label: "Repost",
    icon:  <Repeat2 size={20} color="#6b7280" />,
    onClick: () => ''
  },
  {
    key: "send",
    label: "Send",
    icon: <Send size={20} color="#6b7280" />,
    onClick: () => ''
  }
]

export const PostCard = ({ post }: { post: PostInterface }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LINES = 3;
  const shouldTruncate = post.contents.text.length > 200;

  return (
    <View className="w-full flex-col bg-white gap-2 shadow-xs py-2 border border-neutral-200">
      {/* Author Section */}
      <View className="w-full flex-row items-start justify-between px-4">
        <View className="flex-row items-start gap-2 flex-1">
          <Image
            source={{ uri: post.author?.profilePicture }}
            className="h-10 w-10 rounded-full"
            contentFit="cover"
          />

          <View className="flex-col flex-1">
            <View className="flex-row items-center gap-1">
              <Text className="font-bold text-neutral-800" style={{ lineHeight: 18 }}>
                {post.author.firstName} {post.author.lastName} {post.author?.additionalName}
              </Text>
              <View className="bg-neutral-600 w-1 h-1 rounded-full" />
              <Text className="text-xs text-neutral-500" style={{ lineHeight: 18 }}>
                {post.author.isFollowing ? "Following" : `${post.author.connectionDegree}`}
              </Text>
            </View>

            <Text
              className="text-sm text-neutral-500"
              numberOfLines={1}
              style={{ lineHeight: 16, marginTop: 2 }}
            >
              {post.author.headlines}
            </Text>

            <View className="flex-row items-center gap-1" style={{ marginTop: 2 }}>
              <Text className="text-xs text-neutral-400" style={{ lineHeight: 14 }}>
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </Text>
              <View className="bg-neutral-400 w-1 h-1 rounded-full" />
              <Globe size={12} color="#9ca3af" />
            </View>
          </View>
        </View>

        <View className="ml-2">
          {post.author.isFollowing ? (
            <View className="flex-row items-center gap-2">
              <Pressable onPress={() => ""}>
                <Ellipsis size={20} color="#6b7280" />
              </Pressable>
              <Pressable onPress={() => ""}>
                <X size={20} color="#6b7280" />
              </Pressable>
            </View>
          ) : (
            <Pressable className="flex-row items-center gap-1 px-3 py-1">
              <UserPlus size={16} color="#0a66c2" />
              <Text className="text-sm font-semibold" style={{ color: "#0a66c2" }}>
                Connect
              </Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Post Content */}
      <View className="flex-col">
        <View className="px-4">
          <Text className="text-sm text-neutral-800" numberOfLines={isExpanded ? undefined : MAX_LINES}>
            {post.contents.text}
          </Text>

          {shouldTruncate && (
            <Pressable onPress={() => setIsExpanded(!isExpanded)}>
              <Text className="text-sm font-semibold mt-1" style={{ color: "#0a66c2" }}>
                ...{isExpanded ? "Show less" : "see more"}
              </Text>
            </Pressable>
          )}
        </View>

        {post.contents?.media && post.contents.media.length > 0 && (
          <View className="mt-2">
            {post.contents.media.map((media, index) => (
              <View key={index}>
                {media.type === "image" && (
                  <Image
                    source={{ uri: media.thumbnail }}
                    className="w-full h-96"
                    contentFit="cover"
                  />
                )}

                {media.type === "video" && media.thumbnail && (
                  <View className="relative">
                    <Image
                      source={{ uri: media.thumbnail }}
                      className="w-full h-96"
                      contentFit="cover"
                    />
                    <View className="absolute inset-0 items-center justify-center">
                      <View className="w-16 h-16 rounded-full bg-white/90 items-center justify-center">
                        <Text className="text-2xl ml-1">▶</Text>
                      </View>
                    </View>
                    {media.duration && (
                      <View className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                        <Text className="text-white text-xs">
                          {Math.floor(media.duration / 60)}:{(media.duration % 60).toString().padStart(2, "0")}
                        </Text>
                      </View>
                    )}
                  </View>
                )}

                {media.type === "document" && (
                  <View className="bg-gray-100 p-4 mx-4 rounded-lg border border-gray-300">
                    <Text className="text-gray-700 font-medium">📄 Document attached</Text>
                  </View>
                )}

                {media.type === "article" && media.thumbnail && (
                  <Pressable>
                    <Image source={{ uri: media.thumbnail }} className="w-full h-48" contentFit="cover" />
                    <View className="absolute bottom-0 left-0 right-0 p-3 bg-black/60">
                      <Text className="text-white font-semibold">{media.alt || "Read article"}</Text>
                    </View>
                  </Pressable>
                )}
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Reactions Section */}
      <View className="w-full flex-col gap-2 px-4">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="flex-row items-center">
              <View className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white items-center justify-center">
                <ThumbsUp size={10} color="white" />
              </View>
              <View className="w-5 h-5 rounded-full bg-green-600 border-2 border-white -ml-1 items-center justify-center">
                <Text className="text-white text-xs">👏</Text>
              </View>
              <View className="w-5 h-5 rounded-full bg-red-600 border-2 border-white -ml-1 items-center justify-center">
                <Heart size={10} color="white" fill="white" />
              </View>
            </View>
            <Text className="ml-2 text-xs text-neutral-600">
              {post.likesCount.toLocaleString()}
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Text className="text-xs text-neutral-600">
              {post.comments?.length || 0} comments
            </Text>
            <Text className="text-xs text-neutral-600">
              {post.repostsCount} reposts
            </Text>
          </View>
        </View>

        <View className="w-full h-px bg-neutral-200" />

        {/* Action buttons */}
        <View className="w-full flex-row items-center justify-around pb-1">
          {postActions.map((action) => (
            <Pressable
              key={action.key}
              className="flex-row items-center gap-1 px-4 py-2">
              {action.icon}
              <Text className="text-sm font-medium text-neutral-700">
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};