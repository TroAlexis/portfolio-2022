import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
import { BodyScrollLocker } from "components/ui/BodyScrollLocker";
import { Button } from "components/ui/Button";
import React, { FC, useRef } from "react";
import ReactModal from "react-modal";

import { APP_SELECTOR } from "@/constants/app";

import styles from "./index.module.scss";

export interface ModalProps extends ReactModal.Props {}

ReactModal.setAppElement(APP_SELECTOR);

export const Modal: FC<ModalProps> = ({
  className,
  overlayClassName,
  children,
  ...props
}) => {
  const modalClasses = clsx(styles.modal, className);
  const overlayClasses = clsx(styles.overlay, overlayClassName);
  const wrapperRef = useRef(null);

  return (
    <ReactModal
      ref={wrapperRef}
      className={modalClasses}
      overlayClassName={overlayClasses}
      closeTimeoutMS={200}
      {...props}
    >
      <Button icon className={styles.close} onClick={props.onRequestClose}>
        <IconX />
      </Button>

      {children}

      {props.isOpen && <BodyScrollLocker targetRef={wrapperRef} />}
    </ReactModal>
  );
};
