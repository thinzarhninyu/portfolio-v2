import Divider from "./general/divider";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center gap-10 text-center w-full relative overflow-hidden bg-[#f6f4f0] px-4 border-t-2"
    >
      <div className="flex flex-col items-center justify-center max-w-2xl w-full gap-y-6">
        <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight">
          Get in Touch
        </p>

        <Divider />

        <p className="text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
          If you have any questions or would like to get in touch, <span className="bg-[#9affcc] rounded-lg px-2 py-0.5 leading-none">feel free to reach out!</span>
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full max-w-2xl mx-auto px-4 justify-center items-center text-[#080808] font-lexend-deca font-light tracking-tight">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5465FF] transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5465FF] transition"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none focus:border-[#5465FF] transition"
        ></textarea>
        
        <button
          type="submit"
          className="w-fit mt-2 px-5 py-3 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition transform hover:-translate-y-0.5 text-lg font-lexend-deca uppercase tracking-tight"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
