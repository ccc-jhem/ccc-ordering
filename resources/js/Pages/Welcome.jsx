import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome"/>
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-100 selection:bg-red-500 selection:text-white">
                {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div> */}
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <div className="ccc-title">
                            <ApplicationLogo className="block h-50 w-50 fill-current text-gray-800" />
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                        <Link
                            href={route('login')}
                            className="px-6 py-3 bg-pink-800 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:shadow-outline-pink active:bg-pink-800"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
