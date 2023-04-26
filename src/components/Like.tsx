import React from 'react';
import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

interface LikeProps {
  index?: number;
}

const Like = ({ index }: LikeProps) => {
  const [like, setLike] = useState(false);
  return (
    <>
      {!like ? (
        <AiFillLike onClick={() => setLike(true)} />
      ) : (
        <AiFillLike color="red" onClick={() => setLike(false)} />
      )}
    </>
  );
};

export default Like;
