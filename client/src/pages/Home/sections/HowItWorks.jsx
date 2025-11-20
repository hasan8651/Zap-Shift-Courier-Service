import { TbBuildingWarehouse, TbHomeCheck, TbPackage, TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router";
import bookingIcon from "../../../assets/bookingIcon.png"
const steps = [
  {
    "id": 1,
    "icon": "TbPackage",
    "title": "Book Pick & Drop",
    "description": "Schedule a pickup from your door with your preferred time slot."
  },
  {
    "id": 2,
    "icon": "TbTruckDelivery",
    "title": "Courier Pickup",
    "description": "Our rider collects your parcel and dispatches it securely."
  },
  {
    "id": 3,
    "icon": "TbBuildingWarehouse",
    "title": "Smart Sorting",
    "description": "Automated hubs sort and route parcels to the nearest center."
  },
  {
    "id": 4,
    "icon": "TbHomeCheck",
    "title": "Doorstep Delivery",
    "description": "Recipient gets SMS/OTP and delivery confirmation on arrival."
  }
]


const StepCard=({ step }) =>{
  

  return (
    <article className="group relative rounded-2xl bg-gray-200 ring-1 ring-base-300/80 p-5 shadow-sm hover:shadow-md transition">

   
       <img src={bookingIcon} alt="" />
 

     

      <h3 className="mt-4 text-lg font-semibold text-secondary">
        {step.title}
      </h3>
      <p className="mt-1 text-base-content/70">{step.description}</p>

      {/* Hover underline accent */}
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary/70 to-secondary/70 transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

const HowItWorks = () => {
    return (
       <section className="py-14 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
  
          <h2 className="text-xl font-bold text-secondary">How It Works</h2>
            

        {/* Steps grid */}
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <StepCard key={step.id} step={step} index={idx} />
          ))}
        </div>

          </div>
    </section>
    );
};

export default HowItWorks;