import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center p-5 bg-orange-500">
        <h1 className="text-xl">
          <a className="text-white font-bold" href="#">
            スパイス図鑑
          </a>
        </h1>
        <ul className="flex items-center">
          <li className="mr-6">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
