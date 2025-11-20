import { TbBuildingWarehouse, TbHomeCheck, TbPackage, TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router";
import serviceIcon from "../../assets/service.png"
const services = [
  {
    "id": "svc-1",
    "icon": "TbTruckDelivery",
    "title": "Express & Standard Delivery",
    "description": "Same-day, next-day, and economy options with live tracking and SMS updates.",
    "slug": "/services/express",
    "featured": false
  },
  {
    "id": "svc-2",
    "icon": "TbMap2",
    "title": "Nationwide Delivery",
    "description": "Reliable, wide-area coverage with optimized routes and hub-to-hub transfers.",
    "slug": "/services/nationwide",
    "featured": true
  },
  {
    "id": "svc-3",
    "icon": "TbBuildingWarehouse",
    "title": "Fulfillment Solution",
    "description": "Store, pick, pack, and dispatch with real-time inventory visibility.",
    "slug": "/services/fulfillment",
    "featured": false
  },
  {
    "id": "svc-4",
    "icon": "TbCashBanknote",
    "title": "Cash on Delivery",
    "description": "Secure COD handling and daily settlements for your orders.",
    "slug": "/services/cod",
    "featured": false
  },
  {
    "id": "svc-5",
    "icon": "TbBuildingSkyscraper",
    "title": "Corporate / Contract Logistics",
    "description": "Custom SLAs, bulk pricing, and dedicated account management.",
    "slug": "/services/corporate",
    "featured": false
  },
  {
    "id": "svc-6",
    "icon": "TbArrowBackUp",
    "title": "Parcel Return",
    "description": "Hassle-free reverse logistics with doorstep pickup and tracking.",
    "slug": "/services/returns",
    "featured": false
  }
]


const ServiceCard=({ service }) =>{
  // console.log(service)

  return (
    <article
      className={`relative bg-amber-200 rounded-2xl p-5 shadow transition hover:shadow-md hover:bg-primary cursor-pointer`}
    >
        <div className="flex justify-center">
            
      {/* Icon bubble */}
     <img src={serviceIcon} alt="" />
        </div>

      

      <h3 className="mt-4 text-lg font-semibold text-secondary">{service.title}</h3>
      <p className="mt-1 text-base-content/70">{service.description}</p>

      <div className="mt-4 flex items-center justify-between">
       
        <div className="h-0.5 w-16 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full" />
      </div>
    </article>
  );
}


const Services = () => {
    return (
      <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
       

        {/* Dark panel like your design */}
        <div className="rounded-3xl bg-secondary text-neutral-content p-6 sm:p-8 ring-1 ring-neutral/20">
         {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-2 text-white">
            Express delivery, nationwide coverage, fulfillment, COD, and more—built for growth.
          </p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

       
        </div>
      </div>
    </section>
    );
};

export default Services;