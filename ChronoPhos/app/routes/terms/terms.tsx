import { Link } from "react-router-dom";

const Terms = () => {
  return (
   
      <div className="flex items-center justify-center  z-50">
    <div className="bg-black text-white p-6 rounded-lg w-11/12 md:w-2/3 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Terms and Conditions</h2>
        <div id="terms-content" className="mb-4 text-m md:text-xl ">
            <p>At chronophos.com, we value your privacy and are committed to being transparent about how we handle your data. We use Google Analytics to collect data that helps us understand how our website is used. This information allows us to improve our services and provide a better user experience.</p>
            <p>• Usage Data: We collect information about how you interact with our website, including the pages you visit, the time spent on each page, and the links you click.</p>
            <p>• Device Information: We may gather data about your device, such as the browser type, operating system, and device identifiers.</p>
            <p>• Geographical Data: We may collect general location information based on your IP address to help us understand our audience better.</p>
            <p>How We Use This Data: The data collected through Google Analytics is used solely for analytical purposes. We do not share this information with third parties for marketing purposes. It helps us to:</p>
            <p>• Optimize our website for better performance.</p>
            <p>• Identify popular content and improve user engagement.</p>
            <p>• Analyze trends and usage patterns to enhance user experience.</p>
            <p>Your Consent: By accepting our cookies policy, you consent to the collection of this data. If you choose to reject cookies, we will not collect any data through Google Analytics.</p>
            <p>For more information about how Google Analytics collects and processes data, please refer to the Google Privacy Policy.</p>
        </div>
     <Link className="bg-gray-400 text-white px-2 py-2 text-xl tracking-wide rounded hover:bg-yellow-500 font-chrono" to="/">Back to home</Link>
    </div>
     
</div>
     
    
  );
};

export default Terms;
