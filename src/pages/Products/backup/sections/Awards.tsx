
const Awards = () => {
  const awardList = [
    {
      id: "01",
      name: "Site Of The Day",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a4d79ee987e421eb6f_Award-Logo-1.svg",
    },
    {
      id: "02",
      name: "Digital Excellence",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a5faea2e596666c01d_Award-Logo-2.svg",
    },
    {
      id: "03",
      name: "Creative Agency",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a491a4ccc771a374f2_Award-Logo-3.svg",
    },
    {
      id: "04",
      name: "Innovative Design",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a4ba2a084159b55c22_Award-Logo-4.svg",
    },
    {
      id: "05",
      name: "Top Branding",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a47e51e2d0471e6f72_Award-Logo-5.svg",
    },
    {
      id: "06",
      name: "Web Innovation",
      info: "Product Design",
      logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f70a46eb2ff136b8bb324_Award-Logo-6.svg",
    },
  ];

  return (
    <section className="section awards">
      <div className="container">
        <div className="awards-vh-wrap">
          <div className="awards-grid-wrap">
            {awardList.map((award) => (
              <div className={`award-item-wrap _${award.id}`} key={award.id}>
                <div className="single-award-wrap">
                  <div className="award-contents-wrap">
                    <div className="award-infos-wrap">
                      <h3 className="award-name">{award.name}</h3>
                      <div className="award-info">{award.info}</div>
                    </div>
                    <div className="award-logo-wrap">
                      <img
                        src={award.logo}
                        loading="lazy"
                        alt="Award Logo"
                        className="award-logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-border-top"></div>
      <div className="section-border-bottom"></div>
    </section>
  );
};

export default Awards;
