import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import { Link, useForm, usePage,Head } from '@inertiajs/react';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditUser = ({ userData,auth }) => {

    const authenticatedUser = usePage().props.auth.user;
    const userdata = usePage().props.userData;

    const { data, setData, selectedValue, patch, errors, processing} = useForm({
        id: userdata.id,
        name: userdata.name,
        email: userdata.email,
        role: userdata.role,
        status: userdata.status
    });

   
    const [selectedStatus, setSelectedStatus] = useState(userdata.status);
    const handleStatusOnchange = (e) => {
        setSelectedStatus(e.target.value);
    };
    


    const [selectedRole, setSelectedRole]=useState(userdata.role);
    const handleRoleOnchange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleEditButtonClick = () => {
        const formData = {
            name: data.name,
            email: data.email,
            role: selectedRole,
            status: selectedStatus,
        };
    
        const userId = data.id;
    
        axios
            .put(`/edit-user/${userId}`, formData)
            .then((response) => {
                console.log('Update successful:', response.data);
    
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successful',
                    text: 'User updated successfully!',
                });
            })
            .catch((error) => {
                console.error('Update failed:', error.response ? error.response.data : error.message);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: error.response ? error.response.data : 'Failed to update user.',
                });
            });
    };
    

    return (
        <AuthenticatedLayout user={auth.user}>
             <Head title="Manage User" />
                <div className="py-6 sm:py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">  
                         <div className="p-4 sm:p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                                    Manage User
                                </h1>


                                <a href="/admin/user-list" className="inline-flex items-center px-3 py-2 my-1 bg-black text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <span className="text-base">Back</span>
                                </a>
                            </div>
                            
                            <div className="overflow-x-auto">
                                {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
                                <form className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="name" value="Name" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="email" value="Email" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="email"
                                                type="text"
                                                name="email"
                                                onChange={(e) => setData('email', e.target.value)}
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="role" value="Role" />
                                        <div className="mt-2">
                                            <select
                                                id="role"
                                                name="role"
                                                value={selectedRole}
                                                onChange={handleRoleOnchange}
                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                                >
                                                <option value="" disabled>Select a role</option>
                                                <option value="salesrep">Salesrep</option>
                                                <option value="promodiser">Promodiser</option>
                                                <option value="none">None</option>
                                            </select>   
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="status" value="Status" />
                                        <div className="mt-2">
                                            <select
                                                id="status"
                                                name="status"
                                                value={selectedStatus}
                                                onChange={handleStatusOnchange}
                                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                                >
                                                <option value="" disabled>Select Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>   
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={handleEditButtonClick}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none focus:bg-green-700"
                                        >
                                            Save Changes
                                        </button>
                                    </div>

                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditUser;