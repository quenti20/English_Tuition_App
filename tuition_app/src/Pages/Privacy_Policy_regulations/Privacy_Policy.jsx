import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Privacy_Policy = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[#09152E] text-white'>
      <Navbar />
      <div className='pt-[82px] flex-grow p-6'>
        <h1 className='text-4xl font-semibold text-center mb-8'>Privacy Policy & Terms and Conditions</h1>

        {/* Privacy Policy Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Privacy Policy</h2>
          <p className='text-lg mb-4'>
            This privacy policy applies to the <span className="font-bold">The Linguist</span> app (hereby referred to as "<span className="font-bold">Application</span>") for mobile devices that was created by <span className="font-bold">The Linguist</span> (hereby referred to as "<span className="font-bold">Service Provider</span>") as a Free service. This service is intended for use "<span className="font-bold">AS IS</span>".
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Information Collection and Use</h3>
          <p className='mb-4'>
            The Application collects information when you download and use it. This information may include:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>Your device's Internet Protocol address (e.g., IP address).</li>
            <li>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages.</li>
            <li>The time spent on the Application.</li>
            <li>The operating system you use on your mobile device.</li>
          </ul>
          <p className='mb-4'>
            The Application does not gather precise information about the location of your mobile device. For a better experience, while using the Application, the Service Provider may require you to provide certain <span className="font-bold">personally identifiable information</span>, which will be retained as described in this privacy policy.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Third Party Access</h3>
          <p className='mb-4'>
            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Application utilizes third-party services such as <span className="font-bold">Google Play Services</span>. Please refer to their privacy policies.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Opt-Out Rights</h3>
          <p className='mb-4'>
            You can stop all collection of information by the Application easily by uninstalling it. Use the standard uninstall processes as may be available for your device.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Data Retention Policy</h3>
          <p className='mb-4'>
            The Service Provider will retain user-provided data as long as you use the Application. To delete your data, contact the Service Provider at <a href="mailto:thelinguist.kolkata@gmail.com" className="text-blue-400 hover:underline">thelinguist.kolkata@gmail.com</a>.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Security</h3>
          <p className='mb-4'>
            The Service Provider ensures the confidentiality of your information with physical, electronic, and procedural safeguards.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Children</h3>
          <p className='mb-4'>
            The Service Provider does not knowingly solicit data from or market to children under 13 years of age. If you believe your child has provided personal data, contact <a href="mailto:thelinguist.kolkata@gmail.com" className="text-blue-400 hover:underline">thelinguist.kolkata@gmail.com</a>.
          </p>
        </section>

        {/* Terms and Conditions Section */}
        <section>
          <h2 className='text-3xl font-semibold mb-4'>Terms & Conditions</h2>
          <p className='text-lg mb-4'>
            These terms and conditions apply to the <span className="font-bold">The Linguist</span> app (hereby referred to as "<span className="font-bold">Application</span>") for mobile devices that was created by <span className="font-bold">The Linguist</span> (hereby referred to as "<span className="font-bold">Service Provider</span>").
          </p>

          <h3 className='text-2xl font-semibold mb-3'>General Terms</h3>
          <p className='mb-4'>
            By downloading or utilizing the Application, you agree to the following terms:
          </p>
          <ul className='list-disc pl-8 mb-4'>
            <li>Unauthorized copying or modification of the Application is prohibited.</li>
            <li>The Service Provider reserves the right to modify the Application or charge for its services at any time.</li>
            <li>Some functions of the Application require an active internet connection.</li>
          </ul>
          <p className='mb-4'>
            For any third-party services, such as <span className="font-bold">Google Play Services</span>, refer to their terms and conditions.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Liabilities</h3>
          <p className='mb-4'>
            The Service Provider strives to ensure the Application is updated and accurate but accepts no liability for any loss due to reliance on its functionality.
          </p>

          <h3 className='text-2xl font-semibold mb-3'>Changes</h3>
          <p className='mb-4'>
            These Terms and Conditions may be updated periodically. Continued use of the Application is deemed as acceptance of changes.
          </p>
        </section>

        <p className="mt-8">
          For inquiries, contact us at <a href="mailto:thelinguist.kolkata@gmail.com" className="text-blue-400 hover:underline">thelinguist.kolkata@gmail.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy_Policy;
