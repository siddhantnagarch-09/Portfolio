import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
   <footer>
  <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
    

    {/* Contact Info */}
    <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
      <p>
        📧 Email:{" "}
        <a
          href="mailto:siddhantnagarch2244@gmail.com"
          className="text-blue-400 hover:underline"
        >
         siddhantnagarch2244@gmail.com
        </a>
      </p>
      <p>📞 Phone: <span className="text-gray-200">+91-7440347276</span></p>
      <p className="flex item-center gap-2">
         <FaSquareGithub /> GitHub:{" "}
        <a
          href="https://github.com/siddhantnagarch-09/e-Commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          <strong>Github</strong>
        </a>
      </p>
    </div>

    <p>@ 2025 Siddhant. All rights reserved.</p>
  </div>
</footer>

  );
}

export default Footer;
