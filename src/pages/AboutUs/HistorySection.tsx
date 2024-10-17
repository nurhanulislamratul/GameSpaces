const HistorySection = () => {
  return (
    <div className="px-8 py-16 lg:py-24 bg-primary rounded-xl my-10">
      <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-4 text-center">
        History & Milestones
      </h1>
      <p className="text-white text-lg lg:text-xl font-medium text-center">
        The world's largest and leading booking platform in 6 years
      </p>
      {/* achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-white mt-10 md:mt-20">
        <div className="space-y-6 text-center md:px-4 py-8 md:py-0 md:border-r-2 border-b-2 md:border-b-0">
          <span className="text-sm font-semibold border rounded-full px-3 py-1">
            2018
          </span>
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-extrabold">
            15,000+
          </h1>
          <p>
            Global organizations actively experiencing the GameSpaces difference
          </p>
        </div>
        <div className="space-y-6 text-center md:px-4 py-8 md:py-0 md:border-r-2 border-b-2 md:border-b-0">
          <span className="text-sm font-semibold border rounded-full px-3 py-1">
            2021
          </span>
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-extrabold">
            51,000+
          </h1>
          <p>Users have booked space with GameSpaces</p>
        </div>
        <div className="space-y-6 text-center md:px-4 py-8 md:py-0">
          <span className="text-sm font-semibold border rounded-full px-3 py-1">
            2024
          </span>
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-extrabold">
            91,815+
          </h1>
          <p>Total bookings made on GameSpaces</p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
