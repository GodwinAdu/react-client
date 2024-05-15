import { useState } from 'react'
import Breadcrumbs from '../components/commons/Breadcrumbs';
import { images } from '../components/lightbox/imageData';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineClose } from 'react-icons/md'
import ScrollUp from '../components/commons/ScrollUp';


const GalleryPage = () => {
 
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>  
      <ScrollUp />
      <Breadcrumbs
        pageName="Our Gallery"
        description="Explore our collection of beautiful images."
      />
      <div className="p-4">
      <div className="grid grid-col-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="cursor-pointer object-cover h-48 w-full rounded"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative p-4 bg-white shadow-xl rounded-l">
            <img src={images[currentImageIndex]} alt="" className="max-h-[70vh] max-w-[90vw] rounded shadow-lg"/>
            <button className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md" onClick={closeModal}><MdOutlineClose className='text-xl md:text-2xl' /></button>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={goPrev}><MdArrowBackIos className='text-xl md:text-2xl' /></button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={goNext}><MdArrowForwardIos className='text-xl md:text-2xl' /></button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default GalleryPage;
