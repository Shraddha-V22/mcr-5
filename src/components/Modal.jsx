import React from "react";

export default function Modal({ open, setOpen, children }) {
  return (
    open && (
      <section className="fixed top-0 grid h-[100vh] w-[100vw] place-items-center bg-black/20">
        <section className="rounded-md bg-white p-4">
          <button onClick={() => setOpen(false)} className="">
            X
          </button>
          <section className="">{children}</section>
        </section>
      </section>
    )
  );
}
