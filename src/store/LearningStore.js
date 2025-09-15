// store/LearningStore.ts
import { create } from "zustand";
import axios from "axios";

// ✅ Centralized API Base URL
import { API_BASE_URL } from "../config/apiConfig";

// Use base URL for endpoints
const VIDEOS_API_URL = `${API_BASE_URL}/get-topics`;
const INFO_API_URL = `${API_BASE_URL}/get-infographic`;

const initialQuizzes = [
  {
    id: "1",
    topic: "earthquake",
    title: "Earthquake Safety Quiz",
    questions: "20 questions",
    points: "500 points",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg",
    isViewed: false,
  },
];

export const useLearningStore = create((set) => ({
  videos: [],
  infographics: [],
  quizzes: initialQuizzes,
  loading: false,
  error: null,

  // ✅ Fetch videos
  fetchVideos: async (student_id: number) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${VIDEOS_API_URL}?student_id=${student_id}`);
      set({ videos: res.data, loading: false });
    } catch (err) {
      console.error("Error fetching videos:", err);
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Fetch infographics
  fetchInfographics: async (student_id: number) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${INFO_API_URL}?student_id=${student_id}`);
      set({ infographics: res.data, loading: false });
    } catch (err) {
      console.error("Error fetching infographics:", err);
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Mutations
  setVideos: (videos) => set({ videos }),
  setInfographics: (infographics) => set({ infographics }),
  markVideoViewed: (videoId) =>
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, isViewed: true } : v
      ),
    })),
  markInfographicViewed: (id) =>
    set((state) => ({
      infographics: state.infographics.map((i) =>
        i.id === id ? { ...i, isViewed: true } : i
      ),
    })),

  updateVideo: (videoId, data) =>
    set((state) => ({
      videos: state.videos.map((v) => (v.id === videoId ? { ...v, ...data } : v)),
    })),
  updateInfographic: (id, data) =>
    set((state) => ({
      infographics: state.infographics.map((i) => (i.id === id ? { ...i, ...data } : i)),
    })),
  updateQuiz: (id, data) =>
    set((state) => ({
      quizzes: state.quizzes.map((q) => (q.id === id ? { ...q, ...data } : q)),
    })),

  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  addInfographic: (info) => set((state) => ({ infographics: [...state.infographics, info] })),
  addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),
}));
