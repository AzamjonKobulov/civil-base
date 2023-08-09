import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Button from './Button';

export default function MyModal({ closeModal, isDropOpen }) {
  return (
    <>
      <Transition appear show={isDropOpen} as={Fragment}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="absolute top-16 right-5 lg:right-10"
              >
                <Dialog.Panel className="w-full max-w-xs lg:max-w-sm transform overflow-hidden rounded-lg bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden">
                        <Image
                          src="/assets/images/avatar-4.png"
                          alt="Image"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <Dialog.Title
                          as="h3"
                          className="font-medium text-gray-900"
                        >
                          Emilia Gates
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-gray-500">
                            Hasn’t checked in yet.
                          </p>
                          <p className="text-gray-500">
                            Expected check-in time: 10am
                          </p>
                        </div>

                        <div className="mt-4 space-x-3">
                          <Button className="text-white bg-indigo-600">
                            Contact Parent
                          </Button>
                          <Button onClick={closeModal}>Ignore</Button>
                        </div>
                      </div>
                    </div>
                    <button onClick={closeModal}>
                      <XMarkIcon className="w-5 h-5" />
                    </button>
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

// import Image from 'next/image';
// import Button from './Button';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// export default function ProfileDropdown({ onClose }) {
//   return (
//     <div className="absolute right-0 sm:right-5 top-14 w-80 lg:w-96 flex items-start justify-between p-4 rounded-lg z-50 shadow-lg bg-white">
//       <div className="flex space-x-3">
//         <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden">
//           <Image
//             src="/assets/images/avatar-4.svg"
//             alt="Image"
//             width={40}
//             height={40}
//           />
//         </div>
//         <div className="text-start">
//           <h5 className="text-sm font-medium">Emilia Gates</h5>
//           <p className="text-gray-500">Hasn’t checked in yet.</p>
//           <p className="text-gray-500">Expected check-in time: 10am</p>
//           <div className="mt-4 flex items-center space-x-3">
//             <Button className="text-white bg-indigo-600">Contact Parent</Button>
//             <Button onClick={onClose}>Ignore</Button>
//           </div>
//         </div>
//       </div>
//       <button onClick={onClose}>
//         <XMarkIcon className="w-5 h-5" />
//       </button>
//     </div>
//   );
// }
