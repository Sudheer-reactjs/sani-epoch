import React from 'react';
import ReactDOM from 'react-dom';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-[15px] rounded-lg  mx-auto w-[94%] max-w-[1200px]  h-[60vh] md:h-[80vh] md:p-[30px]">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 rounded-[50%] text-[20px] bg-black h-[30px] z-10 w-[30px] text-[#fff]"
        >
          &times;
        </button>
        <video
          controls
          autoPlay
          className="w-full rounded-lg h-[100%] object-cover"
        >
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
