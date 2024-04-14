import { useState } from 'react';
import LgtmList from '../app/components/LgtmList';
import GenerateLgtmModal from '../app/components/GenerateLgtmModal';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[15rem]';
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="p-4 z-[999] flex justify-between bg-white shadow-xl sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-500">
        <p className="text-2xl font-bold text-white outline-gray">LGTM Generator</p>
        <button
          onClick={openModal}
          className="p-2 text-sm outline outline-gray-300 text-white rounded hover:bg-blue-400 transition-colors"
        >
          + Generate
        </button>
      </div>
      <div className="p-4 min-h-[500px]">
        <LgtmList />
      </div>

      {showModal && <GenerateLgtmModal setShowModal={setShowModal} />}
    </>
  );
};

export default Popup;
