import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext(null);
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const open = (config) =>
    new Promise((resolve) => {
      setModal({ ...config, resolve });
    });

  const close = (result) => {
    modal?.resolve(result);
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openConfirm: (msg) => open({ type: "confirm", msg }),
        openPrompt: (msg) => open({ type: "prompt", msg }),
        openAlert: (msg) => open({ type: "alert", msg }),
      }}
    >
      {children}
      {modal &&
        createPortal(
          <ModalRenderer modal={modal} onClose={close} />,
          document.body,
        )}
    </ModalContext.Provider>
  );
};

const ModalRenderer = ({ modal, onClose }) => {
  const [value, setValue] = useState("");

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/40
        lgks-modal-overlay
      "
    >
      <div
        className="
          w-[420px]
          rounded-lg bg-white
          shadow-xl
          p-6
          lgks-modal
        "
      >
        <p
          className="
            mb-4 text-gray-800
            lgks-modal-message
          "
        >
          {modal.msg}
        </p>

        {modal.type === "prompt" && (
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="
              mb-4 w-full
              rounded border border-gray-300
              px-3 py-2
              outline-none
              focus:border-blue-500
              lgks-modal-input
            "
          />
        )}

        <div
          className="
            flex justify-end gap-2
            lgks-modal-actions
          "
        >
          {modal.type !== "alert" && (
            <button
              onClick={() => onClose(null)}
              className="
                rounded bg-gray-200
                px-4 py-2 text-gray-800
                hover:bg-gray-300
                lgks-modal-cancel
              "
            >
              Cancel
            </button>
          )}

          <button
            onClick={() => onClose(modal.type === "prompt" ? value : true)}
            className="
              rounded bg-blue-600
              px-4 py-2 text-white
              hover:bg-blue-700
              lgks-modal-ok
            "
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRenderer;
