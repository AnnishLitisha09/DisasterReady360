import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../../../config/apiConfig';

export const QuizCompletionScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { score, total, name, quizData, answers, quizId, studentId } = route.params as {
  score: number;
  total: number;
  name: string;
  quizData: any[];
  answers: { [key: number]: string };
  quizId: number;
  studentId: number;
};

useEffect(() => {
  const updateProgress = async () => {
    if (!studentId) {
      console.log(studentId);
      Alert.alert('Error', 'Student ID not found.');
      return;
    }

    const payload = {
      quiz_id: quizId,
      points: score * 20,
      isViewed: true,
    };

    const curlCommand = `
      curl -X POST \\
        ${API_BASE_URL}/update-quiz-progress/${studentId} \\
        -H "Content-Type: application/json" \\
        -d '${JSON.stringify(payload)}'
    `;
    console.log('CURL Request:\n', curlCommand);

    try {
      const res = await fetch(`${API_BASE_URL}/update-quiz-progress/${studentId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const rawText = await res.text();
        throw new Error(`Server error: ${res.status}\n${rawText}`);
      }

      const data = await res.json();
      console.log('✅ Progress updated:', data);

      // TODO: mark quiz completed in Zustand if needed
    } catch (err) {
      console.error('❌ Error marking quiz completed:', err);
      Alert.alert('Error', 'Failed to update quiz progress.');
    }
  };

  updateProgress();
}, []);

  const handleBackToHome = () => navigation.navigate('Dashboard');

  const handleReview = () => {
  navigation.navigate('ReviewScreen', { quizData, answers });
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWave} />
      <Text style={styles.header}>quiz</Text>

      <View style={styles.scoreCircle}>
        <Text style={styles.scoreLabel}>Your Score</Text>
        <Text style={styles.scoreValue}>{score}/{total}</Text>
      </View>

      <Text style={styles.congrats}>Congratulation</Text>
      <Text style={styles.message}>Great job, {name}! You Did It</Text>

      <TouchableOpacity style={styles.homeButton} onPress={handleBackToHome}>
        <Text style={styles.homeButtonText}>Back To Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reviewButton} onPress={handleReview}>
        <Text style={styles.reviewButtonText}>Review Answers</Text>
      </TouchableOpacity>

      <View style={styles.bottomWave} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f1fc', alignItems: 'center', paddingTop: 20 },
  topWave: { position: 'absolute', top: 0, width: '100%', height: 140, backgroundColor: '#E4572E', borderBottomLeftRadius: 100, borderBottomRightRadius: 100 },
  bottomWave: { position: 'absolute', bottom: 0, width: '100%', height: 120, backgroundColor: '#E4572E', borderTopLeftRadius: 100, borderTopRightRadius: 100 },
  header: { fontSize: 18, fontWeight: '600', color: '#fff', marginTop: 20 },
  scoreCircle: {
    marginTop: 50,
    backgroundColor: '#E4572E',
    borderRadius: 100,
    padding: 30,
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#e8ac9eff',
  },
  scoreLabel: { color: '#fff', fontSize: 16 },
  scoreValue: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 6 },
  congrats: { marginTop: 30, fontSize: 20, color: '#E4572E', fontWeight: '600' },
  message: { fontSize: 14, color: '#e74a1bff', marginTop: 8 },

  homeButton: {
    marginTop: 30,
    backgroundColor: '#E4572E',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  homeButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

  reviewButton: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderColor: '#E4572E',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  reviewButtonText: {
    color: '#E4572E',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
