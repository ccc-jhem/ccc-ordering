import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

export default function Users({ auth, users }) 
{

    const [roleFilter, setRoleFilter] = useState(''); 
    const [statusFilter, setStatusFilter] = useState(''); 

    const filteredUsers = users.data.filter((user) => {
        const roleMatch = roleFilter === '' || user.role.toLowerCase() === roleFilter.toLowerCase();
        const statusMatch = statusFilter === '' || user.status.toLowerCase() === statusFilter.toLowerCase();
        return roleMatch && statusMatch;
    });

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Users List" />
            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 sm:p-6 text-gray-900">
                        <div className="flex justify-between items-center py-5">
                                <h1 className="font-semibold text-3xl text-gray-800 leading-tight">
                                    Users
                                </h1>
                                <a href="/" className="inline-flex items-center px-3 py-2 my-1 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <span className="text-base"> Back</span>
                                </a>
                            </div>

                            <div className="flex items-center mb-4 space-x-6">
                                {/* Role filter */}
                                <div className="flex flex-col items-center space-y-2">
                                    <label className="text-gray-600">Filter by Role:</label>
                                    <select
                                        value={roleFilter}
                                        onChange={(e) => setRoleFilter(e.target.value)}
                                        className="px-7 border rounded"
                                    >
                                        <option value="">All Roles</option>
                                        <option value="salesrep">Sales Rep</option>
                                        <option value="promodiser">Promodiser</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>

                                {/* Status filter */}
                                <div className="flex flex-col items-center space-y-2">
                                    <label className="text-gray-600">Filter by Status:</label>
                                    <select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        className="px-7 border rounded"
                                    >
                                        <option value="">All Status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>

                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 sm:px-6 py-3 bg-teal-700 border-b text-white text-center">Name</th>
                                            <th className="px-3 sm:px-6 py-3 bg-teal-700 border-b text-white text-center">Role</th>
                                            <th className="px-3 sm:px-6 py-3 bg-teal-700 border-b text-white text-center">Email</th>
                                            <th className="px-3 sm:px-6 py-3 bg-teal-700 border-b text-white text-center">Status</th>
                                            <th className="px-3 sm:px-6 py-3 bg-teal-700 border-b text-white text-center">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredUsers.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{user.name}</td>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{user.role}</td>
                                                <td className="px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center">{user.email}</td>
                                                <td
                                                    className={`px-3 sm:px-6 py-2 sm:py-3 whitespace-no-wrap border-b text-center ${
                                                        user.status === 'active' ? 'text-green-600' : 'text-red-600'
                                                    }`}
                                                >
                                                    {user.status}
                                                </td>
                                                <td className="px-2 sm:px-3 py-2 sm:py-3 whitespace-no-wrap border-b text-center">
                                                    <Link
                                                        href={`/edit-user/${user.id}`}
                                                        className="bg-teal-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 inline-flex items-center text-center hover:bg-teal-800 focus:outline-none focus:ring focus:border-blue-300"
                                                    >
                                                        <span className="text-base">Edit</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 flex justify-center">
                                {users.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`inline-block px-4 py-2 mr-2 bg-teal-800 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-teal-800 ${link.active ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {link.label === '&laquo; Previous' ? 'Prev' : link.label && link.label === 'Next &raquo;' ? 'Next' : link.label}
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
