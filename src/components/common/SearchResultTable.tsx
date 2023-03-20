/**
 * import react packages
 */
import React, { useMemo, useState } from 'react';

/**
 * import packages
 */
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import DataTable, { TableColumn, ExpanderComponentProps } from 'react-data-table-component';

/**
 * import project files
 */
import { API_BREED_IMAGES_URL } from '@/constants';
import { tableStyles } from '@/styles/table';
import { formatObject, sortAlgorithm } from '@/utils/helpers';
import LoadingImage from '@components/common/LoadingImage';

type SimpleTableProps = {
	t: Function;
	result: any;
	input: string;
	title: string;
	description: string;
}

export default function SearchResultTable({ t, result, input, title, description }: SimpleTableProps) {

	type DataRow = {
		id: number;
		name: any;
		height: string;
		life_span: string;
		reference_image_id: string;
		bred_for: string;
		breed_group: string;
		country_code: string;
		weight: string;
		temperament: string;
	};

	const columns: TableColumn<DataRow>[] = [
		{
			name: t('FeatureSection.name'),
			selector: row => row.name,
			sortable: true,
		},
		{
			name: t('FeatureSection.height'),
			selector: row => row.height,
			sortable: true,
		},
		{
			name: t('FeatureSection.life_span'),
			selector: row => row.life_span,
			sortable: true,
		},
		{
			name: t('FeatureSection.image'),
			selector: row => row.reference_image_id,
			sortable: false,
		}
	];

	const tableData = useMemo(() => {
		let data: DataRow[] = [];
		result.forEach((element: any) => {
			const name = element.name.replace(new RegExp(input, 'gi'), (match: any) => `<span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-sm">${match}</span>`);

			data.push({
				id: element.id,
				name: (<div dangerouslySetInnerHTML={{ __html: name }}></div>),
				height: formatObject(element.height),
				life_span: element.life_span,
				reference_image_id: element.reference_image_id ? (<LoadingImage url={`${API_BREED_IMAGES_URL}${element.reference_image_id}.jpg`} fallbackUrl={`${API_BREED_IMAGES_URL}${element.reference_image_id}.png`} />) : t('FeatureSection.noImageAvailable'),
				bred_for: element.bred_for,
				breed_group: element.breed_group,
				country_code: element.country_code,
				weight: formatObject(element.weight),
				temperament: element.temperament,
			});
		});
		return data;
	}, [t, result, input]);

	const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
		const keysToRemove = ['id', 'name', 'height', 'life_span', 'reference_image_id'];
		const expandedData = Object.entries(data).filter(key => !keysToRemove.includes(key[0]));

		return (
			<div className="p-10 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
				<h2 className="text-lg font-medium text-white">{t('FeatureSection.extraInformation')}</h2>
				<ul role="list" className="mt-3 grid grid-cols-1 space-y-5 max-w-xl">
					{expandedData.map(([key, value], index) => {
						return (
							<li key={index} className="col-span-1 flex rounded-md shadow-sm">
								<div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
									<div className="flex-1 truncate px-4 py-2 text-sm">
										<a className="font-medium text-gray-900 hover:text-gray-600">
											{t('FeatureSection.' + key)}
										</a>
										<p className="text-gray-500">{value ?? '-'}</p>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		);
	};

	const customSort = (rows: any, field: any, direction: any) => {
		const col = field.toString().split(".")[1];
		switch (col) {
			case 'name':
				return rows.sort((a: any, b: any) => {
					if (direction === 'desc') {
						return a[col] > b[col] ? 1 : -1;
					}
					return a[col] > b[col] ? -1 : 1;
				});
			case 'height':
				return rows.sort((a: any, b: any) => {
					const start = a[col].replace('–', '-').split(', metric:')[1];
					const end = b[col].replace('–', '-').split(', metric:')[1];
					return sortAlgorithm(start, end, direction);
				});
			case 'life_span':
				return rows.sort((a: any, b: any) => {
					const start = a.life_span.replace('–', '-');
					const end = b.life_span.replace('–', '-');
					return sortAlgorithm(start, end, direction);
				});
			default:
				return rows;
		}
	}

	return (
		<div className="px-0 sm:px-6 py-5 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-white">{title}</h1>
					<p className="mt-2 text-sm text-gray-300 italic">
						{description}
					</p>
				</div>
			</div>
			<div className="px-4 sm:px-0 mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-t-lg">
							<DataTable
								columns={columns}
								data={tableData}
								expandOnRowClicked
								expandableRows
								expandableRowsComponent={ExpandedComponent}
								expandableIcon={{ expanded: <MinusCircleIcon className="w-5 h-5" />, collapsed: <PlusCircleIcon className="w-5 h-5 animate-bounce" /> }}
								pagination
								paginationComponentOptions={{
									rowsPerPageText: t('SimpleTable.rowsPerPageText'),
								}}
								striped
								customStyles={tableStyles}
								sortFunction={customSort}
								defaultSortFieldId={1}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
