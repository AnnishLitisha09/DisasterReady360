import { create } from "zustand";
import { API_BASE_URL } from "../config/apiConfig";

export const useInstituteStore = create((set) => ({
  institutes: [],
  selectedInstitute: null,

  fetchInstitutes: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/institutes`);
      const data = await response.json();

      // ✅ map to picker-friendly format
      const formatted = data.map((item) => ({
        label: item.name,                 // display name
        value: item.institute_id,         // unique ID
        key: item.institute_id.toString() // safe key
      }));

      set({ institutes: formatted });

      console.log("Institutes List:", formatted);
    } catch (error) {
      console.error("Error fetching institutes:", error);
    }
  },

  setSelectedInstitute: (id) => set({ selectedInstitute: id }),
}));
