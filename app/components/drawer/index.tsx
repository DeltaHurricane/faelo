import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RoundedButton } from '../buttons';
import { CloseIcon } from '../icons';

type DrawerProps = {
  title?: string,
  description?: string,
  children: React.ReactNode,
  isOpen: boolean,
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export  function Drawer({
  title = '',
  description = '',
  children,
  isOpen,
  setIsOpen
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-40 inset-0 overflow-y-auto"
      >
        <div className="flex w-3/4 h-screen min-h-full">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className={`flex flex-col justify-between bg-white z-50
                          w-full max-w-sm py-6 overflow-hidden text-left
                          align-middle shadow-xl rounded-r-2xl`}>
              <div>
                <Dialog.Title
                  className="font-bold text-2xl md:text-4xl text-blue-500"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>
                {children}
              </div>
              <div className="self-center mt-10">
                <RoundedButton className='bg-red-200 text-red-500 flex gap-2'
                  onClick={() => setIsOpen(!isOpen)}> <CloseIcon></CloseIcon>Fechar</RoundedButton>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}