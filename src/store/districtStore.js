import { create } from "zustand";
import { API_BASE_URL } from "../config/apiConfig";

export const useDistrictStore = create((set) => ({
  districts: [],
  selectedDistrict: null,

  fetchDistricts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/districts`);
      const data = await response.json();

      // Normalize API data -> { label, value, key }
      const formatted = data.map((item) => ({
        label: item.district || "Unknown", // ✅ correct field
        value: item.id,                    // ✅ correct field
        key: String(item.id),              // ✅ safe toString
      }));

      set({ districts: formatted });
      console.log("Districts List:", formatted);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  },

  setDistrict: (value) => set({ selectedDistrict: value }),
}));
