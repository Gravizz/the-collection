import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row p-10 items-center justify-center">
      {/* Left Profile Card */}
      <div className="bg-gray-50 p-8 rounded-md shadow-md w-full md:w-1/3 text-center mb-10 md:mb-0">
        <Image
          className="mx-auto mb-6 rounded-full"
          src=""
          alt="Profile Image"
          width={150}
          height={150}
          layout="intrinsic"
          priority
        />
        <h2 className="text-xl font-semibold mb-2">Maya Nelson</h2>
        <p className="text-md text-gray-500 mb-6">Project Manager</p>
        {/* <div className="flex justify-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
        </div> */}
      </div>

      {/* Right Content Section */}
      <div className="flex-1 text-center max-w-2xl pl-0 md:pl-16">
        <h1 className="text-4xl font-bold mb-6">Hello</h1>
        <p className="text-lg mb-6">Here's who I am & what I do</p>
        <div className="flex gap-4 justify-center mb-6">
          <a href="/resume">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Resume
            </button>
          </a>
          <a href="/project">
            <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100">
              Projects
            </button>
          </a>
        </div>
        <p className="text-md text-gray-500">
          I'm a keen software developer who loves learning and always delivers
          quality results with genuine enthusiasm. I'm excited about
          contributing to innovative projects.
        </p>
      </div>
    </div>
  );
}
