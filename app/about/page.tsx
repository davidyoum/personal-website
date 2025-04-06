import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import Image from "next/image";


export default function About() {
    return (
      <div className="mx-auto">
        <NavigationBar />
        <div className="flex flex-col max-w-[900px] mx-auto items-center mt-12">
          <div className="text-5xl font-instrument text-center">
            About Me
          </div>

          <div className="text-center text-gray-400 text-xl p-3 mt-4 font-instrument">
            Hi my name is David. Here is a more personal look into me and nothing really professional is here. 
            I would be more than happy to talk about any of the topics I wrote about so, shoot me a message!
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

              <div className="text-center text-gray-400 text-sm font-instrument">
                Me in Gangnam, Seoul, South Korea.
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4">
              <div className=" text-xl font-bold font-instrument">
                How I started.
              </div>

              <div className="mt-3 font-instrument">
                My coding journey started when I was in elementary school working on my first Roblox game.
                Around middle school time, I started to get more interested in YouTube and started my photoshop creative journey.
                In Sparta High School, I took computer science classes and my interest grew with the help of an amazing teacher, Ms. Incantalupo.
                From there, I went on to learn Python and Java in class while self-teaching myself C++ during COVID times.
                Then, the rest was history with college studying at Penn State University.
              </div>

              <div className="mt-4 font-instrument">
                Now, I have a problem of criticing every website and UI/UX I visit if I see one.
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

              <div className="text-center text-gray-400 text-sm font-instrument">
                Snowboarding in Mountain Creek, New Jersey.
              </div>
            </div>

            <div className="flex flex-col mt-10 flex-1 justify-start">
              <div className="text-xl font-bold font-instrument">
                My hobbies and interests.
              </div>


              <div className="flex ml-3 flex-row gap-4">
                <div className="mt-3 font-instrument">
                    My hobbies include:
                    <ul className="list-disc mt-2 space-y-1">
                    <li>Snowboarding</li>
                    <li>Sports (Soccer, Basketball, Track)</li>
                    <li>Car Detailing</li>
                    <li>Video Games (FIFA, Valorant)</li>
                    <li>Cooking</li>
                    <li className="text-gray-900">Eating food!</li>
                  </ul>
                </div>

                <div className="mt-3 font-instrument">
                  My interests include:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Sports (mainly soccer)</li>
                    <li>Fashion</li>
                    <li>Cars</li>
                    <li>Computers</li>
                    <li>AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-center text-xl mt-24 text-md">
            Get in touch <a className="text-blue-500 hover:text-blue-300" href="mailto:davidyoum@yahoo.com">here</a>
        </div>
        <Footer />

      </div>

    );
  }