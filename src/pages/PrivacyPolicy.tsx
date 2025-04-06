
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-2 text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/80">
            <section className="mb-6">
              <p className="mb-3">
                <strong>Effective Date:</strong> 10/29/24<br />
                <strong>Last Updated:</strong> 3/28/25
              </p>
              <p>
                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our website and tells you about your privacy rights and how the law protects you.
              </p>
              <p className="mt-3">
                We use your Personal Data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Interpretation and Definitions</h2>
              <h3 className="text-lg font-semibold mb-2 text-white">Interpretation</h3>
              <p className="mb-3">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              
              <h3 className="text-lg font-semibold mb-2 text-white">Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.</li>
                <li><strong>Business</strong>, for the purpose of the CCPA, refers to Tycho Pharma Inc as the legal entity that collects consumers' personal information and determines the purposes and means of processing consumers' personal information.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Tycho Pharma Inc, [Insert Address].</li>
                <li><strong>Data Controller</strong>, for the purposes of the GDPR, refers to the Company as the legal person which determines the purposes and means of processing Personal Data.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website, https://tychopharma.com.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Collecting and Using Your Personal Data</h2>
              <h3 className="text-lg font-semibold mb-2 text-white">Types of Data Collected</h3>
              
              <h4 className="font-semibold mb-2 text-white">Personal Data</h4>
              <p className="mb-3">
                While using Our Service, we may ask you to provide us with certain personally identifiable information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Email address</li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-white">Usage Data</h4>
              <p className="mb-3">
                We may collect information automatically when you use the Service in the future. Usage Data may include:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time and date of visit</li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-white">Tracking Technologies and Cookies</h4>
              <p className="mb-3">
                In the future, we may use cookies and similar tracking technologies to track activity on Our Service and store certain information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Use of Your Personal Data</h2>
              <p className="mb-3">
                We may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To contact you for marketing or follow-up purposes</li>
                <li>To manage your requests and improve customer support</li>
                <li>To analyze usage for business intelligence</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Sharing Your Personal Data</h2>
              <p className="mb-3">
                We do not sell personal data. We may share information with:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Service providers such as Google Analytics</li>
                <li>Legal authorities when required</li>
                <li>Business partners during M&A activity</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Retention of Your Personal Data</h2>
              <p className="mb-3">
                We retain your Personal Data only as long as necessary for the purposes outlined in this Privacy Policy or as required by law.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Transfer of Your Personal Data</h2>
              <p className="mb-3">
                Your information may be transferred to — and maintained on — computers located outside of your jurisdiction. We will take all steps reasonably necessary to ensure your data is treated securely.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have rights under GDPR, CCPA, and PIPEDA, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Right to access or update your data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to data portability</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to opt-out of data sharing (California)</li>
              </ul>
              <p className="mb-3">
                To exercise your rights, contact us at [Insert Contact Email].
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Security of Your Personal Data</h2>
              <p className="mb-3">
                While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Children's Privacy</h2>
              <p className="mb-3">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Links to Other Websites</h2>
              <p className="mb-3">
                Our Service may contain links to other websites that are not operated by us. We advise you to review the Privacy Policy of every site you visit.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Changes to this Privacy Policy</h2>
              <p className="mb-3">
                We may update Our Privacy Policy from time to time. Changes will be posted with an updated "Last Updated" date. Continued use of our Service after any updates constitutes your acceptance of the new terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, you can contact us:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>By visiting this page on our website: <a href="https://tychopharma.com" className="text-blue-400 hover:underline">https://tychopharma.com</a></li>
              </ul>
            </section>
          </div>
          
          <div className="mt-12 text-sm text-white/50 text-center">
            Last updated: March 28, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
