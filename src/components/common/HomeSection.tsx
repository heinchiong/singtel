/**
 * import react packages
 */
import React, { useState } from 'react';

/**
 * import next packages
 */
import Link from 'next/link';

/**
 * import project files
 */
import GradientBackground from '@components/common/GradientBackground';

const HomeSection = ({ t }: any) => {
	return (
		<div className="relative h-screen flex items-center px-6 lg:px-8">
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative flex items-center rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						{t('HomeSection.more')}
						<a href="#" className="flex ml-1 items-center font-semibold text-indigo-600">
							<span className="absolute inset-0" aria-hidden="true" />
							{t('HomeSection.stayTuned')} <span className="ml-1 text-xl" aria-hidden="true">🤩</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl p-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
						{t('HomeSection.title')}
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						{t('HomeSection.description')}
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="#feature"
							className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
						>
							{t('HomeSection.viewNow')}
						</Link>
						<a className="text-base font-medium leading-7 text-gray-600 cursor-pointer" target="_blank" href="https://documenter.getpostman.com/view/5578104/2s935hRnak">
							{t('HomeSection.learnMore')} <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
			<GradientBackground
				id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
				x1="1155.49"
				x2="-78.208"
				y1=".177"
				y2="474.645"
				wrapperClassName="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl bottom-0"
				svgClassName="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
			/>
		</div>
	)
}

export default HomeSection;