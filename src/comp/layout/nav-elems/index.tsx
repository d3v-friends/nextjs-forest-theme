import {ReactNode} from "react";
import {concat} from "nextjs-tools";
import {cls} from "@src/fn";
import Link from "next/link";
import MobileMenu from "./menu-mobile";

function Container({children}: Readonly<{children?: ReactNode}>) {
	return (
		<div className={concat("w-full h-full transition-all duration-600")}>
			<div className={concat("grid grid-cols-3 ml-auto mr-auto h-full", cls.width.max)}>{children}</div>
		</div>
	);
}

function Logo({
	children,
	href = "/",
	className = "grow",
}: Readonly<{children?: ReactNode; href?: string; className?: string}>) {
	return (
		<div className={concat("flex items-center justify-center", className)}>
			<Link
				href={href}
				className="raleway font-bold text-2xl">
				{children}
			</Link>
		</div>
	);
}

function Left({children, className = ""}: Readonly<{children?: ReactNode; className?: string}>) {
	return <div className={concat("flex items-center", className)}>{children}</div>;
}

function Right({children}: Readonly<{children?: ReactNode}>) {
	return <div className="flex items-center justify-end">{children}</div>;
}

function LinkButton({
	children,
	href,
	className = "",
}: Readonly<{children?: ReactNode; href: string; className?: string}>) {
	return (
		<Link
			href={href}
			className={concat("hover:text-(--primary) hover:brightness-70 text-[0.9rem]", className)}>
			{children}
		</Link>
	);
}

export default {Container, Logo, Left, Right, LinkButton, MobileMenu};
