import React from "react";

const DaftarAbsensi = () => {
   return <div className="bg-white rounded-lg p-4 text-xl">Daftar Absensi
   <hr class="mt-5 mb-5"/>
   

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="px-6 py-4">
                    Jhon
                </td>
                <td class="px-6 py-4">
                    PKL
                </td>
                <td class="px-6 py-4">
                    07:53
                </td>
                <td class="px-6 py-4">
                    Monday, 10 July 2024
                </td>
            </tr>
        </tbody>
    </table>
</div>

   </div>;
};

export default DaftarAbsensi;