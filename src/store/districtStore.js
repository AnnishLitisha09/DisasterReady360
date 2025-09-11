import { create } from "zustand";
import { API_BASE_URL } from "../config/apiConfig";

export const useDistrictStore = create((set) => ({
  districts: [],
  district: null,

  fetchDistricts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/districts`);
      const data = await response.json();

      const formatted = data.map((d) => ({
        label: d.district,
        value: d.id,
      }));

      set({ districts: formatted });
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  },

  setDistrict: (id) => set({ district: id }),
}));
