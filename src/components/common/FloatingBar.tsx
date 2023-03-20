/**
 * import packages
 */
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type FloatingBarProps = {
	close?: boolean;
	color?: string;
	title: string;
	isButtonAvailable?: boolean;
	buttonUrl?: string;
	buttonTitle?: string;
}

const FloatingBar = ({ color = "bg-indigo-600", title, isButtonAvailable = false, buttonUrl, buttonTitle, close }: FloatingBarProps) => {
	return (
		<div className="fixed inset-x-0 top-0 pt-5 sm:pb-5">
			<div className="mx-auto max-w-xl px-2 sm:px-6 lg:px-8">
				<div className={clsx("rounded-lg p-2 shadow-lg sm:p-3 animate-bounce", color ? color : "bg-indigo-600")}>
					<div className="flex flex-wrap items-center justify-between">
						<div className="flex w-0 flex-1 items-center justify-center">
							<span className={clsx("flex", color ? color : "bg-indigo-600")}>
								<ExclamationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</span>
							<p className="ml-3 truncate font-medium text-white">
								<span className="md:inline">{title}</span>
							</p>
						</div>
						{isButtonAvailable && (
							<div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto cursor-pointer">
								<a
									href={buttonUrl}
									className="flex items-center justify-center rounded-md border-transparent bg-gradient-to-r from-gray-900 to-gray-600 px-4 py-2 text-sm font-medium text-white"
								>
									{buttonTitle}
								</a>
							</div>
						)}
						{close && (
							<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
								<button
									type="button"
									className="-mr-1 flex rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
								>
									<span className="sr-only">Dismiss</span>
									<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FloatingBar;