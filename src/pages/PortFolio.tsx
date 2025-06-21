import Card from "../components/Card";
import { myProjects } from "../data/projects";

const PortFolio = () => {
  return (
    <div className="pt-20">
      {/* Heading */}
      <div className="flex items-center justify-center py-10">
        <div className="page__heading">
          <h1 className=" page__heading--title font-extrabold text-white">
            MY PORTFOLIO
          </h1>
          <h2 className="page__heading--subtitle text-[#322f2a] font-extrabold">
            MY <span className="text-[var(--color-brand)]">PORTFOLIO</span>
          </h2>
        </div>
      </div>
      {/* Cards */}
      <div className="container mx-auto px-3 my-10 mb-20">
        <div className="flex-wrap flex justify-center gap-10">
          {myProjects.map((item, index) => {
            return (
              <Card
                sourceLink={item.sourceLink}
                liveLink={item.liveLink}
                key={index}
                title={item.title}
                img={item.img}
                des={item.des}
                preview={item.preview}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
