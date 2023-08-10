import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

import Button from './common/Button';

export default function ExportBill({ closeModal, isOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center p-4 text-center mt-32">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg text-center bg-white p-6 align-middle shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full grid place-content-center bg-green-100 mx-auto">
                    <ClipboardDocumentListIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <Dialog.Title as="h3" className="text-lg font-medium mt-5">
                    Export Bill
                  </Dialog.Title>
                  <div className="mt-1">
                    <p className="text-gray-500">
                      You can export a pre-filled PDF form, or a simplified
                      guide which helps you fill out the online application
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="bg-indigo-600 text-white w-full">
                      Export PDF Bill
                    </Button>
                    <Button className="w-full" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
