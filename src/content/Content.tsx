import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useLgtmRepo from '../hooks/useLgtmRepo';
import { imageCopy } from '../utils';

const Content = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const { list } = useLgtmRepo();

  const handleOnClickLgtmButton = async () => {
    const lgtms = await list();
    const index = Math.floor(Math.random() * (lgtms.length - 1));
    const url = lgtms[index].url;
    await imageCopy(url);
    setIsShowAlert(true);
    setTimeout(() => {
      setIsShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    // コンポーネントがマウントされたときにのみイベントリスナーを追加
    const lgtmButton = document.getElementById('lgtmButton');
    lgtmButton?.addEventListener('click', handleOnClickLgtmButton);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => {
      lgtmButton?.removeEventListener('click', handleOnClickLgtmButton);
    };
  }, []); // このeffectはマウント時にのみ実行される

  return (
    <div className="fixed z-[999] top-[2.5%] left-1/2 w-[900px] transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
      {isShowAlert && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 rounded"
          role="alert"
        >
          <div className="flex items-center gap-3">
            <FaCheckCircle size={24} />
            <p className="text-lg">Copied LGTM !! Paste to Comment Form !!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
