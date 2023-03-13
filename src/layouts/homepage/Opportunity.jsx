import useIntersectionObserver from "../../components/useIntersectionObserver";
import { useState } from "react";
import Slide from "../../components/opportunity/Slide";

import grid from "../../assets/opportunities/grid.svg";
import leftarrow from "../../assets/opportunities/tail-down.svg";
import rightarrow from "../../assets/opportunities/tail-up.svg";
function Opportunity(){
    const [isVisible, targetRef] = useIntersectionObserver();
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const tabsData = [
        {
            title: "Technology",
            card:[
                {
                    cover: "../img/opportunities/logo-be-creative-inspiration-design-concept.png",
                    title: "Architecture, Design & UI UX",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_hand-touching-infographic-cloud-computing-and-technology_8428701_108.png",
                    title: "Cloud, DevOps & Engineering",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_businessman-user-typing-login-and-password_2596066.png",
                    title: "Cybersecurity & Technology",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_front-view-of-businessman-planning-and-analysis-on-financial-work-accountant-man-check-data-on-graph-document-paper-on-working-table_2437416.png",
                    title: "Data & Analytics",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_online-digital-marketing-strategy-and-business-analysis-plan-business-concept-top-view_2411341.png",
                    title: "Digital Marketing",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_crm-customer-relationship-management-automation-system_5926821_343.png",
                    title: "ERP & CRM",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/vecteezy_young-professional-programmer-working-at-developing-programming-and-website-working-in-a-software-develop-company-office_1309698.png",
                    title: "Software Development",
                    offers: "700 Jobs",
                }
            ]
        },
        {
            title: "Business",
            card:[
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Business",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Business",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Business",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Business",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Business",
                    offers: "700 Jobs",
                }
            ]
        },{
            title: "Change",
            card:[
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Change",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Change",
                    offers: "700 Jobs",
                },
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Change",
                    offers: "700 Jobs",
                }
            ]
        },{
            title: "Senior appointments",
            card:[
                {
                    cover: "../img/opportunities/web-design-banner.jpg",
                    title: "Placeholder Senior appointment",
                    offers: "700 Jobs",
                }
            ]
        },
    ];

    const handleTabChange = (index) => {
        setActiveTab(index);
        setCurrentSlide(0);
    };
    function handleLeftArrowClick() {
        setCurrentSlide((currentSlide - 1 + activeTabData.card.length) % activeTabData.card.length);
        setActiveTab((activeTab - 1 + tabsData.length) % tabsData.length);
    }

    function handleRightArrowClick() {
        setCurrentSlide((currentSlide + 1) % activeTabData.card.length);
        setActiveTab((activeTab + 1) % tabsData.length);
    }
    const activeTabData = tabsData[activeTab];
    console.log(activeTabData);
    return(
        <div className="opportunity" >
            <div className="opportunity__textblock" ref={targetRef}>
                <span className={`${isVisible ? 'visible' : ''}`}>Our Opportunities</span>
                <h3 className={`${isVisible ? 'visible' : ''}`}>Explore Offers</h3>
                <p className={`${isVisible ? 'visible' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporq incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <nav className="opportunity__navigate">
                <ul className="opportunity__navigate__list">
                {tabsData.map((tab, index) => (
                    <li key={index} className={`opportunity__navigate__list__button ${ index === activeTab ? "active" : "" }`} onClick={() => handleTabChange(index)}>
                        {tab.title}
                    </li>
                ))}
                </ul>
            </nav>
            <div className="opportunity__buttonbar">
                <img className="opportunity__buttonbar__button" src={leftarrow} alt="" onClick={handleLeftArrowClick}/>
                <img src={grid} alt=""/>
                <img className="opportunity__buttonbar__button" src={rightarrow} alt="" onClick={handleRightArrowClick}/>
            </div>
            <Slide data={activeTabData} />
        </div>
    )
}

export default Opportunity;