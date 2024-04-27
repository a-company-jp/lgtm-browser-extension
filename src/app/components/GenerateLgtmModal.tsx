import React, { Dispatch, SetStateAction, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useLgtmRepo from '../../hooks/useLgtmRepo';
import { imageCopy } from '../../utils';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const GenerateLgtmModal = ({ setShowModal }: Props) => {
  const { post } = useLgtmRepo();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imgBlob, setImgBlob] = useState<Blob>();
  const [recievedImage, setRecievedImage] = useState<string>('');

  const closeModal = () => {
    setShowModal(false);
    setUploadedImage(null);
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setUploadedImage(result);
      }
    };
    reader.readAsDataURL(file);

    const blob = new Blob([file], { type: file.type });
    setImgBlob(blob);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = () => {
    setUploadedImage(null);
  };

  const handleSubmit = async () => {
    const res = await post(imgBlob);
    setRecievedImage(res.imageUrl);
  };

  const handleOnCopy = async (imageUrl: string) => {
    await imageCopy(imageUrl);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        {!uploadedImage ? (
          <div
            {...getRootProps()}
            className="border-dashed border-4 border-[#FF8C8C] p-8 rounded-lg text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-gray-600">Drag & drop a file here, or click to select file</p>
          </div>
        ) : (
          <>
            {!recievedImage ? (
              <div className="flex flex-col items-center mt-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-[60%] max-h-[60%] h-auto"
                />
                <div className="w-[60%] mt-2 flex justify-between">
                  <button
                    onClick={handleDelete}
                    className="bg-gray-100 text-[#FF8C8C] rounded font-bold py-2 px-4"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#FF8C8C] text-white rounded font-bold  py-2 px-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center mt-4">
                <img
                  src={recievedImage}
                  alt="Recieved"
                  className="max-w-[60%] max-h-[60%] h-auto"
                />
                <div className="mt-2 flex">
                  <button
                    onClick={() => handleOnCopy(recievedImage)}
                    className="bg-[#FF8C8C] text-white py-2 px-4 rounded"
                  >
                    Image Copy
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GenerateLgtmModal;
