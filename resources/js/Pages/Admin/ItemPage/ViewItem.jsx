import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Link,useForm,usePage,Head} from '@inertiajs/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';


const ViewItem = ({auth}) => {
    const authenticatedUser = usePage().props.auth.user;
    const itemData = usePage().props.itemData;

    const { data, setData} = useForm({
        internal_id: itemData.internal_id,
        name: itemData.name,
        description: itemData.description,
        type: itemData.type,
        category: itemData.category,
        sub_category : itemData.sub_category,
        profit_center : itemData.profit_center,
        brand: itemData.brand
    });

    
    return(
        <AuthenticatedLayout user = {auth.user} >
             <Head title="View Item"/>

             <div className="py-6 sm:py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">  
                         <div className="p-4 sm:p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                                    Item - {data.internal_id} / {data.description}
                                </h1>
                                <a href="/admin/item-list" className="inline-flex items-center px-3 py-2 my-1 bg-black text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <span className="text-base"> Back</span>
                                </a>
                            </div>
                                
                            <div className="overflow-x-auto">
                                {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
                                <form className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="internalId" value="Netsuite Internal ID" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="internalId"
                                                type="text"
                                                name="internalId"
                                                value={data.internal_id}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="internalId"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="name" value="Name" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="name"
                                                type="text"
                                                name="internalId"
                                                value={data.name}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="name"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <InputLabel htmlFor="description" value="Description" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="description"
                                                type="text"
                                                name="description"
                                                value={data.description}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="description"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="category" value="Category" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="category"
                                                type="text"
                                                name="category"
                                                value={data.category}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="category"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="subCategory" value="Sub Category" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="subCategory"
                                                type="text"
                                                name="subCategory"
                                                value={data.sub_category}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="subCategory"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="type" value="Type" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="type"
                                                type="text"
                                                name="description"
                                                value={data.type}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="type"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <InputLabel htmlFor="profitCenter" value="Profit Center" />
                                        <div className="mt-2">
                                            <TextInput
                                                id="profitCenter"
                                                type="text"
                                                name="profitCenter"
                                                value={data.profit_center}
                                                className="mt-1 block w-full bg-gray-200"
                                                autoComplete="profitCenter"
                                                readOnly
                                            />
                                        </div>
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

export default ViewItem;
