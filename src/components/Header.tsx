import React from 'react'

const Header: React.FC = () => {
  return (
    <>
    <header className="flex justify-between items-center bg-orange-400 p-5">
      <h1 className="text-lg">スパイス図鑑</h1>
      <ul className="flex items-center">
        <li className="mr-6">
          <a className="text-white hover:text-blue-800" href="#">スパイスって何</a>
        </li>
        <li className="mr-6">
          <a className="text-white hover:text-blue-800" href="#">スパイスの歴史</a>
        </li>
        <li className="mr-6">
        <div className="relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search" />
          </div>
        </li>
      </ul>
    </header>
    </>
  )
}

export default Header