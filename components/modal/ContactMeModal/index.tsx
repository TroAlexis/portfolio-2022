import Web3ContactFormInput from "components/form/Web3ContactFormInput";
import { Button } from "components/ui/Button";
import { Heading } from "components/ui/Heading";
import Input from "components/ui/Input";
import { Modal, ModalProps } from "components/ui/Modal";
import { Text } from "components/ui/Text";
import React, { FC } from "react";

import styles from "./index.module.scss";

interface Props extends ModalProps {}

export const ContactMeModal: FC<Props> = (props) => {
  return (
    <Modal className={styles.modal} {...props}>
      <form
        className={styles.form}
        action={"https://api.web3forms.com/submit"}
        method={"POST"}
      >
        <Web3ContactFormInput />

        <Heading preset={"h1"} className={styles.header}>
          Contact me
        </Heading>
        <Input
          wrapperClassName={styles.input}
          label={<Text as={"span"}>Name</Text>}
          placeholder={"Enter your name"}
          id={"name"}
          name={"name"}
          required
        />
        <Input
          wrapperClassName={styles.input}
          placeholder={"Enter your e-mail"}
          label={<Text as={"span"}>Email</Text>}
          pattern="[^@\s]+@[^@\s]+"
          title={"Please enter a valid email address"}
          id={"email"}
          name={"email"}
          required
        />
        <Input
          multiline
          wrapperClassName={styles.input}
          placeholder={"Enter your message"}
          label={<Text as={"span"}>Message</Text>}
          id={"message"}
          name={"message"}
          required
        />

        <Button type={"submit"} className={styles.button}>
          Send
        </Button>
      </form>
    </Modal>
  );
};
