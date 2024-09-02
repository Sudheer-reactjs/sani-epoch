import React, { useRef, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  AvailableIcon,
  NotAvailableIcon,
} from "@/utlis/svg";

const accordionData = [
  {
    accordions: [
      {
        title: "Charts",
        content: [
          {
            label: "Charts per tab",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Custom time intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Tick-based intervals (BETA)",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Custom Range bars",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "20 customizable chart types",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Compare symbols",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Dividend-adjusted charts",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Interactive earnings, splits and dividends",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Bar Replay",
        content: [
          {
            label: "Historical data by day and higher timeframes",
            details: (
              <>
                <div className="mx-auto">All</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Historical data by the second",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Technical analysis and algorithms",
        content: [
          {
            label: "400+ pre-built most popular indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "100K+ community-powered indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Indicator on indicator",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Indicators per chart",
            details: (
              <>
                <div className="mx-auto">2</div>
              </>
            ),
          },
          {
            label: "Financials per chart",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Custom indicator templates",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
        ],
      },
      {
        title: "Watchlists",
        content: [
          {
            label: "Number of watchlists",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Symbols per watchlist",
            details: (
              <>
                <div className="mx-auto">30</div>
              </>
            ),
          },
          {
            label: "Flagged symbols colors",
            details: (
              <>
                <div className="mx-auto">1</div>
              </>
            ),
          },
          {
            label: "Import/Export",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    accordions: [
      {
        title: "Charts",
        content: [
          {
            label: "Charts per tab",
            details: (
              <>
                <div className="mx-auto">2</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">5</div>
              </>
            ),
          },
          {
            label: "Custom time intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Tick-based intervals (BETA)",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Custom Range bars",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "20 customizable chart types",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Compare symbols",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Dividend-adjusted charts",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Interactive earnings, splits and dividends",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Bar Replay",
        content: [
          {
            label: "Historical data by day and higher timeframes",
            details: (
              <>
                <div className="mx-auto">All</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">41 days</div>
              </>
            ),
          },
          {
            label: "Historical data by the second",
            details: (
              <>
                <div className="mx-auto">90 days</div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Technical analysis and algorithms",
        content: [
          {
            label: "400+ pre-built most popular indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "100K+ community-powered indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Indicator on indicator",
            details: (
              <>
                <div className="mx-auto">5</div>
              </>
            ),
          },
          {
            label: "Indicators per chart",
            details: (
              <>
                <div className="mx-auto">5</div>
              </>
            ),
          },
          {
            label: "Financials per chart",
            details: (
              <>
                <div className="mx-auto">4</div>
              </>
            ),
          },
          {
            label: "Custom indicator templates",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
        ],
      },
      {
        title: "Watchlists",
        content: [
          {
            label: "Number of watchlists",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
          {
            label: "Symbols per watchlist",
            details: (
              <>
                <div className="mx-auto">1,000</div>
              </>
            ),
          },
          {
            label: "Flagged symbols colors",
            details: (
              <>
                <div className="mx-auto">7</div>
              </>
            ),
          },
          {
            label: "Import/Export",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    accordions: [
      {
        title: "Charts",
        content: [
          {
            label: "Charts per tab",
            details: (
              <>
                <div className="mx-auto">4</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">8</div>
              </>
            ),
          },
          {
            label: "Custom time intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Tick-based intervals (BETA)",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Custom Range bars",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "20 customizable chart types",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Compare symbols",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Dividend-adjusted charts",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Interactive earnings, splits and dividends",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Bar Replay",
        content: [
          {
            label: "Historical data by day and higher timeframes",
            details: (
              <>
                <div className="mx-auto">All</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">41 days</div>
              </>
            ),
          },
          {
            label: "Historical data by the second",
            details: (
              <>
                <div className="mx-auto">90 days</div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <NotAvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Technical analysis and algorithms",
        content: [
          {
            label: "400+ pre-built most popular indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "100K+ community-powered indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Indicator on indicator",
            details: (
              <>
                <div className="mx-auto">8</div>
              </>
            ),
          },
          {
            label: "Indicators per chart",
            details: (
              <>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Financials per chart",
            details: (
              <>
                <div className="mx-auto">7</div>
              </>
            ),
          },
          {
            label: "Custom indicator templates",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
        ],
      },
      {
        title: "Watchlists",
        content: [
          {
            label: "Number of watchlists",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
          {
            label: "Symbols per watchlist",
            details: (
              <>
                <div className="mx-auto">1,000</div>
              </>
            ),
          },
          {
            label: "Flagged symbols colors",
            details: (
              <>
                <div className="mx-auto">7</div>
              </>
            ),
          },
          {
            label: "Import/Export",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    accordions: [
      {
        title: "Charts",
        content: [
          {
            label: "Charts per tab",
            details: (
              <>
                <div className="mx-auto">8</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Custom time intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Tick-based intervals (BETA)",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Custom Range bars",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "20 customizable chart types",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Compare symbols",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Dividend-adjusted charts",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Interactive earnings, splits and dividends",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Bar Replay",
        content: [
          {
            label: "Historical data by day and higher timeframes",
            details: (
              <>
                <div className="mx-auto">All</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto">41 days</div>
              </>
            ),
          },
          {
            label: "Historical data by the second",
            details: (
              <>
                <div className="mx-auto">90 days</div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
      {
        title: "Technical analysis and algorithms",
        content: [
          {
            label: "400+ pre-built most popular indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "100K+ community-powered indicators",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
          {
            label: "Indicator on indicator",
            details: (
              <>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Indicators per chart",
            details: (
              <>
                <div className="mx-auto">25</div>
              </>
            ),
          },
          {
            label: "Financials per chart",
            details: (
              <>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Custom indicator templates",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
        ],
      },
      {
        title: "Watchlists",
        content: [
          {
            label: "Number of watchlists",
            details: (
              <>
                <div className="mx-auto">Unlimited</div>
              </>
            ),
          },
          {
            label: "Symbols per watchlist",
            details: (
              <>
                <div className="mx-auto">1,000</div>
              </>
            ),
          },
          {
            label: "Flagged symbols colors",
            details: (
              <>
                <div className="mx-auto">7</div>
              </>
            ),
          },
          {
            label: "Import/Export",
            details: (
              <>
                <div className="mx-auto">
                  <AvailableIcon />
                </div>
              </>
            ),
          },
        ],
      },
    ],
  },
  // Add more slides with multiple accordions as needed
];

const ComparePlansTableMobile: React.FC = () => {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  const [openSections, setOpenSections] = useState<{ [key: number]: number[] }>(
    () => {
      const initialState: { [key: number]: number[] } = {};
      accordionData.forEach((slide, slideIndex) => {
        initialState[slideIndex] = slide.accordions.map((_, index) => index);
      });
      return initialState;
    }
  );

  const handleToggle = (slideIndex: number, accordionIndex: number) => {
    setOpenSections((prev) => {
      const slideOpenSections = prev[slideIndex] || [];
      const newSlideOpenSections = slideOpenSections.includes(accordionIndex)
        ? slideOpenSections.filter((i) => i !== accordionIndex)
        : [...slideOpenSections, accordionIndex];

      return { ...prev, [slideIndex]: newSlideOpenSections };
    });
  };

  // State to manage slider settings
  const [mainSliderSettings, setMainSliderSettings] = useState<Settings>({
    slidesToShow: 1,
    arrows: true,
  });

  const [thumbSliderSettings, setThumbSliderSettings] = useState<Settings>({
    slidesToShow: 1,
    focusOnSelect: true,
    arrows: false,
  });

  // Effect to update the `asNavFor` after refs are set
  useEffect(() => {
    if (mainSliderRef.current && thumbSliderRef.current) {
      setMainSliderSettings((prevSettings) => ({
        ...prevSettings,
        asNavFor: thumbSliderRef.current || undefined,
      }));

      setThumbSliderSettings((prevSettings) => ({
        ...prevSettings,
        asNavFor: mainSliderRef.current || undefined,
      }));
    }
  }, [mainSliderRef, thumbSliderRef]);

  return (
    <div className="plan-slider-container">
      {/* Main Slider */}
      <div className="inline-block w-full">
        <div className="float-left w-[50%] ">
          <h2 className="text-left">Compare plans</h2>
        </div>
        <div className="float-right  w-[50%] px-[25px]">
          <Slider {...mainSliderSettings} ref={mainSliderRef}>
            <div>
              <h3 className="font-HelveticaNeue leading-[20px] text-[20px]">Basic</h3>
              <span className="text-gradient text-[14px] font-HelveticaNeueMedium">
                Sign up free
              </span>
            </div>
            <div>
              <h3 className="font-HelveticaNeue leading-[20px] text-[20px]">Essential</h3>
              <span className="text-gradient text-[14px] font-HelveticaNeueMedium">
                Try free
              </span>
            </div>
            <div>
              <h3 className="font-HelveticaNeue leading-[20px] text-[20px]">Plus</h3>
              <span className="text-gradient text-[14px] font-HelveticaNeueMedium">
                Try free
              </span>
            </div>
            <div>
              <h3 className="font-HelveticaNeue leading-[20px] text-[20x]">Premium</h3>
              <span className="text-gradient text-[14px] font-HelveticaNeueMedium">
                Try free
              </span>
            </div>
          </Slider>
        </div>
      </div>
      {/* Thumbnail Slider */}
      <Slider {...thumbSliderSettings} ref={thumbSliderRef}>
        {accordionData.map((slide, slideIndex) => (
          <div key={slideIndex} className="w-full last-child-css">
            {slide.accordions.map((accordion, accordionIndex) => (
              <div key={accordionIndex}>
                <button
                  onClick={() => handleToggle(slideIndex, accordionIndex)}
                  className="w-full text-left py-[8px] px-[0px] mb-[10px] focus:outline-none flex justify-between items-center border-b-[1px] border-t-[1px] border-custom-white-15 border-solid"
                >
                  <span className="text-gradient text-[14px] uppercase tracking-wider font-HelveticaNeueMedium">
                    {accordion.title}
                  </span>
                  <span>
                    {openSections[slideIndex]?.includes(accordionIndex) ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    )}
                  </span>
                </button>
                {openSections[slideIndex]?.includes(accordionIndex) && (
                  <div className="text-white font-HelveticaNeueThin text-[18px]">
                    <ul className="list-none p-0 mb-[20px]">
                      {accordion.content.map((contentItem, idx) => (
                        <li
                          key={idx}
                          className="text-left border-t-[1px] text-[14px] border-custom-white-10 flex items-center tracking-[1px] flex-nowrap grid-[10px] py-[10px] px-[0px] pr-[60px]"
                        >
                          <div className="w-[70%]">{contentItem.label}</div>
                          <div className="w-[30%] grid grid-cols-1 grid-[10px] justify-center items-center text-center lg:min-w-[600px]">
                            {contentItem.details}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ComparePlansTableMobile;
