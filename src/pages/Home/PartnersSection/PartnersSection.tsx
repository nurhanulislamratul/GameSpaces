import Container from "@/components/shared/Container";

const PartnersSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div>
          {/* section header */}
          <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Our Trusted Partners
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium text-center">
            Together, we create exceptional sports opportunities ahead.
          </p>
          {/* logos container */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 pt-12">
            <div>
              <img
                src="https://www.logo.wine/a/logo/Lotto_Sport_Italia/Lotto_Sport_Italia-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Asics/Asics-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Yonex/Yonex-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Wilson_Sporting_Goods/Wilson_Sporting_Goods-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Slazenger/Slazenger-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Nike-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Fila_(company)/Fila_(company)-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div>
              <img
                src="https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg"
                alt="logo image"
                className="grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PartnersSection;
