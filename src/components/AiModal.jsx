import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import AlcemiLogo from "../assets/images/alcemi-logo.png";

const AiModal = ({ open = false, onClose }) => {

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  // render over the app
  return createPortal(
    <div
      className="ai-modal"
      role="presentation"
      onMouseDown={(e) => {
        // click outside the card to close
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="ai-modal-wrapper container-m"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-modal-title"
        id="ai-modal"
      >
        <div className="buttons-block">
          <button
            type="button"
            className="return-button"
            onClick={onClose}
            aria-label="Go back"
            title="Go back"
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.40667 0.559987L0 6.99999L6.40667 13.44C6.46453 13.516 6.53804 13.5786 6.62222 13.6237C6.70641 13.6688 6.7993 13.6953 6.89461 13.7014C6.98992 13.7075 7.08542 13.693 7.17466 13.659C7.26389 13.6249 7.34477 13.5721 7.41182 13.5041C7.47886 13.4361 7.53052 13.3545 7.56328 13.2648C7.59604 13.1751 7.60914 13.0794 7.6017 12.9841C7.59425 12.8889 7.56644 12.7964 7.52014 12.7129C7.47384 12.6294 7.41013 12.5568 7.33333 12.5L2.54 7.66665L15.2933 7.66665C15.4701 7.66665 15.6397 7.59642 15.7647 7.47139C15.8898 7.34637 15.96 7.1768 15.96 6.99999C15.96 6.82318 15.8898 6.65361 15.7647 6.52858C15.6397 6.40356 15.4701 6.33332 15.2933 6.33332L2.54 6.33332L7.33333 1.49999C7.45798 1.37445 7.52766 1.20454 7.52704 1.02763C7.52641 0.85072 7.45554 0.681305 7.33 0.556653C7.20446 0.432001 7.03455 0.362324 6.85764 0.362949C6.68073 0.363574 6.51132 0.434451 6.38667 0.559987H6.40667Z" fill="white"/>
            </svg>
          </button>

          <button
            type="button"
            className="close-button"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L20 20M4 20L20 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="content-block">
          <div className="title-block">
            <h1 id="ai-modal-title" className="ai-chat">
              Hello, what are you looking for today?
            </h1>
          </div>

          <div className="buttons-block">
            <div className="single-button button-primary"><span>Product</span></div>
            <div className="single-button button-primary"><span>Information</span></div>
            <div className="single-button button-primary"><span>Support</span></div>
            <div className="single-button button-primary"><span>Brand assets</span></div>
            <div className="single-button button-primary"><span>Consultation</span></div>
            <div className="single-button button-primary"><span>Dresses for summer</span></div>
          </div>
        </div>

        <div className="textarea-block">
          <textarea
            className="ai-textarea"
            rows={6}
            placeholder="Ask anything..."
          />
          <div className="voice-chat-input">
            <button type="button" className="voice-chat" aria-label="Start voice input">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.99967 0.484741C5.53011 0.484741 6.03882 0.695455 6.41389 1.07053C6.78896 1.4456 6.99967 1.95431 6.99967 2.48474V6.48474C6.99967 7.01517 6.78896 7.52388 6.41389 7.89895C6.03882 8.27403 5.53011 8.48474 4.99967 8.48474C4.46924 8.48474 3.96053 8.27403 3.58546 7.89895C3.21039 7.52388 2.99967 7.01517 2.99967 6.48474V2.48474C2.99967 1.95431 3.21039 1.4456 3.58546 1.07053C3.96053 0.695455 4.46924 0.484741 4.99967 0.484741ZM9.66634 6.48474C9.66634 8.83807 7.92634 10.7781 5.66634 11.1047V13.1514H4.33301V11.1047C2.07301 10.7781 0.333008 8.83807 0.333008 6.48474H1.66634C1.66634 7.3688 2.01753 8.21664 2.64265 8.84176C3.26777 9.46688 4.11562 9.81807 4.99967 9.81807C5.88373 9.81807 6.73158 9.46688 7.3567 8.84176C7.98182 8.21664 8.33301 7.3688 8.33301 6.48474H9.66634Z" fill="#FCFCFC"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="logo-block">
          <div className="image-area">
            <img className="image-contain" src={AlcemiLogo} alt="Alcemi" loading="lazy" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AiModal;