import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nestIcon from "@iconify/icons-logos/nestjs";

import postgresIcon from "@iconify/icons-logos/postgresql";
import resumeBasicInfo from "../../../public/res_primaryLanguage.json";
import portFolioData from "../../../public/portfolio_shared_data.json";

export const About = () => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{resumeBasicInfo.basic_info.section_name.about}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={portFolioData.basic_info.image}
                  alt="Avatar placeholder"
                />

                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nestIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={postgresIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">
                    {resumeBasicInfo.basic_info.description_header} :){" "}
                  </span>
                  <br />
                  <br />
                  {resumeBasicInfo.basic_info.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
