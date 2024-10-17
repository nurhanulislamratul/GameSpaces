const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between py-16">
      <div className="md:col-span-2">
        <h1 className="text-slate-900 text-2xl md:text-3xl font-extrabold mb-4">
          Your Vision
        </h1>
        <p className="text-slate-600 font-medium">
          We envision a thriving sports ecosystem with innovative technologies
          that enhance skills and cultivate a love for athletic pursuits. Our
          platform inspires individuals to unleash their full potential in their
          chosen sports.
        </p>
        <p className="text-slate-600 font-medium">
          We revolutionize the world of sports, empowering coaches and athletes
          to excel. Our platform offers comprehensive tools and support for
          growth within the sports community. Join us and reach new heights of
          excellence!
        </p>
      </div>
      <div className="bg-primary text-white p-6 rounded-md">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
          Our Mission
        </h1>
        <p className="font-medium">
          We provide athletes with a seamless platform for connectivity,
          personalized insights, and educational resources. Together, we foster
          a collaborative community that supports growth and success in all
          sports.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
