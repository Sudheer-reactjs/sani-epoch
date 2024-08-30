import React, { useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  AvailableIcon,
  NotAvailableIcon,
} from "@/utlis/svg";

interface AccordionItem {
  title: string;
  content: { label: string; details: React.ReactNode }[];
}

const accordionData: AccordionItem[] = [
  {
    title: "Charts",
    content: [
      {
        label: "Charts per tab",
        details: (
          <>
            <div className="mx-auto">1</div>
            <div className="mx-auto">2</div>
            <div className="mx-auto">4</div>
            <div className="mx-auto">8</div>
          </>
        ),
      },
      {
        label: "Number of saved chart layouts",
        details: (
          <>
            <div className="mx-auto">1</div>
            <div className="mx-auto">5</div>
            <div className="mx-auto">8</div>
            <div className="mx-auto">10</div>
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
            <div className="mx-auto">
              <AvailableIcon />
            </div>
            <div className="mx-auto">
              <AvailableIcon />
            </div>
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
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "Tick-based intervals (BETA)",
        details: (
          <>
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "Custom Range bars",
        details: (
          <>
            <div className="mx-auto"><NotAvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "20 customizable chart types",
        details: (
          <>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "Compare symbols",
        details: (
          <>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "Dividend-adjusted charts",
        details: (
          <>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
      {
        label: "Interactive earnings, splits and dividends",
        details: (
          <>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
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
                <div className="mx-auto">All</div>
                <div className="mx-auto">All</div>
                <div className="mx-auto">All</div>
              </>
            ),
          },
          {
            label: "Number of saved chart layouts",
            details: (
              <>
                <div className="mx-auto"><NotAvailableIcon /></div>
                <div className="mx-auto">41 days</div>
                <div className="mx-auto">41 days</div>
                <div className="mx-auto">41 days</div>
              </>
            ),
          },
          {
            label: "Historical data by the second",
            details: (
              <>
                <div className="mx-auto"><NotAvailableIcon /></div>
                <div className="mx-auto">90 days</div>
                <div className="mx-auto">90 days</div>
                <div className="mx-auto">90 days</div>
              </>
            ),
          },
          {
            label: "Second-based intervals",
            details: (
              <>
                <div className="mx-auto"><NotAvailableIcon /></div>
                <div className="mx-auto"><NotAvailableIcon /></div>
                <div className="mx-auto"><NotAvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
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
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
              </>
            ),
          },
          {
            label: "100K+ community-powered indicators",
            details: (
              <>
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
                <div className="mx-auto"><AvailableIcon /></div>
              </>
            ),
          },
          {
            label: "Indicator on indicator",
            details: (
              <>
                <div className="mx-auto">1</div>
                <div className="mx-auto">5</div>
                <div className="mx-auto">8</div>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Indicators per chart",
            details: (
              <>
                <div className="mx-auto">2</div>
                <div className="mx-auto">5</div>
                <div className="mx-auto">10</div>
                <div className="mx-auto">25</div>
              </>
            ),
          },
          {
            label: "Financials per chart",
            details: (
              <>
                <div className="mx-auto">1</div>
                <div className="mx-auto">4</div>
                <div className="mx-auto">7</div>
                <div className="mx-auto">10</div>
              </>
            ),
          },
          {
            label: "Custom indicator templates",
            details: (
              <>
                <div className="mx-auto">1</div>
                <div className="mx-auto">Unlimited</div>
                <div className="mx-auto">Unlimited</div>
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
            <div className="mx-auto">1</div>
            <div className="mx-auto">Unlimited</div>
            <div className="mx-auto">Unlimited</div>
            <div className="mx-auto">Unlimited</div>
          </>
        ),
      },
      {
        label: "Symbols per watchlist",
        details: (
          <>
            <div className="mx-auto">30</div>
            <div className="mx-auto">1,000</div>
            <div className="mx-auto">1,000</div>
            <div className="mx-auto">1,000</div>
          </>
        ),
      },
      {
        label: "Flagged symbols colors",
        details: (
          <>
            <div className="mx-auto">1</div>
            <div className="mx-auto">7</div>
            <div className="mx-auto">7</div>
            <div className="mx-auto">7</div>
          </>
        ),
      },
      {
        label: "Import/Export",
        details: (
          <>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
            <div className="mx-auto"><AvailableIcon /></div>
          </>
        ),
      },
    ],
  },
];

const Accordion: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([0, 1, 2, 3]);

  const handleToggle = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
    <div className="hidden border-after relative lg:block">
      <div className="text-white font-HelveticaNeueThin  text-[18px]">
        <ul className="list-none p-0 py-[25px]">
          <li className="text-left grid-[10px] flex items-center flex-nowrap min-h-[70px] px-[26px] pr-[60px]">
            <div className="w-[50%] ">
              <h2 className="ml-[-26px]">Compare plans</h2>
            </div>
            <div className="w-[50%] grid-[10px] grid grid-cols-4 justify-center items-center text-center lg:min-w-[600px]">
              <div>
                <h3 className="font-HelveticaNeue text-[24px]">Basic</h3>
                <span className="text-gradient text-[16px] font-HelveticaNeueMedium">
                  Sign up free
                </span>
              </div>
              <div>
                <h3 className="font-HelveticaNeue text-[24px]">Essential</h3>
                <span className="text-gradient text-[16px] font-HelveticaNeueMedium">
                  Try free
                </span>
              </div>
              <div>
                <h3 className="font-HelveticaNeue text-[24px]">Plus</h3>
                <span className="text-gradient text-[16px] font-HelveticaNeueMedium">
                  Try free
                </span>
              </div>
              <div>
                <h3 className="font-HelveticaNeue text-[24px]">Premium</h3>
                <span className="text-gradient text-[16px] font-HelveticaNeueMedium">
                  Try free
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full last-child-css">
        {accordionData.map((item, index) => (
          <div key={index} className="list-child">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left py-[17px] px-[10px] mb-[24px] focus:outline-none flex justify-between items-center border-b-[1px] border-t-[1px] border-custom-white-15 border-solid"
            >
              <span className="text-gradient uppercase tracking-wider font-HelveticaNeueMedium">
                {item.title}
              </span>
              <span>
                {openSections.includes(index) ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )}
              </span>
            </button>
            {openSections.includes(index) && (
              <div className="text-white font-HelveticaNeueThin  text-[18px]">
                <ul className="list-none p-0 mb-[45px]">
                  {item.content.map((contentItem, idx) => (
                    <li
                      key={idx}
                      className="text-left border-t-[1px] border-custom-white-10 flex items-center flex-nowrap grid-[10px] min-h-[70px] px-[26px] pr-[60px]"
                    >
                      <div className="w-[50%] ">{contentItem.label}</div>
                      <div className="w-[50%]  grid grid-cols-4 grid-[10px] justify-center items-center text-center lg:min-w-[600px]">
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
      </div>
    </>
  );
};

export default Accordion;
