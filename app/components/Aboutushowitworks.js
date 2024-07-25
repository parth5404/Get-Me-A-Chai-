import Image from 'next/image';

export default function SimpleSections() {
  return (
    <div className=" text-white">
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-12">
        <div className="flex-1">
          <div className="relative">
            <Image 
              src="/aboutus.jpg"
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            We are dedicated to helping creative individuals bring their projects to life through community funding. Our platform connects visionaries with supporters who believe in their dreams.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-12 ">
        <div className="flex-1">
          <div className="relative">
            <Image 
              src="/howitworks.jpg"
              alt="How It Works"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our simple and user-friendly process makes it easy for you to launch a campaign, share your story, and attract backers. Here's how it works:
          </p>
          <ul className="space-y-2 mb-6 text-left">
            {['Create', 'Share', 'Fund', 'Deliver'].map((step, index) => (
              <li key={step} className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}