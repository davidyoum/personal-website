import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <NavigationBar name="about" />
      <div className="w-full md:w-2/3 mx-auto p-5 font-tinos">
        <h1 className="text-6xl">About Me</h1>

        <div className="mt-10 space-y-5">
          <div className="text-center text-gray-700 text-xl">
          Hi, my name is David. Here’s a more personal look into me—nothing professional here. I’d be more than happy to chat about any of the topics I wrote about, so feel free to shoot me a message!
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
            <div className="flex flex-col gap-2 lg:w-[1200px]">
              <Image 
                className="rounded-md mt-8 w-full max-w-[300px] lg:max-w-[1200px]" 
                src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG0osNNIaih2aqWcPIlp79XQvLH6MfVC5TYwA8" 
                alt="About" 
                width={1200} 
                height={1200}
                style={{ 
                  height: 'auto'
                }}
              />
              <div className="text-center text-gray-500 text-sm">
                Me in Gangnam, Seoul, South Korea.
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4 font-tinos">
              <h2 className="text-xl font-bold">How I started.</h2>
              <p className="mt-3 max-w-[3000px]">
                My coding journey began back in elementary school when I worked on my first Roblox game. By middle school, I started exploring YouTube and discovered a passion for creativity through Photoshop. In high school, I took computer science classes, where my interest grew thanks to an amazing teacher. From there, I learned Python and Java in class while teaching myself C++ during COVID. The rest is history—now I’m studying Computer Science at Penn State University.
              </p>
              <div className="mt-4">
                These days, I can’t help but critique every website or app I use, especially when it comes to UI/UX.
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="flex flex-col gap-2">
              <Image 
                className="rounded-md mt-8 w-[300px] md:w-[400px] lg:w-[500px]" 
                src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGFwunWuuA4xj6YWCdQwuFLT32svS7G0fBiUo1" 
                alt="Snowboarding" 
                width={700}
                height={900}
                style={{ 
                  height: 'auto'
                }}
              />
              <div className="text-center text-gray-700 text-sm">
                Snowboarding in Mont Sainte-Anne, QC, Canada.
              </div>
            </div>

            <div className="flex flex-col mt-10 flex-1 justify-start">
              <h2 className="text-xl font-bold">My hobbies and interests.</h2>
              <div className="flex ml-3 flex-row gap-4">
                <div className="mt-3">
                  <ul className="list-disc mt-2 space-y-1">
                    <li>Snowboarding</li>
                    <li>Sports (Soccer, Basketball, Track)</li>
                    <li>Car Detailing</li>
                    <li>Video Games (FIFA, Valorant)</li>
                    
                    <li className="text-gray-100">Eating 40lbs of food!</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Fashion</li>
                    <li>Cars</li>
                    <li>Computers</li>
                    <li>AI/ML</li>
                    <li>Cooking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center text-xl mt-24 text-md">
          Get in touch <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}