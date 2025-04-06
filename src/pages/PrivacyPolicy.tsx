
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
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Overview</h2>
              <p>
                This Privacy Policy describes how we collect, use, and share your personal information 
                when you visit or interact with our website and services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Information We Collect</h2>
              <p>We collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal information you provide when joining our waitlist, such as your email address;</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">How We Use Your Information</h2>
              <p>We use the information we collect about you for various purposes, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To provide you with information about our upcoming services;</li>
                <li>To inform you when our product launches;</li>
                <li>To improve our website and services;</li>
                <li>To communicate with you about updates or changes to our services.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">How We Share Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties 
                except as described in this policy. We may disclose information when required by law or to 
                protect our rights or the safety of others.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Data Security</h2>
              <p>
                We implement reasonable security measures to maintain the safety of your personal information. 
                However, no internet transmission is 100% secure, and we cannot guarantee the absolute security 
                of your data.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page, 
                and the effective date will be updated accordingly.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@tychopharma.com.
              </p>
            </section>
          </div>
          
          <div className="mt-12 text-sm text-white/50 text-center">
            Last updated: April 06, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
