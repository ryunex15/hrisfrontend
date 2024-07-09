import React from "react";
import { Dropdown } from "flowbite-react";

const DaftarAbsensi = () => {
   return <div className="bg-white rounded-lg p-4 text-xl">Daftar Absensi
   <hr class="mt-5 mb-5"/>
    
   <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg">
   <form class="flex flex-wrap items-center space-x-4">
      
      <div>
        <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
        <select id="role" name="role" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Admin</option>
          <option>User</option>
          <option>Guest</option>
        </select>
      </div>
      
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
        <select id="name" name="name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>John Doe</option>
          <option>Jane Smith</option>
          <option>Michael Johnson</option>
        </select>
      </div>
      
      <div>
        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" id="date" name="date" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
      </div>
      
      <div class="self-end">
        <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </div>
    </form>
  </div>


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