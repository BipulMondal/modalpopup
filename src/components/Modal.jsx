import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const handleClick = () => {
    setShowModal(true);
    setOpenModal(false);
  }

  
  const handleCrossClick = () => {
    setShowModal(false);
    setOpenModal(true);
  }

  useEffect(() => {
    if(showModal){
      document.getElementById('img').style.opacity = 0.3;
      document.body.style.backgroundColor = 'black'
      document.getElementById('modal').style.transitionDuration = '5s'
    }
    else{
      document.getElementById('img').style.opacity = 1
      document.body.style.backgroundColor = 'white'
    }

  
  }, [showModal])

  const MyModal = () => {
    return (
      <div className=" absolute flex h-screen justify-center items-center" id="modal">
        <img
          className="h-[40rem] w-[20rem] rounded-3xl"
          src="/man.jpg"
          alt="man"
        />
        <div className="absolute mt-[-45rem] ml-[30rem] cursor-pointer">
          <RxCross2
            style={{ color: "red", fontSize: "3rem" }}
            onClick={handleCrossClick}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <img className="object-contain h-full w-full" id="img" src="/news.jpg" alt="newspaper" />
      {openModal && <button
        className="absolute h-20 w-56 bg-blue-700 rounded-full font-bold text-xl text-white"
        onClick={handleClick}
      >
        Open Modal
      </button>}
      {showModal && <MyModal />}
    </div>
  );
};

export default Modal;
