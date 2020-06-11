const Index: React.FC = () => {
  return (
    
    <div className="w-full max-w-sm flex flex-col items-center justify-center">
      <h1 className="p-10 text-lg font-bold md:text-2xl">
        tailwindのセットアップ
      </h1>
      <div className="flex items-stretch bg-gray-200 h-24 w-full">
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
      </div>
      <button className="bg-blue-500 mt-20 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <div className="md:flex">
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
  )
}

export default Index;