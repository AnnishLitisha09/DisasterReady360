import React, { useMemo } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLearningStore } from '../store/LearningStore';

export const Learningmodules = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { topic } = route.params;

  // ✅ Access store state only once
  const videosStore = useLearningStore((state) => state.videos);
  const infographicsStore = useLearningStore((state) => state.infographics);
  const quizzesStore = useLearningStore((state) => state.quizzes);

  const markVideoViewed = useLearningStore((state) => state.markVideoViewed);
  const markInfographicViewed = useLearningStore((state) => state.markInfographicViewed);

  // ✅ Memoize filtered data to prevent infinite loops
  const videos = useMemo(
    () => videosStore.filter((v) => v.topic === topic),
    [videosStore, topic]
  );

  const infographics = useMemo(
    () => infographicsStore.filter((i) => i.topic === topic),
    [infographicsStore, topic]
  );

  const quizzes = useMemo(
    () => quizzesStore.filter((q) => q.topic === topic),
    [quizzesStore, topic]
  );

  // ✅ Dynamic progress calculation
  const allItems = [...videos, ...infographics, ...quizzes];
  const totalItems = allItems.length;
  const completedItems = allItems.filter((item) => item.isViewed).length;
  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  // Video card
  const renderVideo = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        markVideoViewed(item.id);
        navigation.navigate('Veiwvideo', { videos, currentIndex: index });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <Text style={styles.cardDuration}>{item.duration}</Text>
      <View style={[styles.viewBtn, item.isViewed && styles.completedBtn]}>
        <Text style={[styles.viewText, item.isViewed && styles.completedText]}>
          {item.isViewed ? 'Completed' : 'View'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Infographic card
  const renderInfographic = ({ item }) => (
    <View style={styles.infoCard}>
      <Image source={{ uri: item.image }} style={styles.infoImage} />
      <View style={styles.infoTextContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <TouchableOpacity
          style={[styles.viewBtn, item.isViewed && styles.completedBtn]}
          onPress={() => {
            markInfographicViewed(item.id);
            navigation.navigate('Infographics', { infographic: item });
          }}
        >
          <Text style={[styles.viewText, item.isViewed && styles.completedText]}>
            {item.isViewed ? 'Completed' : 'View'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Quiz card
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
          <Text style={styles.headerTitle}>{topic.toUpperCase()} Module</Text>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <Text style={styles.progressText}>
            Completed percentage: {progress.toFixed(0)}%
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
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
