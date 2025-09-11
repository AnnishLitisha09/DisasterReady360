import create from 'zustand';

const initialVideos = [
  {
    id: '1',
    title: 'How to Protect Yourself During an Earthquake',
    subtitle: 'Drop, Cover, Hold on',
    duration: '60 min',
    videoId: 'LBquzWQvp_M',
    image:
      'https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg',
    isViewed: true,
  },
  {
    id: '2',
    title: 'Evacuation Tips During Earthquake',
    subtitle: 'Stay Calm and Move Safely',
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
    title: 'Earthquake Safety Quiz',
    questions: '20 questions',
    points: '500 points',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
  },
  {
    id: '2',
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
    set({
      videos: get().videos.map((v) =>
        v.id === videoId ? { ...v, isViewed: true } : v
      ),
    });
  },

  markInfographicViewed: (id) => {
    set({
      infographics: get().infographics.map((i) =>
        i.id === id ? { ...i, isViewed: true } : i
      ),
    });
  },

  updateVideo: (videoId, data) => {
    set({
      videos: get().videos.map((v) =>
        v.id === videoId ? { ...v, ...data } : v
      ),
    });
  },

  updateInfographic: (id, data) => {
    set({
      infographics: get().infographics.map((i) =>
        i.id === id ? { ...i, ...data } : i
      ),
    });
  },

  updateQuiz: (id, data) => {
    set({
      quizzes: get().quizzes.map((q) =>
        q.id === id ? { ...q, ...data } : q
      ),
    });
  },
}));
