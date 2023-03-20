/**
 * import next packages
 */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * import packages
 */
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * import project files
 */
import imageLogo from '@public/singtel-logo.png';

const HomeNavbar = ({ t }: any) => {
	const router = useRouter();
	const { locale } = router;

	const navigation: [] = [];

	const toggleLanguage = () => {
		const newLocale = locale === 'en' ? 'cn' : 'en';
		router.push('/', '/', { locale: newLocale });
	}

	return (
		<div className="absolute w-full top-0 px-6 py-2 lg:px-8 z-10">
			<nav className="flex items-center justify-between w-full" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Singtel</span>
						<Image
							src={imageLogo}
							alt="tryell logo"
							width={180}
							height={100}
							priority
						/>
					</Link>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation && navigation.map((item: { name: string, href: string }) => (
						<a key={item?.name} href={item?.href} className="text-sm font-semibold leading-6 text-gray-900">
							{item.name}
						</a>
					))}
				</div>
				<div className="flex lg:flex-1 lg:justify-end items-end space-x-3">
					<a className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer" target="_blank" href="https://documenter.getpostman.com/view/5578104/2s935hRnak">
						<InformationCircleIcon className="h-6 w-6 text-gray-500 animate-bounce" />
					</a>
					<button
						type="button"
						className="inline-flex items-center rounded-md border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm ring-0"
						onClick={toggleLanguage}
					>
						{t('HomeNavbar.switchLanguage')}
					</button>
				</div>
			</nav>
		</div>
	)
}

export default HomeNavbar;





