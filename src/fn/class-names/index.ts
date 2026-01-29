export default {
	zIndex: {
		nav: "z-(--z-nav)",
		modal: "z-(--z-modal)",
		toast: "z-(--z-toast)",
	},
	width: {
		max: "max-w-[1440px]",
	},
	height: {
		input: "h-8",
	},
	background: {
		panel: "bg-(--panel)",
		primary: "bg-(--primary)",
		danger: "bg-(--danger)",
		success: "bg-(--success)",
		warning: "bg-(--warning)",
		info: "bg-(--info)",
		input: "bg-(--input)",
		suspend: "bg-(--suspend)",
		alert: "bg-(--suspend) backdrop-blur-xs",
	},
	filter: {
		primary: "filter-(--primary-filter)",
		danger: "filter-(--danger-filter)",
		success: "filter-(--success-filter)",
		warning: "filter-(--warning-filter)",
		info: "filter-(--info-filter)",
	},
	hover: {
		background: {
			primary: "hover:bg-(--primary)",
		},
	},
	transition: {
		default: "transition-all duration-600",
		short: "transition-all duration-300",
		shortAll: "[&>*]:transition-all duration-300",
		instant: "transition-all duration-150",
	},
	animation: {
		fadeIn: "animated fade-in",
	},
	border: {
		bottom: "border-b border-(--border)",
	},
	font: {
		raleway: "raleway",
		astasans: "astasans",
	},
	text: {
		deepPrimary: "text-(--primary) brightness-70",
		title: "text-[#41644A]",
		primary: "text-(--primary)",
		danger: "text-(--danger)",
		success: "text-(--success)",
		warning: "text-(--warning)",
		info: "text-(--info)",
	},
	shadow: {
		normal: "shadow-2xl shadow-[rgba(0,0,0,0.04)]",
	},
};
