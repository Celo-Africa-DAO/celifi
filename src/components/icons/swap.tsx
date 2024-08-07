import React, { SVGProps } from 'react';

interface CustomSVGProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

export function SwapIcon({ className, ...props }: CustomSVGProps) {
	return (
		<svg
			{...props}
			className={className}
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.301758 9.62865C0.301758 4.31862 4.78749 -0.000976562 10.3018 -0.000976562C15.816 -0.000976562 20.3018 4.31862 20.3018 9.62865C20.3018 14.9387 15.816 19.2583 10.3018 19.2583C4.78749 19.2583 0.301758 14.9387 0.301758 9.62865ZM3.50527 9.62865C3.50527 13.2373 6.5543 16.1734 10.3018 16.1734C14.0492 16.1734 17.0982 13.2373 17.0982 9.62865C17.0982 6.01999 14.0492 3.08389 10.3018 3.08389C6.5543 3.08389 3.50527 6.01999 3.50527 9.62865ZM7.22584 9.62872C7.22584 7.99547 8.60563 6.66678 10.3017 6.66678C11.9978 6.66678 13.3776 7.99547 13.3776 9.62872C13.3776 11.262 11.9978 12.5907 10.3017 12.5907C8.60563 12.5907 7.22584 11.262 7.22584 9.62872Z"
				fill="currentColor"
			/>
		</svg>
	);
}
