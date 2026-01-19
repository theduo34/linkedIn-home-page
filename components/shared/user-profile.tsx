import {Image} from 'react-native';

export function UserProfile () {
  return(
    <Image
      source={{ uri: "https://i.pravatar.cc/150?img=2" }}
      className="h-10 w-10 rounded-full"
      //contentFit="cover"
    />
  )
}