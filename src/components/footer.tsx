import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center bg-orange-500 p-5">
      <p>
        このサイトに関する情報は
        <a
          className="text-blue-700"
          href="https://github.com/ryokatsuse/microCMS_DEMO"
          target="_target"
        >
          Github
        </a>
        で確認できます。
      </p>
      <p>
        <small className="italic">2020 Spice picture book</small>
      </p>
    </footer>
  )
}

export default Footer
