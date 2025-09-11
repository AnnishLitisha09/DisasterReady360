import { create } from 'zustand';

const initialVideos = [
  {
    id: '1',
    topic: 'earthquake',
    topicimg:'https://example.com/earthquake-image.jpg',
    title: 'How to Protect Yourself During an Earthquake',
    subtitle: 'Drop, Cover, Hold on',
    description:
      'Learn the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Drop to your hands and knees to prevent being knocked over.',
      'Cover your head and neck with your arms or under sturdy furniture.',
      'Hold on to the furniture or shelter until shaking stops.',
      'Stay indoors until the shaking stops; avoid running outside.',
      'Avoid standing in doorways due to falling debris risks.',
    ],
    duration: '60 min',
    videoId: 'LBquzWQvp_M',
    image:
      'https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg',
    isViewed: false,
  },
  {
  id: '2',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-safety.jpg',
  title: 'Earthquake Preparedness at Home',
  subtitle: 'Plan, Prepare, Protect',
  description:
    'Understand how to prepare your home and family before an earthquake occurs.',
  keyPoints: [
    'Secure heavy furniture and appliances to walls.',
    'Store emergency supplies including water, food, and first-aid kits.',
    'Identify safe spots in each room such as under sturdy tables.',
    'Create a family communication and evacuation plan.',
    'Practice earthquake drills regularly.',
  ],
  duration: '45 min',
  videoId: 'sB3Pq6VqrKM',
  image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/emergency-1993906_1280.jpg',
  isViewed: false,
},
{
  id: '3',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-outdoors.jpg',
  title: 'What to Do During an Earthquake (Outdoors)',
  subtitle: 'Stay Away from Hazards',
  description:
    'Learn the right actions to take when an earthquake strikes while you are outside.',
  keyPoints: [
    'Move to an open area away from buildings, trees, and power lines.',
    'Stay low to the ground to avoid falling.',
    'Do not run or try to enter buildings.',
    'Protect your head from falling debris.',
    'Stay alert for aftershocks.',
  ],
  duration: '30 min',
  videoId: 'Kk6muw9R7O0',
  image: 'https://cdn.pixabay.com/photo/2016/03/09/15/22/city-1246231_1280.jpg',
  isViewed: false,
},
{
  id: '4',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-school.jpg',
  title: 'Earthquake Safety in Schools',
  subtitle: 'Protecting Students and Teachers',
  description:
    'Explore the best practices for students, teachers, and staff to remain safe during earthquakes in schools.',
  keyPoints: [
    'Follow the “Drop, Cover, and Hold On” rule immediately.',
    'Move away from windows and glass.',
    'Teachers should guide students calmly to safe zones.',
    'Avoid overcrowding in exits or stairways.',
    'Conduct regular earthquake preparedness drills.',
  ],
  duration: '50 min',
  videoId: '0fKfDbY_p4A',
  image: 'https://cdn.pixabay.com/photo/2016/03/23/18/48/classroom-1276271_1280.jpg',
  isViewed: false,
},
{
  id: '5',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-buildings.jpg',
  title: 'Post-Earthquake Safety Measures',
  subtitle: 'Stay Cautious After the Shaking Stops',
  description:
    'Discover the crucial steps to take after an earthquake to ensure personal and community safety.',
  keyPoints: [
    'Check yourself and others for injuries and provide first aid.',
    'Be cautious of aftershocks.',
    'Inspect your home for structural damage before re-entering.',
    'Avoid using elevators until deemed safe.',
    'Listen to emergency services for updates and instructions.',
  ],
  duration: '40 min',
  videoId: 'Xx0gFhFhcy4',
  image: 'https://cdn.pixabay.com/photo/2018/03/04/18/04/demolition-3199136_1280.jpg',
  isViewed: false,
},
{
  id: '6',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-community.jpg',
  title: 'Community Earthquake Response',
  subtitle: 'Working Together in Crisis',
  description:
    'Learn how communities can respond and support one another after a major earthquake.',
  keyPoints: [
    'Organize community first-aid and response groups.',
    'Set up temporary shelters for displaced residents.',
    'Ensure safe distribution of food and water.',
    'Assist authorities in search and rescue operations.',
    'Promote emotional and psychological support for victims.',
  ],
  duration: '55 min',
  videoId: 'yXkk0gZ1S0Y',
  image: 'https://cdn.pixabay.com/photo/2016/03/27/20/54/refugees-1287351_1280.jpg',
  isViewed: false,
},

  {
    id: '7',
    topic: 'fire',
    topicimg:'https://example.com/earthquake-image.jpg',
    title: 'Evacuation Tips During Earthquake',
    subtitle: 'Stay Calm and Move Safely',
    description:
      'Guidance on safely evacuating during or after an earthquake, focusing on staying calm and minimizing risk.',
    keyPoints: [
      'Stay calm to make clear decisions.',
      'Assess your surroundings for hazards like fires, gas leaks, or structural damage.',
      'Use stairs, not elevators.',
      'Move to open areas away from buildings, trees, and power lines.',
      'Follow instructions from emergency personnel and local authorities.',
    ],
    duration: '45 min',
    videoId: 'GwUh9P0oZpc',
    image:
      'https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg',
    isViewed: false,
  },
];


const initialInfographics = [
  {
    id: '1',
    topic: 'earthquake',
    title: 'Drop, Cover, Hold on',
    subtitle: 'Cover the topic properly',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqHqWHfSLTfTsNRi8xqEjVRoegUZLy5BRUQ&s',
    isViewed: true,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Drop to your hands and knees.',
      'Cover your head and neck.',
      'Hold on to something sturdy.',
      'Stay indoors until the shaking stops.',
      'Avoid windows and heavy objects.',
    ],
    infographicsImages: [
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
    ],
  },
  {
    id: '2',
    topic: 'fire',
    title: 'Evacuation Steps',
    subtitle: 'Stay safe outside',
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Know your nearest exits.',
      'Follow evacuation signs.',
      'Do not use elevators.',
      'Assist children, elderly, and disabled.',
      'Assemble at the designated safe zone.',
    ],
    infographicsImages: [
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
      'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
    ],
  },
];

const initialQuizzes = [
  {
    id: '1',
    topic: 'earthquake',
    title: 'Earthquake Safety Quiz',
    questions: '20 questions',
    points: '500 points',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
  },
  {
    id: '2',
    topic: 'fire',
    title: 'Emergency Kit Quiz',
    questions: '15 questions',
    points: '400 points',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/13/14/cartoon-2026571_960_720.png',
  },
];

export const useLearningStore = create((set, get) => ({
  videos: initialVideos,
  infographics: initialInfographics,
  quizzes: initialQuizzes,

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
      quizzes: state.quizzes.map((q) => (q.id === id ? { ...q, ...data } : q)),
    }));
  },

  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  addInfographic: (info) =>
    set((state) => ({ infographics: [...state.infographics, info] })),
  addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),
}));
