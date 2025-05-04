export default function Pagination({
  current,
  perPage,
  total,
  onPageChange,
  onPerPageChange,
}) {
  const totalPages = Math.ceil(total / perPage);
  const start = (current - 1) * perPage + 1;
  const end = Math.min(current * perPage, total);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-6">
      <span className="text-sm">
        Menampilkan <strong>{start}</strong>–<strong>{end}</strong> dari{" "}
        <strong>{total}</strong> Data
      </span>
      <div className="flex items-center gap-2">
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(+e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-black"
        >
          {[5, 10, 20].map((n) => (
            <option key={n} value={n}>
              {n} / halaman
            </option>
          ))}
        </select>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-black"
        >
          Prev
        </button>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
