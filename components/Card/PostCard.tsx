import React, { useEffect, useState } from "react";
import ReactJWPlayer from "react-jw-player";
import { RiHeartFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { MdComment } from "react-icons/md";
import { useHiveKeychainCeramic } from "@spknetwork/auth-react";
import { ceramicApi } from "../../constants";

type IPost = {
  title: string;
  image: string;
  votes: any[];
  playlist?: any[];
  speak: boolean;
  author: any;
  permlink: string;
  pfp: string;
};

export const PostCard = ({
  title,
  image,
  votes,
  speak,
  playlist,
  author,
  permlink,
  pfp,
}: IPost) => {
  const [username, setUsername] = useState(author);
  const [profilePicture, setProfilePicture] = useState(pfp);
  const router = useRouter();
  const connector = useHiveKeychainCeramic(ceramicApi);

  useEffect(() => {
    const getCeramicProfile = async (didId: string) => {
      const response = await connector.idx.get("basicProfile", didId);
      return response;
    };

    if (author.substring(0, 3) === "did") {
      getCeramicProfile(author).then((profile: any) => {
        setUsername(profile.name);
        setProfilePicture(
          "https://ipfs-3speak.b-cdn.net/ipfs/" +
            profile.image.original.src.split("ipfs://")[1]
        );
      });
    }
  }, []);

  return (
    <div className="border-2 my-3 text-white border-white rounded-xl w-full bg-gray-400">
      <div className="rounded-t-xl">
        {speak ? (
          <div className="w-full rounded-t-xl flex justify-center">
            <ReactJWPlayer
              className="rounded-t-xl w-full"
              playerId="my-unique-id"
              playerScript="https://cdn.jwplayer.com/libraries/HT7Dts3H.js"
              playlist={playlist}
            />
          </div>
        ) : (
          image && (
            <img
              className="w-full h-full rounded-t-xl"
              src={image}
              alt="thumbnail"
            />
          )
        )}
      </div>
      <div className="pt-2 px-5">
        <div className="flex items-center gap-2">
          <img
            src={profilePicture}
            className="rounded-full"
            height={30}
            width={30}
            alt="profile_picture"
          />
          <h1>{username}</h1>
        </div>
        <div className="flex text-center mt-3 justify-center">{title}</div>
        <div className="p-2 flex justify-center gap-2">
          <button
            onClick={() => router.replace(`/@${author}/${permlink}`)}
            className="flex gap-1 justify-center px-5 items-center bg-blue-500 hover:bg-blue-600 transition-all p-1 rounded-xl"
          >
            <MdComment />
          </button>
        </div>
      </div>
    </div>
  );
};
