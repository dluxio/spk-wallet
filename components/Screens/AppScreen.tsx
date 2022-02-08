import React, { useEffect, useState } from "react";
import Masonary from "react-masonry-css";
import axios from "axios";

import { useQuery } from "../../constants/breakpoints";
import { ceramicApi, placeHolder } from "../../constants";
import { PostCard } from "../Card/PostCard";
import { useHiveKeychainCeramic } from "@spknetwork/auth-react";

export const AppScreen = () => {
  const { isMobile, isTablet } = useQuery();
  const [posts, setPosts] = useState([]);
  const connector = useHiveKeychainCeramic(ceramicApi);

  useEffect(() => {
    axios.get("https://3speak.tv/apiv2/feeds/new").then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const getCols = () => (isTablet ? (isMobile ? 1 : 2) : 3);

  const getPfp = (username: string) => {
    const didId = "did:key:z6MkftD3tqcHAporNCygqi2JJMqroa88BmraBzyVniKFK7ab";
    connector.idx.get("basicProfile", didId).then((response) => {
      // if (response) {
      //   return (
      //     "https://ipfs-3speak.b-cdn.net/ipfs/" +
      //     response.image.original.src.split("ipfs://")[1]
      //   );
      // }
    });

    return placeHolder;
  };

  return (
    <Masonary
      breakpointCols={getCols()}
      className="masonry-grid sm:mx-4"
      columnClassName="masonry-grid_column"
    >
      {posts.map((post: any) => (
        <PostCard
          votes={post.views}
          speak={false}
          title={post.title}
          image={post.images.thumbnail}
          key={post.permlink}
          playlist={[]}
          permlink={post.permlink}
          pfp={getPfp(post.author)}
          author={post.author}
        />
      ))}
    </Masonary>
  );
};
