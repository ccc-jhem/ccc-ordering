import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-pink-600">
            <div className="w-full sm:max-w-md my-10 mx-20 px-6 py-4 sm:px-10 sm:py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">

                <div className="flex justify-center mb-4">
                    <Link href="/">
                        <ApplicationLogo className="w-24 h-24 fill-current text-gray-500" />
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}
