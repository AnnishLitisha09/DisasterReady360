import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CurvedHeader } from '../../../components';

export const ReviewScreen = () => {
  const route = useRoute();

  const { quizData, answers } = route.params as {
    quizData: any[];
    answers: { [key: number]: string };
  };

  const correctCount = quizData.reduce((count, q, idx) => {
    if (answers[idx] && answers[idx] === q.answer) {return count + 1;}
    return count;
  }, 0);

  return (
    <SafeAreaView style={styles.container}>
      <CurvedHeader title="Review Answers" />

      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>
          Score: {correctCount} / {quizData.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {quizData.map((q, index) => {
          const selected = answers[index];
          const correct = q.answer;
          const isUnanswered = !selected;

          return (
            <View key={index} style={styles.questionBlock}>
              {isUnanswered && (
                <Text style={styles.unansweredLabel}>Unanswered</Text>
              )}

              <Text style={styles.questionText}>
                {index + 1}. {q.question}
              </Text>

              {q.options.map((option: string, idx: number) => {
                const isSelected = option === selected;
                const isCorrect = option === correct;

                let optionStyle = styles.option;
                if (isCorrect) {optionStyle = styles.correctOption;}
                if (isSelected && !isCorrect) {optionStyle = styles.wrongOption;}

                return (
                  <Text key={idx} style={optionStyle}>
                    {option}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9ff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6e6bcf',
    paddingHorizontal: 16,
    paddingVertical: 14,
    elevation: 4,
  },
  backButton: {
    marginRight: 12,
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  summaryCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#6e6bcf',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d3748',
  },

  scrollContainer: { padding: 16, paddingTop: 0 },

  questionBlock: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 12,
    borderRadius: 10,
    elevation: 2,
    position: 'relative', // needed for badge
  },
  unansweredLabel: {
    position: 'absolute',
    right: 8,
    top: 4,
    fontSize: 12,
    color: '#f97316',
    fontWeight: '700',
    backgroundColor: '#ffedd5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color:'black',
  },
  option: {
    fontSize: 14,
    paddingVertical: 4,
    paddingLeft: 8,
    marginBottom: 4,
    color:'black',
  },
  correctOption: {
    fontSize: 14,
    paddingVertical: 4,
    paddingLeft: 8,
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: 6,
    marginBottom: 4,
  },
  wrongOption: {
    fontSize: 14,
    paddingVertical: 4,
    paddingLeft: 8,
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: 6,
    marginBottom: 4,
  },
});
