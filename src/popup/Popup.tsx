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
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">LGTM Generator</p>
          <button onClick={openModal} className="p-2 text-sm outline rounded hover:bg-gray-100">
            + Generate
          </button>
        </div>
        <hr className="my-4" />
        <div>
          <LgtmList />
        </div>
      </div>

      {showModal && <GenerateLgtmModal setShowModal={setShowModal} />}
    </>
  );
};

export default Popup;
