
import Breadcrumbs from '../components/commons/Breadcrumbs';
import ScrollUp from '../components/commons/ScrollUp';

const DonatePage = () => {
  return (
    <>
    <ScrollUp />
      <Breadcrumbs
        pageName="Donate Now"
        description=" Your generous donations enable us to continue our mission and support our ministries. We appreciate your contribution to help us make a positive impact in the lives of many."
      />
      <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
         <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Ways to Donate</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Online Donation: You can securely donate online using our donation portal.</li>
            <li>In-Person: Visit our church to make a donation in person.</li>
            <li>Bank Transfer: You can transfer funds directly to our bank account.</li>
          </ul>
          <p className="text-gray-700">
            Your contribution, no matter the amount, goes a long way in supporting our ministry efforts. Thank you for your generosity!
          </p>
          <div className="mt-6">
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
              // Add an onClick handler to trigger the donation process
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DonatePage;
