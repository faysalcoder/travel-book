import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t-2 ">
      <div className=" mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 container">
        {/* Brand and Social Icons */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Travelo</h2>
          <div className="flex space-x-4">
            <div className="bg-rose-500 hover:bg-rose-600 p-2 rounded-full cursor-pointer">
              <EnvelopeIcon className="h-5 w-5 text-white" />
            </div>
            <div className="bg-rose-500 hover:bg-rose-600 p-2 rounded-full cursor-pointer">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
            </div>
            <div className="bg-rose-500 hover:bg-rose-600 p-2 rounded-full cursor-pointer">
              <UserGroupIcon className="h-5 w-5 text-white" />
            </div>
            <div className="bg-rose-500 hover:bg-rose-600 p-2 rounded-full cursor-pointer">
              <GlobeAltIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About us</li>
            <li>Destination</li>
            <li>News & article</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Payments</li>
            <li>Virtual Account</li>
            <li>Referral Bonus</li>
            <li>Go-Pay</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Careers</li>
            <li>Privacy & Policy</li>
            <li>FAQ</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-500 mb-4">Kluyuran@gmail.com</p>
          <p className="text-sm font-medium mb-2">Get the App</p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full text-sm">
            Download app
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-sm flex justify-between px-20 py-4">
        <p>Privacy and policy</p>
        <p>All rights reserved @ Travelo</p>
      </div>
    </footer>
  );
}
