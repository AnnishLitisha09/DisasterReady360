// store/LearningStore.ts
import { create } from "zustand";
import axios from "axios";

// ✅ Centralized API Base URL
import { API_BASE_URL } from "../config/apiConfig";

// Endpoints
const VIDEOS_API_URL = `${API_BASE_URL}/get-topics`;
const INFO_API_URL = `${API_BASE_URL}/get-infographic`;
const QUIZZES_API_URL = `${API_BASE_URL}/get-quizzes`;

const initialQuizzes = [];

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

  // ✅ Fetch quizzes
  fetchQuizzes: async (student_id: number) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${QUIZZES_API_URL}?student_id=${student_id}`);
      set({ quizzes: res.data, loading: false });
    } catch (err) {
      console.error("Error fetching quizzes:", err);
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Mutations
  setVideos: (videos) => set({ videos }),
  setInfographics: (infographics) => set({ infographics }),
  setQuizzes: (quizzes) => set({ quizzes }),

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
  markQuizViewed: (id) =>
    set((state) => ({
      quizzes: state.quizzes.map((q) =>
        q.id === id ? { ...q, isViewed: true } : q
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
