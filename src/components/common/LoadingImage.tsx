/**
 * import react packages
 */
import React, { useState } from 'react';

/**
 * import next packages
 */
import Image from 'next/image';

/**
 * import packages
 */
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const LoadingImage: React.FC<{ url: string, fallbackUrl: string }> = ({ url, fallbackUrl }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [imgSrc, setImgSrc] = useState<string>(url);

    return (
        <div className="relative w-[80px] h-[80px]">
            {isLoading && (
                <div className="flex justify-center items-center w-[80px] h-[80px]">
                    <ArrowPathIcon className="animate-spin h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
            )}
            <Image
                className='rounded-full w-[80px] h-[80px] bg-cover bg-center absolute top-0'
                src={imgSrc}
                alt="loading"
                width={80}
                height={80}
                onLoad={() => setIsLoading(false)}
                onError={() => setImgSrc(fallbackUrl)}
            />
        </div>
    )
}

export default LoadingImage;