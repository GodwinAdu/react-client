import React from 'react'
import Breadcrumbs from '../components/commons/Breadcrumbs'
import ScrollUp from '../components/commons/ScrollUp'

const MinistriesPage = () => {
  return (
    <>
      <ScrollUp />
       <Breadcrumbs
        pageName="Our Ministries"
        description="At Altar of Grace, our ministries are the heartbeat of our congregation, guiding us as we grow spiritually, serve our community, and spread the teachings of Christ. Each ministry serves a unique purpose, whether it's nurturing our youth, lifting voices in praise, or reaching out to those in need"
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <div className=" p-8 space-y-8">
              <div className="bg-primary/[3%] dark:bg-dark p-8 space-y-8">
                <h1 className="mb-4 mt-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl text-center">Ministries at Altar of Grace</h1>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-center">Explore the diverse array of ministries we offer, each dedicated to fulfilling a unique purpose within our church family and the larger community.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Children's Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Children's Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Nurturing faith and values in the young hearts with engaging stories, activities, and lessons.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>
                    
                    {/* Youth Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Youth Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Empowering the next generation with a dynamic blend of faith, fun, and service projects.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>

                    {/* Worship Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Worship Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Leading the congregation in praise through songs, instrumental music, and other forms of creative worship.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>
                    
                    {/* Women's Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Women's Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Empowering the women of our church through retreats, workshops, and community projects.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>

                    {/* Men's Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Men's Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Building strong men of faith through fellowship, mentorship, and service activities.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>

                    {/* Outreach Ministry */}
                    <div className="bg-primary/[3%] dark:bg-primary/10 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Outreach Ministry</h2>
                        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Reaching out to the wider community with acts of service, evangelism, and support for those in need.</p>
                        <button className="bg-blue-500 text-blue-500 dark:text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
                    </div>
                    
                </div>

                <div className="text-center">
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Interested in joining or learning more about a specific ministry? We'd love to connect with you and share our passion.</p>
                    <button className="bg-gray-700 text-blue-500 dark:text-white py-2 px-6 rounded hover:bg-gray-800 mt-4">Contact Us</button>
                </div>
            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MinistriesPage
