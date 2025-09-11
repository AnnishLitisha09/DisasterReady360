import { create } from "zustand";
import { API_BASE_URL } from "../config/apiConfig"; // make sure this points to your config

export const useInstituteStore = create((set) => ({
  institutes: [],
  selectedInstitute: null,

  // fetch institutes
  fetchInstitutes: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/institutes`);
      const data = await response.json();

      const formatted = data.map((item) => ({
        label: item.name,
        value: item.institute_id, // important: backend key is institute_id
      }));

      set({ institutes: formatted });

      // log institute list
      console.log("Institutes List:");
      data.forEach((inst) =>
        console.log(`ID: ${inst.institute_id}, Name: ${inst.name}`)
      );
    } catch (error) {
      console.error("Error fetching institutes:", error);
    }
  },

  setSelectedInstitute: (id) => set({ selectedInstitute: id }),
}));
