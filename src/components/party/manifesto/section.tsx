import { Popover } from "antd";
import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import { Section, SubSection, Topic } from "../../../dtos/manifesto-dto";

interface ManifestoSectionProps {
  title: string,
  section: Section | SubSection | null
}

// const onClickTwitterShare = (e) => {
//   const hashtags = '\n\n #politicaparatodos www.politicaparatodos.pt';
//   e.preventDefault();
// const text = `${window.getSelection().toString()} ${hashtags}`;
// window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "Twitter", "height=285,width=550,resizable=1");
// e.stopPropagation();
// }

const ManifestoSection = ({ title, section }: ManifestoSectionProps) => {

  const renderSectionItem = (topic: Topic) =>
    <Fragment key={topic.position}>
      {ReactHtmlParser(topic.html)}
    </Fragment>

  const renderSectionContent = (section: Section | SubSection) => {
    console.log("SELECTED SECTION: ", section);
    if (section) {
      if (section.topics) {
        return section.topics?.map(topic => renderSectionItem(topic));
      }
      if (section.subSections) {
        section.subSections?.forEach(subSection =>
          subSection.topics.map(topic => renderSectionItem(topic)));
      }
    }
    return null;
  }

  const sectionContentRef = () => React.createRef();

  return (
    <section className="party-manifesto-body">
      <h1 className="party-manifesto-body__title">{title}</h1>
      {section !== null && (
        <div>
          <h2>{section.title}</h2>
          < div
            ref={sectionContentRef}
            className="party-manifesto-body__content">
            {renderSectionContent(section)}
          </div>
          <Popover
            ref={sectionContentRef}
            className="party-manifesto__share-popover">
            {/* <div
               className="party-manifesto__share-popover-inner"
               onClick={(e) => onClickTwitterShare(e)}
             >
               <img src={twitter_icon} />
             </div> */}
          </Popover>
        </div>
      )}
    </section >
  );
};

export default ManifestoSection;
