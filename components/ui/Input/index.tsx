import clsx from "clsx";
import React, { ComponentProps, ReactNode } from "react";

import styles from "./index.module.scss";

type NativeProps<Multiline extends boolean> = ComponentProps<
  ComponentTag<Multiline>
>;

type ComponentTag<Multiline extends boolean> = Multiline extends true
  ? "textarea"
  : "input";

type Props<Multiline extends boolean> = NativeProps<Multiline> & {
  label: ReactNode;
  labelClassName?: string;
  wrapperClassName?: string;
  multiline?: Multiline;
};

const Input = <Multiline extends boolean = false>({
  label,
  labelClassName,
  id,
  className,
  wrapperClassName,
  multiline,
  ...props
}: Props<Multiline>) => {
  const inputClasses = clsx(styles.input, className, {
    [styles.textarea]: multiline,
  });
  const labelClasses = clsx(styles.label, labelClassName);
  const wrapperClasses = clsx(styles.wrapper, wrapperClassName);

  const Component = (
    multiline ? "textarea" : "input"
  ) as ComponentTag<Multiline>;

  return (
    <div className={wrapperClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <Component id={id} className={inputClasses} {...(props as any)} />
    </div>
  );
};

export default Input;
