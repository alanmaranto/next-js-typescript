import { FC, CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
  children?: React.ReactNode;
}

const ActiveLink: FC<Props> = ({ text, ...props }) => {
  const { asPath } = useRouter();

  return (
    <Link href={props.href}>
      <a style={asPath === props.href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
