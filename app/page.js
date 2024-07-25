import Image from "next/image";
import Navbar from "@/app/components/Navbar"; // Assuming you have a Navbar component
import Footer from "@/app/components/Footer"; // Assuming you have a Footer component
import SimpleSections from "@/app/components/Aboutushowitworks";
export default function Home() {
  return (
    <div className=" my-8 max-h-screen text-white flex flex-col">
      
      <main className="flex flex-grow flex-col gap-16 px-4">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-8 py-16  text-gray-300 ">
          <div className="text-4xl md:text-6xl font-mono font-extrabold text-slate-200 shadow-xl">
            Fund Your 
          </div>
          <div className="text-4xl md:text-6xl font-mono font-extrabold text-lime-500 shadow-xl">
            Creative Work!
          </div>
          <div className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl font-serif font-semibold">
            "Empowering Visionaries: Where Every Contribution Fuels a Dream. From Concept to Reality: Join Us in Building Tomorrow, Today."
          </div>
          <div className="flex gap-4 mt-8">
            <button 
              type="button" 
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Start Here!
            </button>
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Read More!
            </button>
          </div>
         
        </section>

  
        {/* <section className="flex flex-col md:flex-row items-center gap-8 py-16">
          <div className="flex-1">
            <Image 
              src="/aboutus.jpg" // Placeholder for About Us image
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-300">
              We are dedicated to helping creative individuals bring their projects to life through community funding. Our platform connects visionaries with supporters who believe in their dreams.
            </p>
          </div>
        </section> */}

        {/* How It Works Section */}
        {/* <section className="flex flex-col md:flex-row-reverse items-center gap-8 py-16">
          <div className="flex-1">
            <Image 
              src="/howitworks.jpg" // Placeholder for How It Works image
              alt="How It Works"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-300">
              Our simple and user-friendly process makes it easy for you to launch a campaign, share your story, and attract backers. Here's how it works: Create, Share, Fund, and Deliver.
            </p>
          </div>
        </section> */}


      </main>
    
    </div>
  );
}
