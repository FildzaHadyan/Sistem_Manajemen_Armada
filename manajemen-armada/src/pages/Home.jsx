import { useEffect, useState } from "react";
import { getVehicles } from "../services/api";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import VehicleDetailModal from "../components/VehicleDetailModal";

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getVehicles()
      .then((res) => {
        const data = res.data.data;
        setVehicles(data);
        setFiltered(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleFilter = (query) => {
    const result = vehicles.filter((vehicle) =>
      vehicle.attributes.label.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
    setCurrentPage(1);
  };

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen p-6 mx-auto bg-blue-800 text-white">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Manajemen Armada Transjakarta
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Filter onFilter={handleFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {paginated.map((vehicle) => (
            <Card
              key={vehicle.id}
              vehicle={vehicle}
              onClick={() => setSelectedVehicle(vehicle)}
            />
          ))}
        </div>
        <Pagination
          total={filtered.length}
          perPage={itemsPerPage}
          current={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>

      {/* Footer */}
      <footer className="mt-4 text-center text-sm">
        © 2025 PT Transportasi Jakarta.
      </footer>

      {/* Detail Modal */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}

export default Home;
