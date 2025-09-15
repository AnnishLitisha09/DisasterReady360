import { create } from "zustand";
import axios from "axios";

const API_URL = "http://10.10.169.154:8000/api/get-topics?student_id=4";

const initialInfographics = [
  {
    id: "1",
    topic: "earthquake",
    title: "Drop, Cover, Hold on",
    subtitle: "Cover the topic properly",
    image:
      "https://imgs.search.brave.com/0kxTBcvuYmqfNI97wGmL9SsNbMYXNoCrQFYWZMQaJoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjQ0ODg4L3Bob3Rv/L2VhcnRocXVha2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWFhZGFkM1U2S2Ey/dTk5YWhXQk9Ndkxl/bjJpS0daM2oxQ09Y/eHBQTjJndE09",
    isViewed: true,
    description:
      "This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.",
    keyPoints: [
      "Drop to your hands and knees.",
      "Cover your head and neck.",
      "Hold on to something sturdy.",
      "Stay indoors until the shaking stops.",
      "Avoid windows and heavy objects.",
    ],
    infographicsImages: [
      "https://imgs.search.brave.com/kcT1M1USBhWqKxOfvI8FQFw5qcCNzbN0mY2heyn6gZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lYXJ0/aHF1YWtlLWFoZWFk/LXZpZXctaG91c2Ut/ZGlzdHJveWVkLXNp/Z24tMzc3NjIxNjMu/anBn",
      "https://imgs.search.brave.com/XKF7YfU1t4HH8TwxABm0YirEXK7_7Oen66dH0zJFvrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9lYXJ0aHF1/YWtlLXdhdmUtbW9y/b2Njby1tYXAtMjYw/bnctMjM1OTI4NzA4/Ny5qcGc",
      "https://imgs.search.brave.com/4mIbwcKoKQny86YZtNxLgKkMpHPI2wfCI81KIbk8I_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MTIwNzUwOC9waG90/by9kZXN0cm95ZWQt/Y2l0eXNjYXBlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1X/QWhlMUZ6Q1Ffb0RZ/LVU1bzZYLWdmSllN/UU83cXdSQk1VQzNf/UkVIT3pZPQ",
      "https://imgs.search.brave.com/8ZRF6n9DrJ4qav8AcS7AQyUX2xWMecBgzdie0bavIJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NDUwMjUzNi9waG90/by9hZXJpYWwtdmll/dy1vZi1jaXR5LXN0/cmVldC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UnJwUE4x/Q2FvbmFxcHE1S3VX/T1lZSVYwYVdYLUta/OGZHbFloZ1VIa1U4/MD0",
      "https://imgs.search.brave.com/Wm8tM-gHmLVbbvWJ1wcYR-wMr7wRKJZecdhP6B6fRSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RiL1F1YWtlX2Vw/aWNlbnRlcnNfMTk2/My05OC5wbmc",
      "https://imgs.search.brave.com/u7d2Ew9cJd90ao2Qz0dUsBy0Nbe7v4EN7KltCp3NZX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZWFy/dGhxdWFrZS1waWN0/dXJlcy1zNGFueXJt/YWtpZG5zOThxLmpw/Zw",
    ],
  },
];

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
  videos: [], // will be loaded from backend
  infographics: initialInfographics,
  quizzes: initialQuizzes,
  loading: false,
  error: null,

  // ✅ Fetch videos from backend
  fetchVideos: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(API_URL);
      set({ videos: res.data, loading: false });
    } catch (err) {
      console.error("Error fetching videos:", err);
      set({ error: err.message, loading: false });
    }
  },

  // ✅ Mutations
  setVideos: (videos) => set({ videos }),
  markVideoViewed: (videoId) => {
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, isViewed: true } : v
      ),
    }));
  },

  markInfographicViewed: (id) => {
    set((state) => ({
      infographics: state.infographics.map((i) =>
        i.id === id ? { ...i, isViewed: true } : i
      ),
    }));
  },

  updateVideo: (videoId, data) => {
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, ...data } : v
      ),
    }));
  },

  updateInfographic: (id, data) => {
    set((state) => ({
      infographics: state.infographics.map((i) =>
        i.id === id ? { ...i, ...data } : i
      ),
    }));
  },

  updateQuiz: (id, data) => {
    set((state) => ({
      quizzes: state.quizzes.map((q) =>
        q.id === id ? { ...q, ...data } : q
      ),
    }));
  },

  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  addInfographic: (info) =>
    set((state) => ({ infographics: [...state.infographics, info] })),
  addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),
}));
