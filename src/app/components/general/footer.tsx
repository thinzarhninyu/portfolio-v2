import { Copyright, Github, Linkedin, Mail, Send } from "lucide-react";
import { name } from "@/app/lib/const";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] text-[#f6f4f0] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9affcc] transition-colors"
          >
            <Github className="w-4 md:w-6 h-4 md:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9affcc] transition-colors"
          >
            <Linkedin className="w-4 md:w-6 h-4 md:h-6" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#9affcc] transition-colors"
          >
            <Mail className="w-4 md:w-6 h-4 md:h-6" />
          </a>
          <a
            href="/telegram"
            className="hover:text-[#9affcc] transition-colors"
          >
            <Send className="w-4 md:w-6 h-4 md:h-6"  />
          </a>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-sm md:text-base font-lexend-deca font-light tracking-tight flex flex-row items-center justify-center gap-1">
            <Copyright className="w-4 h-4" /> 2025  {name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
