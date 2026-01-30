import { createContext, useContext, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // 마우스가 눌린 위치(Target)를 저장할 Ref
  const mouseDownTarget = useRef(null);

  // 모달 열기: 렌더링할 컴포넌트(content)를 인자로 받음
  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
    // 스크롤 방지
    document.body.style.overflow = "hidden";
  };

  // 모달 닫기
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    // 스크롤 방지 해제
    document.body.style.overflow = "unset";
  };

  const handleBackdropMouseUp = (e) => {
    // 마우스 누른 곳이 배경이고 마우스를 뗀 곳도 배경이며 실제 이벤트가 발생한 곳도 배경일 때만 닫기
    // 슬라이드 등 내부 요소 클릭 시 모달이 닫히지 않도록 방지
    if (
      mouseDownTarget.current === e.currentTarget &&
      e.target === e.currentTarget
    ) {
      closeModal();
    }

    // 초기화
    mouseDownTarget.current = null;
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* 모달 UI 렌더링 영역 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            mouseDownTarget.current = e.target;
          }}
          onMouseUp={handleBackdropMouseUp}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-gray-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // 내부 클릭 전파 방지
            onMouseDown={(e) => e.stopPropagation()} // 내부 드래그 시작 시 전파 방지
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 text-white/70 hover:text-white"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>

            {/* 동적으로 주입된 콘텐츠가 표시되는 곳 */}
            <div className="text-white">{modalContent}</div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

// 커스텀 훅
export const useModal = () => useContext(ModalContext);
