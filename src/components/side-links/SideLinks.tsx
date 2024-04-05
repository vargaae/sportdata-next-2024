"use client";

import { useState, CSSProperties } from "react";
import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import CircleLoader from "react-spinners/CircleLoader";

type linkProps = {
  href: string;
  name: string;
  src: string;
};

const override: CSSProperties = {
  // display: "block",
  // margin: "0 auto",
  // borderColor: "red",
};

const SideLinks = ({ href, name, src }: linkProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");

  return (
    <Link
      href={href}
      onClick={() => startTransition(() => router.push(href))}
      className="flex items-center py-2 px-2 rounded-md text-textSecondary hover:bg-[rgb(54,63,78)]"
    >
      <Image unoptimized src={src} alt={name} width={20} height={20} />
      <p className="ml-4 text-xs md:text-sm">{name}</p>{"  "}
      {isPending && <CircleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
    </Link>
  );
};

export default SideLinks;
