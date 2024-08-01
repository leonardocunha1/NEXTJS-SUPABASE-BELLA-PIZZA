"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSortBy = searchParams.get("orderByPrice") || "normal";

  const handleFilter = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderByPrice", e.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex">
      <select
        value={currentSortBy}
        onChange={handleFilter}
        className="mx-auto my-4 w-full max-w-56 rounded-full border-2 border-orange-500 px-2 py-1 font-semibold text-orange-500 sm:mx-0 sm:ml-auto"
      >
        <option value="normal">Preço: - </option>
        <option value="lowToHigh">Preço: &darr;</option>
        <option value="highToLow">Preço: &uarr;</option>
      </select>
    </div>
  );
}

export default Filter;
