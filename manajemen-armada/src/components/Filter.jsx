function Filter({ onFilter }) {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan label kendaraan..."
      className="border border-gray-300 rounded px-4 py-2 w-1/2 md:w-1/5"
      onChange={(e) => onFilter(e.target.value)}
    />
  );
}

export default Filter;
