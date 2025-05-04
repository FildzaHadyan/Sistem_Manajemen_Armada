function VehicleDetailModal({ vehicle, onClose }) {
  const {
    label,
    current_status,
    current_stop_sequence,
    bearing,
    speed,
    updated_at,
  } = vehicle.attributes;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-400 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">{label}</h2>
        <p>Status: {current_status}</p>
        <p>Urutan Stop: {current_stop_sequence}</p>
        <p>Arah (Bearing): {bearing}</p>
        <p>Kecepatan: {speed} km/h</p>
        <p>Terakhir update: {new Date(updated_at).toLocaleString()}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

export default VehicleDetailModal;
