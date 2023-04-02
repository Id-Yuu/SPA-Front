// Component
import { Card } from "../../Components/Card";
import { SectionDesc } from "../../Components/SectionDesc";
import { Btn } from "../../Components/Button";

// JSON API
import plan from "../../api/plan.json";

export const Pricing = () => {
  return (
    <div className="block mb-9">
      <SectionDesc
        sTitle="Select the Best Web Hosting Plan for Your Website"
        sDesc="From basic to advanced, we have a web hosting plan that's right for you. Compare our options and select the one that meets your needs."
      />

      {/* Basic Start */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 justify-center">
        <Card bground="bg-white">
          <div className="flex flex-col gap-4">
            <p className="font-dms font-bold text-lg leading-6">Basic</p>
            <h2 className="font-dms font-bold text-4xl leading-6">$5/mth</h2>
          </div>
          <p className="font-dms text-sm font-medium my-4">
            It offers a reliable and cost-effective hosting solution with all
            the essentials you need to get started.
          </p>
          <div className="content">
            <ul className="flex flex-col gap-4">
              {plan.basic.map((id, index) => (
                <li
                  className="flex flex-row justify-normal items-center text-left gap-1"
                  key={index}
                >
                  <img className="w-5 h-5" src={id.icon} alt="plan" />
                  <span className="font-dms font-medium text-base leading-[22px] text-black/60">
                    {id.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 my-3">
            <p className="font-dms font-normal text-xs">Additional Feature:</p>
            <p className="font-dms font-medium text-sm">
              *$1/GB for additional storage
            </p>
          </div>
          <Btn tBtn="Choose" />
        </Card>

        {/* Professional Start */}
        <Card bground="bg-slate-900">
          <div className="flex flex-col gap-4">
            <p className="font-dms font-bold text-lg leading-6 text-white">
              Professional
            </p>
            <h2 className="font-dms font-bold text-4xl leading-6 text-white">
              $25/mth
            </h2>
          </div>
          <p className="font-dms text-sm font-medium my-4 text-white/60">
            It includes a range of advanced features and resources to support
            and grow your online presence.
          </p>
          <div className="content">
            <ul className="flex flex-col gap-4">
              {plan.professional.map((id, index) => (
                <li
                  className="flex flex-row justify-normal items-center text-left gap-1"
                  key={index}
                >
                  <img className="w-5 h-5" src={id.icon} alt="plan" />
                  <span className="font-dms font-medium text-base leading-[22px] text-white/60">
                    {id.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 my-3">
            <p className="font-dms font-normal text-xs text-white/60">
              Additional Feature:
            </p>
            <p className="font-dms font-medium text-sm text-white">
              *$0.75/GB for additional storage
            </p>
          </div>
          <Btn tBtn="Choose" />
        </Card>

        {/* Business Start */}
        <Card bground="bg-white">
          <div className="flex flex-col gap-4">
            <p className="font-dms font-bold text-lg leading-6">Business</p>
            <h2 className="font-dms font-bold text-4xl leading-6">$50/mth</h2>
          </div>
          <p className="font-dms text-sm font-medium my-4">
            It offers the most robust set of features and resources to ensure
            the smooth operation and growth of your website.
          </p>
          <div className="content">
            <ul className="flex flex-col gap-4">
              {plan.business.map((id, index) => (
                <li
                  className="flex flex-row justify-normal items-center text-left gap-1"
                  key={index}
                >
                  <img className="w-5 h-5" src={id.icon} alt="plan" />
                  <span className="font-dms font-medium text-base leading-[22px] text-black/60">
                    {id.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 my-3">
            <p className="font-dms font-normal text-xs">Additional Feature:</p>
            <p className="font-dms font-medium text-sm">
              *$0.50/GB for additional storage
            </p>
          </div>
          <Btn tBtn="Choose" />
        </Card>
      </div>
    </div>
  );
};
