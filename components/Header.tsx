import Image from "next/image"

export default function Header(){
    return     ( 
        <div className="w-full  border-b-2 border-blue-900  mb-8">
          
          <div className="flex py-1  flex-row gap-5 items-center justify-between max-w-[1100px] mx-auto px-5 ">
          <img
            src="/logos/tuvnordlogo.png"  
            alt="Logo"
            className="w-20 md:w-30"
            />
          

          <div className="text-center">
            <h2 className="text-blue-900 text-md md:text-xl font-bold tracking-wide leading-tight">
              NATIONAL INSPECTION & <br />
              TECHNICAL TESTING CO., LTD.
            </h2>
          </div>

                   <img
            src="/logos/fahsslogo.png"
            alt="Logo"
                        className="w-20 "

/>

  </div>
        </div>)
}