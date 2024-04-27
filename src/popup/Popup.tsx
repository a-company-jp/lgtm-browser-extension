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
      <div className="p-4 z-[999] flex justify-between bg-white shadow-xl sticky top-0 bg-gradient-to-r from-[#FF8C8C] to-[#E44C4C]">
        <p className="text-2xl font-bold text-white outline-gray">LGTM GIFT</p>
        <button
          onClick={openModal}
          className="p-2 text-sm outline outline-gray-300 text-white rounded transition-colors"
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
