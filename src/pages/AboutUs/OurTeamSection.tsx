const OurTeamSection = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
        Meet Our Team
      </h1>
      <p className="text-slate-600 text-lg md:text-xl font-medium text-center">
        Our team united by passion, driven by excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
          <img
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid"
            alt="team member image"
            className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
          />
          <div className="text-center text-white py-6 absolute bottom-2">
            <h3 className="text-xl font-bold">Adrian</h3>
            <p className="font-semibold">Team Leader</p>
          </div>
        </div>
        <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/344/084/non_2x/businessman-isolated-illustration-ai-generative-free-png.png"
            alt="team member image"
            className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
          />
          <div className="text-center text-white py-6 absolute bottom-2">
            <h3 className="text-xl font-bold">Anto</h3>
            <p className="font-semibold">Chief Executive Officer</p>
          </div>
        </div>
        <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
          <img
            src="https://www.pngall.com/wp-content/uploads/15/Man-In-Suit-PNG-Pic.png"
            alt="team member image"
            className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
          />
          <div className="text-center text-white py-6 absolute bottom-2">
            <h3 className="text-xl font-bold">Andrew</h3>
            <p className="font-semibold">Designer</p>
          </div>
        </div>
        <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
          <img
            src="https://i.pinimg.com/736x/dd/ca/f4/ddcaf4fb59a7be7af7c6cf34abf18c1c.jpg"
            alt="team member image"
            className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
          />
          <div className="text-center text-white py-6 absolute bottom-2">
            <h3 className="text-xl font-bold">Lucass Finn</h3>
            <p className="font-semibold">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
