import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from '@inertiajs/react';


export default function Users({ auth,users }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                        
                        <div className="p-4 sm:p-6 text-gray-900">
                
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                                Users
                            </h1>


                            <a href="/" className="inline-flex items-center px-3 py-2 my-1 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                                <span className="text-base"> Back</span>
                            </a>
                        </div>
                         
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Name</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Role</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Email</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Status</th>
                                            <th className="px-3 sm:px-6 py-3 bg-pink-700 border-b text-white text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
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
                                                    className="bg-pink-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 inline-flex items-center text-center hover:bg-pink-800 focus:outline-none focus:ring focus:border-blue-300"
                                                    >
                                                    <span className="text-base">Edit</span>
                                                </Link>
                                                {/* <button onClick={() => alert('Archive this user ' + user.id)} className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mx-1">
                                                    Archive
                                                </button> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
