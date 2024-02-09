import AccessoriesTable from "@/components/Table/AccessoriesTable";
const accessoriesPage = () => {
  const vehicleAccessories = [
    {
      id: 1,
      title: "Diagnostic Tools",
      stock: 0,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Maintenance Tools",
      stock: 1,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Tire Pressure Gauge",
      stock: 2,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Jumper Cables",
      stock: 3,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Emergency Kits",
      stock: 4,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Cargo Accessories",
      stock: 5,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Car Covers",
      stock: 7,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Floor Mats",
      stock: 10,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Mobile Phone Mounts",
      stock: 50,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "USB Car Chargers",
      stock: 0,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Bluetooth Adapters",
      stock: 1,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Wheel Locks",
      stock: 2,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Winter Accessories",
      stock: 3,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Roof Boxes",
      stock: 4,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Towing Accessories",
      stock: 5,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Car Organizers",
      stock: 7,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Fuel Cans",
      stock: 10,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Rooftop Cargo Bags",
      stock: 50,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Emergency Escape Tools",
      stock: 0,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Headlight Restoration Kits",
      stock: 1,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Portable Air Compressor",
      stock: 2,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Vehicle Fire Extinguisher",
      stock: 3,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Carpet",
      stock: 4,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Upholstery Cleaners",
      stock: 44,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Rain Guards",
      stock: 5,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Wheel Chocks",
      stock: 7,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Windshield Wipers",
      stock: 10,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Tinted Window Film",
      stock: 50,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Portable Jump Starters",
      stock: 0,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Cabin Air Filters",
      stock: 1,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Car Emergency Hammer",
      stock: 2,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Backup Cameras",
      stock: 3,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Roof Rack Accessories",
      stock: 4,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Vehicle Wax and Polish",
      stock: 5,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Trailer Wiring Kits",
      stock: 7,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
    {
      title: "Snow Brushes Ice Scrapers",
      stock: 10,
      image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    },
  ];

  return (
    <div>
      <AccessoriesTable />
    </div>
  );
};

export default accessoriesPage;
