import clsx from "clsx";
import styles from "components/main/MainSection/index.module.scss";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import React, { ComponentProps, FC, ReactNode } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

type Sections = typeof APP_SECTIONS;

interface Props extends ComponentProps<"section"> {
  section: Sections[keyof Sections];
  headingProps?: ComponentProps<typeof Heading>;
  heading?: ReactNode;
}

export const MainSection: FC<Props> = ({
  className,
  section,
  heading,
  children,
  headingProps = {},
  ...props
}) => {
  const { className: headingClassName, ...restHeadingProps } = headingProps;
  const classes = clsx(className);
  const headingClasses = clsx(headingClassName, styles.heading);
  return (
    <section id={section.id} className={classes} {...props}>
      <Container>
        <Heading
          hr
          preset={"h2"}
          as={"h2"}
          className={headingClasses}
          {...restHeadingProps}
        >
          {heading}
        </Heading>

        {children}
      </Container>
    </section>
  );
};
