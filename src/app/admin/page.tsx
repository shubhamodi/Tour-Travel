"use client"; // Ensure this is a client component

import { useRouter } from 'next/navigation'; // Use the correct import
import React, { useEffect } from 'react';

const Admin = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/admin/dashboard");
    }, [router]); // Use correct dependency array

    return null;
};

export default Admin;