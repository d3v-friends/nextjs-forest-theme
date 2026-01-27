"use client";

export default function (): number {
	// 1. 외부 컨테이너 생성 (스크롤바를 숨김)
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll"; // 스크롤 강제 생성
	document.body.appendChild(outer);

	// 2. 내부 요소 생성
	const inner = document.createElement("div");
	outer.appendChild(inner);

	// 3. (전체 너비 - 내부 너비) 계산
	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

	if (!outer.parentNode) return 0;

	// 4. 뒷정리
	outer.parentNode.removeChild(outer);

	return scrollbarWidth;
}
