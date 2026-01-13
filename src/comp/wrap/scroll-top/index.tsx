"use client";
import {ReactNode, useEffect, useRef, useState} from "react";

interface Props {
	children?: Children;
}

type Children = (props: {scrollTop: number}) => ReactNode;

export default function ({children}: Readonly<Props>) {
	const [scrollTop, setScrollTop] = useState(0);
	const refSetScrollTop = useRef(setScrollTop);

	useEffect(() => {
		const listener = () => {
			refSetScrollTop.current(window.scrollY);
		};
		listener();
		window.addEventListener("scroll", listener);
		return () => window.removeEventListener("scroll", listener);
	}, []);

	if (!children) return null;

	return children({scrollTop});
}
