'use client'
import 'tailwindcss/tailwind.css'
import useSWR from 'swr'
import axios from 'axios'
import {useState, useEffect} from "react";

const Heading = () => {
    const [blog_data, setUsers] = useState(null);
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch('http://localhost:8001/blog/blog/2');
            const data = await response.json();
            setUsers(data);
        }

        fetchUsers();
    }, []);

    if (!blog_data) return <h2>Loading...</h2>;
    return (

                <h1
                className='mt-2 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white'>{blog_data.headline}</h1>


    );
};
export default function hello() {
    return (
        <>
            {/*<div className="flex items-center gap-4">*/}
            {/*    <img className="w-16 h-16 rounded-full"*/}
            {/*         src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"*/}
            {/*         alt=""/>*/}
            {/*    <div className="font-medium dark:text-white">*/}
            {/*        <div>Jese Leos</div>*/}
            {/*        <div className="text-sm text-gray-500 dark:text-gray-400">CEO,founder Bla blas</div>*/}
            {/*        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <Heading/>
                <p className="mb-3 text-gray-500 dark:text-gray-400  first-letter:text-4xl first-letter:font-bold first-letter:text-gray-600 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Track
                    work across the enterprise through an open, collaborative platform. Link issues across Jira and
                    ingest data from other software development tools, so your IT support and operations teams have
                    richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and
                    deploy changes with ease, with a complete audit trail for every change.</p>
                <blockquote
                    className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">&quot;Flowbite
                        is
                        just awesome. It contains tons of predesigned components and pages starting from login screen to
                        complex dashboard. Perfect choice for your next SaaS application.&quot;</p>
                </blockquote>
                <p className="mb-3 text-gray-500 dark:text-gray-400 ">Track
                    work across the enterprise through an open, collaborative platform. Link issues across Jira and
                    ingest data from other software development tools, so your IT support and operations teams have
                    richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and
                    deploy changes with ease, with a complete audit trail for every change.</p>
            </div>

        </>
    );
}