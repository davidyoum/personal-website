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

          <div className="text-center text-gray-400 text-xl mt-4 font-instrument">
            Hi my name is David. Here is a more personal look into me and nothing really professional is here. 
            I would be more than happy to talk about any of the topics I wrote about so, shoot me a message!
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Image 
              className="rounded-md mt-8" 
              src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnG0osNNIaih2aqWcPIlp79XQvLH6MfVC5TYwA8" 
              alt="About" 
              width={300} 
              height={300} 
              style={{ 
                width: 'auto',
                height: 'auto'
              }}
            />

            <div className="flex flex-col px-8 gap-4">
              <div className="mt-8 text-xl font-bold font-instrument">
                How I started.
              </div>

              <div className="mt-3 font-instrument">
                My coding journey started when I was in elementary school working on my first Roblox game. Sadly, at the time I didn't know documentation and other resources were available so stopped afterward. In Sparta High School, I took computer science classes and my interest grew with the help of an amazing teacher.
                From there, I went on to learn Python and Java in class while self-teaching myself C++. Then, the rest was history with college studying at Penn State University.
              </div>

              <div className="mt-8 font-instrument">
                From there, I went on to learn Python and Java in class while self-teaching myself C++. 
                Then, the rest was history with college studying at Penn State University.
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <Image 
              className="rounded-md mt-8" 
              src="https://7cmg2xsea6.ufs.sh/f/54MIQGiYJHnGFwunWuuA4xj6YWCdQwuFLT32svS7G0fBiUo1" 
              alt="Snowboarding" 
              width={700}
              height={900}
              style={{ 
                width: '500px',
                height: 'auto'
              }}
            />

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
        <Footer />

      </div>

    );
  }