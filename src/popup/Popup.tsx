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
      <div className="p-4 z-[999] flex justify-between bg-white outline sticky top-0">
        <p className="text-2xl font-bold">LGTM Generator</p>
        <button onClick={openModal} className="p-2 text-sm outline rounded hover:bg-gray-100">
          + Generate
        </button>
      </div>
      <div className="p-4">
        <LgtmList />
      </div>

      {showModal && <GenerateLgtmModal setShowModal={setShowModal} />}
    </>
  );
};

export default Popup;
