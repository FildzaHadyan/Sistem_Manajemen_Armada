function Card({ vehicle, onClick }) {
  const { label, current_status, latitude, longitude } = vehicle.attributes;

  return (
    <div
      className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-blue-600"
      onClick={onClick}
    >
      <h2 className="font-bold text-xl mb-2">{label}</h2>
      <p>Status: {current_status}</p>
      <p>
        Lokasi: {latitude.toFixed(3)}, {longitude.toFixed(3)}
      </p>
    </div>
  );
}

export default Card;
