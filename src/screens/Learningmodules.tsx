import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { moderateScale } from '../utils/scalingUtils';
import { Arrowback } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

export const Learningmodules = () => {
  const navigation = useNavigation();

  const videos = [
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

  const infographics = [
    {
      id: '1',
      title: 'Drop, Cover, Hold on',
      subtitle: 'Cover the topic properly',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqHqWHfSLTfTsNRi8xqEjVRoegUZLy5BRUQ&s',
      isViewed: true,
      description: 'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
      keyPoints: [
        'Drop to your hands and knees.',
        'Cover your head and neck.',
        'Hold on to something sturdy.',
        'Stay indoors until the shaking stops.',
        'Avoid windows and heavy objects.'
      ],
      infographicsImages: [
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
        "https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg"
      ]
    },
    {
      id: '2',
      title: 'Evacuation Steps',
      subtitle: 'Stay safe outside',
      image: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
      isViewed: false,
      description: 'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
      keyPoints: [
        'Know your nearest exits.',
        'Follow evacuation signs.',
        'Do not use elevators.',
        'Assist children, elderly, and disabled.',
        'Assemble at the designated safe zone.'
      ],
      infographicsImages: [
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
      ]
    },
  ];

  const quizzes = [
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

  const renderVideo = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Veiwvideo', { videos, currentIndex: index })
      }>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <Text style={styles.cardDuration}>{item.duration}</Text>
      <TouchableOpacity
        style={[styles.viewBtn, item.isViewed && styles.completedBtn]}>
        <Text style={[styles.viewText, item.isViewed && styles.completedText]}>
          {item.isViewed ? 'Completed' : 'View'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderInfographic = ({ item }) => (
    <View style={styles.infoCard}>
      <Image source={{ uri: item.image }} style={styles.infoImage} />
      <View style={styles.infoTextContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <TouchableOpacity
          style={[styles.viewBtn, item.isViewed && styles.completedBtn]}
          onPress={() => navigation.navigate('Infographics', { infographic: item })}>
          <Text style={[styles.viewText, item.isViewed && styles.completedText]}>
            {item.isViewed ? 'Completed' : 'View'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderQuiz = ({ item }) => (
    <View style={styles.quizCard}>
      <Image source={{ uri: item.image }} style={styles.quizImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.quizSubtitle}>{item.questions}</Text>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrowback width={24} height={24} fill="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Earthquake Module</Text>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <Text style={styles.progressText}>Completed percentage: 50%</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Videos */}
        <Text style={styles.sectionTitle}>VIDEOS</Text>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderVideo}
          showsHorizontalScrollIndicator={false}
        />

        {/* Infographics */}
        <Text style={styles.sectionTitle}>INFOGRAPHICS</Text>
        <FlatList
          data={infographics}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderInfographic}
          showsHorizontalScrollIndicator={false}
        />

        {/* Quizzes */}
        <Text style={styles.sectionTitle}>QUIZZES</Text>
        <FlatList
          data={quizzes}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderQuiz}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#E85A2A',
    padding: moderateScale(20),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: moderateScale(80),
  },
  headerTitle: {
    color: '#fff',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginLeft: moderateScale(10),
  },
  progressSection: { padding: moderateScale(20) },
  progressText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginBottom: moderateScale(10),
  },
  progressBar: {
    width: '100%',
    height: moderateScale(22),
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#E85A2A',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10),
    color: 'black',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: moderateScale(10),
    padding: moderateScale(10),
    width: 280,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  infoTextContainer: { flex: 1, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: moderateScale(10),
    padding: moderateScale(10),
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: { width: '100%', height: 100, borderRadius: 8 },
  cardTitle: { fontSize: moderateScale(14), fontWeight: 'bold', marginVertical: 5 },
  cardSubtitle: { fontSize: moderateScale(12), color: '#555' },
  cardDuration: { fontSize: moderateScale(12), color: '#888' },
  viewBtn: {
    backgroundColor: '#E85A2A',
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  viewText: { color: '#fff', fontSize: moderateScale(12), fontWeight: 'bold' },
  completedBtn: { backgroundColor: 'green' },
  completedText: { color: '#fff' },
  quizCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: moderateScale(10),
    padding: moderateScale(10),
    width: 180,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  quizImage: { width: '100%', height: 100, borderRadius: 8 },
  quizSubtitle: { fontSize: moderateScale(12), marginTop: 5, color: '#555' },
  points: {
    fontSize: moderateScale(12),
    color: '#E85A2A',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
