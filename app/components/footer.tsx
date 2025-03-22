export default function Footer() {
    const currentYear = new Date().getFullYear(); // {{ edit_1 }}

    return (
        <div>
            <div className="h-52 bg-gradient-to-b from-transparent to-[#131313] via-[#000000]">
                <div className="flex items-center justify-center h-full">
                    <div className=" mt-20 text-center">
                        <div className="font-inter">
                            © {currentYear} David Youm
                        </div>
                        <div className="font-inter text-sm text-gray-600">
                            Made with love and a little bit of procrastination.
                        </div>

                        <div className="flex justify-center mt-2">
                            <div className="flex items-center bg-[#313131] w-fit h-fit p-1 pl-2 pr-2 rounded-xl justify-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="bg-clip-text text-sm text-gray-400">v1.1.0a</span>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}