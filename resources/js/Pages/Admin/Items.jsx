// resources/js/Pages/Admin/Items.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

export default function Items({ auth,items }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Items" />
            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 sm:p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                                    Items
                                </h1>

                                <a href="/" className="inline-flex items-center px-3 py-2 my-1 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <span className="text-base"> Back</span>
                                </a>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">NS-ID</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Description</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Type</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Category</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.data.map(item => (
                                            <tr key={item.id}>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{item.name}</td>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{item.display_name}</td>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{item.type}</td>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{item.category}</td>
                                                <td className="px-2 sm:px-3 py-2 sm:py-3 whitespace-no-wrap border-b text-center">
                                                    <Link
                                                        href={`/edit-item/${item.id}`}
                                                        className="bg-pink-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 inline-flex items-center text-center hover:bg-pink-800 focus:outline-none focus:ring focus:border-blue-300"
                                                    >
                                                    <span className="text-base">Edit</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        {/* Pagination */}
                            <div className="mt-4 flex justify-center">
                                {items.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`inline-block px-4 py-2 mr-2 bg-pink-800 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ${link.active ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {link.label === '&laquo; Previous' ? 'Prev': link.label && link.label === 'Next &raquo;' ? 'Next' : link.label }
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
