import React, { useState } from 'react';
import { Lgtm } from '../../types/lgtm.type';
import { FaRegCopy, FaRegCheckCircle } from 'react-icons/fa';

interface Props {
  lgtm: Lgtm;
}

const LgtmItem = ({ lgtm }: Props) => {
  // NOTE: hover & click で image copy
  const [isCopying, setIsCopying] = useState(false);

  const handleCopyClick = () => {
    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button className="group relative" onClick={handleCopyClick}>
        <img
          src={lgtm.url}
          alt=""
          className="inset-0 h-full w-full group-hover:opacity-20 rounded-xl"
        />
        {isCopying ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <FaRegCheckCircle className="mr-2 text-green-700" color="" size={35} />
            <span className="text-green-700 font-bold">Copied!!</span>
          </div>
        ) : (
          <FaRegCopy
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75"
            color=""
            size={35}
          />
        )}
      </button>
    </div>
  );
};

export default LgtmItem;
