import React from "react";
import Breadcrumbs from "../components/commons/Breadcrumbs";
import ScrollUp from "../components/commons/ScrollUp";

const GetInvolvedPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumbs
        pageName="Get Involved"
        description="Passionate about making a difference? Seeking a deeper connection with your faith and community? At Altar of Grace, there are countless ways to get involved, contribute, and grow. Your unique skills, talents, and enthusiasm can find a home here."
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <div className="bg-primary/[3%] dark:bg-dark p-8 space-y-8">
                <h1 className=" md:text-[45px]">
                  Get Involved at Altar of Grace Ministry
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Discover a plethora of opportunities to grow, serve, and
                  connect with our community. From volunteering to joining
                  ministry teams, there's something for everyone!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Volunteer Opportunities */}
                  <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Volunteer Opportunities
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Offer your time and skills to support our services,
                      events, and community outreach programs.
                    </p>
                    <button className="bg-blue-500 text-blue dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>

                  {/* Ministry Teams */}
                  <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Ministry Teams
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Join specialized teams, from worship to youth, and work
                      together in serving our community's spiritual needs.
                    </p>
                    <button className="bg-blue-500 ttext-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>

                  {/* Community Groups */}
                  <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Community Groups
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Engage in deeper connections, study, and prayer with small
                      groups that resonate with your interests and life stage.
                    </p>
                    <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>

                  {/* Youth Leadership */}
                  <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Youth Leadership
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Empower the next generation by guiding our youth programs
                      and events.
                    </p>
                    <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>

                  {/* Training & Workshops */}
                  <div className="bgbg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Training & Workshops
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Hone your skills and spiritual understanding with our
                      periodic training sessions and workshops.
                    </p>
                    <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>

                  {/* Donation & Support */}
                  <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Donation & Support
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Support our ministry financially or through resources,
                      ensuring we can continue making a difference.
                    </p>
                    <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Not sure where to start? Reach out to us, and we'll guide
                    you to an opportunity that suits your passion and skillset.
                  </p>
                  <button className="bg-gray-700 text-blue-500 dark:text-white py-2 px-6 rounded hover:bg-gray-800 mt-4">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolvedPage;
