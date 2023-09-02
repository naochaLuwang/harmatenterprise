import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="grid w-full grid-cols-2 px-4 bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3659133833644!2d93.92823767574434!3d24.782920877980036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749273de4298ee1%3A0xe2b8f0e65a80bc44!2sHarmat%20Enterprise%20Private%20Limited!5e0!3m2!1sen!2sin!4v1691847347053!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-full h-full px-10 py-10">
          <h1 className="text-3xl font-medium tracking-wider text-neutral-700">
            Get In Touch
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Fill up the form and our team will get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-2 mt-5">
            <div className="flex flex-col space-y-2">
              <p className="text-base font-semibold text-neutral-600">
                First Name
              </p>
              <input
                type="text"
                className="border-none rounded-md focus:border-none focus:ring-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-auto h-28 max-w-7xl">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-200 rounded-md"></div>
          <div className="flex flex-col">
            <h1 className="text-sm font-light">Phone</h1>
            <p>8132043928</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-200 rounded-md"></div>
          <div className="flex flex-col">
            <h1 className="text-sm font-light">Email</h1>
            <p>contact@hermatenterprise.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-200 rounded-md"></div>
          <div className="flex flex-col">
            <h1 className="text-sm font-light">Address</h1>
            <p>Pishumthong, Nongthombam Leirak , Manipur 795001</p>
          </div>
        </div>
        {/* <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-blue-200 rounded-md"></div>
          <div className="flex flex-col">
            <h1 className="text-sm font-light">Phone</h1>
            <p>8132043928</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;
