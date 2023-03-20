/**
 * import react packages
 */
import React, { useEffect, useState } from 'react';

/**
 * import packages
 */
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import debounce from 'lodash.debounce';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

/**
 * import project files
 */
import { API_BREED_SEARCH_URL, DEBOUNCE_TIME } from '@/constants';
import { getHttpData } from '@/utils/http';
import FloatingBar from './FloatingBar';
import SearchResultTable from './SearchResultTable';

type FormData = {
  inputSearch: string;
};

const FeatureSection = ({ t }: any) => {

  const [input, setInputValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [apiError, setApiError] = useState<boolean>(false);
  const trimString = (u: unknown) => typeof u === "string" ? u.trim() : u;

  const submitSearchSchema = z.object({
    inputSearch: z.preprocess(trimString, z.string().min(1, { message: t('ErrorMessage.required') })),
  }).strict();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(submitSearchSchema)
  });

  useEffect(() => {
    const onSubmitSearch: SubmitHandler<FormData> = async (data) => {
      try {
        const result: any = await getHttpData(`${API_BREED_SEARCH_URL}${data.inputSearch}`);
        setInputValue(data.inputSearch);
        setSearchResult(result);
        setApiError(false);
      } catch (error) {
        console.error('Error:', error);
        setApiError(true);
        setSearchResult(null);
      }
    }
    const debounceApiCall = debounce(handleSubmit(onSubmitSearch), DEBOUNCE_TIME);
    const subscription = watch(() => debounceApiCall());
    return () => subscription.unsubscribe();
  }, [handleSubmit, reset, watch]);

  return (
    <>
      <div id="feature" className="bg-gray-900 py-24 sm:py-32 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400 animate-bounce">{t('FeatureSection.topLiner')}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{t('FeatureSection.title')}</p>
            <p className="mt-61 text-base text-gray-300 mt-2">
              {t('FeatureSection.description')}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8">
          <div className="flex items-center sm:justify-center mx-auto max-w-7xl px-6 lg:px-8">
            <form className="space-y-6" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  {t('FeatureSection.searchLabel')}
                </label>
                <div className="mt-1 flex flex-wrap flex-row items-center relative">
                  <input
                    type="text"
                    className="block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm w-50 min-[350px]:w-52"
                    placeholder={t('FeatureSection.searchPlaceholder')}
                    {...register('inputSearch')}
                  />
                  {isSubmitting && (
                    <div className="pointer-events-none animate-spin absolute inset-y-0 right-0 flex items-center mr-2">
                      <ArrowPathIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {errors.inputSearch && (
                  <span className="text-red-500 text-sm mt-2 block">{errors.inputSearch?.message}</span>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8 flex flex-col">
          {searchResult && Object.keys(searchResult).length > 0 && (
            <SearchResultTable t={t} result={searchResult} input={input} title={t('FeatureSection.tableTitle')} description={t('FeatureSection.tableDescription')} />
          )}

          {searchResult && Object.keys(searchResult).length === 0 && (
            <span className="sm:px-6 lg:px-8 text-center text-lg block bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 mb-8 font-medium">{t('FeatureSection.noResult')}</span>
          )}
        </div>
        {apiError && (
          <FloatingBar color="bg-red-500" title={t('HomeSection.apiFailed')} />
        )}
      </div>
    </>
  )
}

export default FeatureSection;