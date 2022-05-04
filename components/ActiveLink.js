import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, ...props }) => {
  const { asPath } = useRouter();

  return (
    <Link href={props.href}>
      <a style={asPath === props.href ? style : null}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
