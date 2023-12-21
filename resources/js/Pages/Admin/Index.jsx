import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { FaUsers,FaCube,FaStore,FaFileAlt } from 'react-icons/fa';

export default function index({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-6 sm:py-12">
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    
                        <div className="p-4 sm:p-6 text-gray-900 ">
                        <h1 className='text-3xl py-2'>Admin Dashboard</h1>
                          
                        <div className="relative overflow-x-auto flex justify-between my-2">
                            {/* Navigation link to user list page */}
                            <div className="flex-grow bg-teal-500 text-white rounded-xl overflow-hidden shadow-md mx-3">
                                <div className="p-4 flex flex-col items-center">
                                    <FaUsers className="text-4xl" />
                                    <h2 className="text-2xl font-semibold mb-4">Users</h2>
                                </div>
                                <div className="p-1 bg-teal-700 flex items-center justify-center">
                                    <Link href="/admin/user-list" className="flex items-center text-center text-green-200 hover:underline py-2 px-4 rounded-md">
                                        Go to User List
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-grow bg-cyan-500 text-white rounded-xl overflow-hidden shadow-md mx-3">
                                <div className="p-4 flex flex-col items-center">
                                    <FaCube className="text-4xl" />
                                    <h2 className="text-2xl font-semibold mb-4">Items</h2>
                                </div>
                                <div className="p-1 bg-cyan-700 flex items-center justify-center">
                                    <Link href="/admin/item-list" className="flex items-center text-center text-blue-200 hover:underline py-2 px-4 rounded-md">
                                        Go to Items List
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-x-auto flex justify-between my-2">

                            <div className="flex-grow bg-rose-500 text-white rounded-xl overflow-hidden shadow-md mx-3">
                                <div className="p-4 flex flex-col items-center">
                                    <FaStore className="text-4xl" />
                                    <h2 className="text-2xl font-semibold mb-4">Stores</h2>
                                </div>
                                <div className="p-1 bg-rose-700 flex items-center justify-center">
                                    <Link href="/" className="flex items-center text-center text-red-200 hover:underline py-2 px-4 rounded-md">
                                        Go to Stores
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-grow bg-amber-500 text-white rounded-xl overflow-hidden shadow-md mx-3">
                                <div className="p-4 flex flex-col items-center">
                                    <FaFileAlt className="text-4xl" />
                                    <h2 className="text-2xl font-semibold mb-4">Reports</h2>
                                </div>
                                <div className="p-1 bg-amber-700 flex items-center justify-center">
                                    <Link href="/" className="flex items-center text-center text-orange-200 hover:underline py-2 px-4 rounded-md">
                                        Go to Reports
                                    </Link>
                                </div>
                            </div>

                            
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
