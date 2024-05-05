"use client";

import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function DefaultModal(props: any) {
  const { openModal, itemMinted, setOpenModal } = props;

  return (
    <>
      <Modal show={false} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="space-y-6 flex justify-center flex-col text-2xl items-center">
            <div className="absolute">

            <Image
              className="h-40 w-40 relative "
              src="https://res.cloudinary.com/dv8hvjcim/image/upload/v1617935764/dev_setups/flor_zxewut.png"
              alt=""
            />
            </div>
            <p className="font-mono border-l"> You Successfully Minted!</p>
            <p className="font-sans">{itemMinted.metadata.description}</p>
            <div className="flex">
              <Image
                className="h-80 w-80 object-cover"
                src={itemMinted?.metadata?.image}
                alt={itemMinted.metadata.name}
              />
              <div className="ml-2 font-mono">
                <p className="text-violet-950 font-bold">Attributes</p>
                {itemMinted.metadata.attributes.map((item: any) => (
                  <div>
                    <span>{item.trait_type}: </span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
