type GradientBackgroundProps = {
	id: string;
	x1: string;
	x2: string;
	y1: string;
	y2: string;
	wrapperClassName?: string;
	svgClassName?: string;
}

const GradientBackground = ({ id, x1, x2, y1, y2, wrapperClassName, svgClassName }: GradientBackgroundProps) => {
	return (
		<div className={wrapperClassName}>
			<svg
				className={svgClassName}
				viewBox="0 0 1155 678"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill={`url(#${id})`}
					fillOpacity=".3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
				<defs>
					<linearGradient
						id={id}
						x1={x1}
						x2={x2}
						y1={y1}
						y2={y2}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#9089FC" />
						<stop offset={1} stopColor="#FF80B5" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default GradientBackground;