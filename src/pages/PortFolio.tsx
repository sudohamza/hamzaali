import Card from "../components/Card";
import { myProjects } from "../data/projects";

const PortFolio = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-center py-10">
        <div className="page__heading">
          <h1 className=" page__heading--title text-white">MY PORTFOLIO</h1>
          <h2 className="page__heading--subtitle text-white">
            MY<span className="text-orange-500">PORTFOLIO</span>
          </h2>
        </div>
      </div>
      {/* Cards */}
      <div className="container mx-auto">
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
