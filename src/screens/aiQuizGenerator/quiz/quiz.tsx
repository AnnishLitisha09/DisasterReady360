import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { styles } from './styles';
import {
  BackgroundBlob,
  CustomButton,
  RadioButton,
} from '../../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CloseIcon } from '../../../assets/icons/Closeicon';

export const Quiz: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
const { quizData, quizId, studentId, name } = route.params as {
  quizData: any[];
  quizId: string | number;
  studentId: string | number;
  name: string;
};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const question = quizData?.[currentQuestion];
  const selectedAnswer = answers[currentQuestion] || '';

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    setShowCancelModal(true);
  };

  const cancelQuiz = () => {
    setShowCancelModal(false);
    navigation.goBack();
  };

  const saveScoreAndFinish = async () => {
    const total = quizData.length;
    const correct = Object.entries(answers).filter(
      ([index, answer]) => quizData[parseInt(index)].answer === answer
    ).length;

    const result = {
      score: correct,
      total,
      date: new Date().toISOString(),
      answers,
      quizData,
      name: 'Learner',
    };

    try {
      const quizId = route.params.quizId || `quiz-${Date.now()}`;

      const existingAttempts = await AsyncStorage.getItem('attemptedQuizzes');
      const parsedAttempts = existingAttempts ? JSON.parse(existingAttempts) : {};
      parsedAttempts[quizId] = result;
      await AsyncStorage.setItem('attemptedQuizzes', JSON.stringify(parsedAttempts));

      const existingHistory = await AsyncStorage.getItem('quizHistory');
      const parsedHistory = existingHistory ? JSON.parse(existingHistory) : [];
      parsedHistory.push({ ...result, quizId });
      await AsyncStorage.setItem('quizHistory', JSON.stringify(parsedHistory));

      navigation.replace('QuizCompletionScreen', {
        score: correct,
        total,
        name,
        quizData,
        answers,
        quizId, studentId,
      });
    } catch (err) {
      console.error('Saving score failed:', err);
    }
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.questionText}>No quiz data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackgroundBlob />

      {/* Curved Header without top gap */}
      <View
        style={{
          backgroundColor: '#E35B33',
          paddingTop: 20,   // 🔥 no big top gap
          paddingBottom: 40,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between'}}>
          {/* Close Button */}
          <TouchableOpacity onPress={handleClose} style={{ marginRight: 15 }}>
            <CloseIcon width={28} height={28} color="white" />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Quiz
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            {currentQuestion + 1}/{quizData.length}
          </Text>
        </View>
      </View>

      {/* Question Card */}
      <View style={styles.card}>
        <Text style={styles.questionText}>{question.question}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((label: string, idx: number) => (
            <RadioButton
              key={idx}
              selected={selectedAnswer === label}
              onPress={() => handleAnswer(label)}
              label={label}
            />
          ))}
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigation}>
        <CustomButton
          title="Previous"
          width={160}
          onPress={handlePrevious}
        />
        <CustomButton
          title={currentQuestion === quizData.length - 1 ? 'Submit' : 'Next'}
          width={160}
          onPress={handleNext}
        />
      </View>

      {/* Submit Modal */}
      <Modal visible={showSubmitModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Are you sure you want to end the test?
            </Text>
            <Text style={styles.modalSummary}>
              You have answered {Object.keys(answers).length} out of {quizData.length} questions.
            </Text>
            <Text style={styles.modalWarning}>
              Once you submit, you won't be able to go back and make any changes.
            </Text>
            <View style={styles.modalButtons}>
              <CustomButton
                title="Go Back"
                width={120}
                onPress={() => setShowSubmitModal(false)}
              />
              <CustomButton
                title="End Test"
                width={120}
                onPress={saveScoreAndFinish}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancel Modal */}
      <Modal visible={showCancelModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Are you sure you want to exit the quiz?
            </Text>
            <Text style={styles.modalWarning}>
              Your progress will be lost and cannot be recovered.
            </Text>
            <View style={styles.modalButtons}>
              <CustomButton
                title="Stay"
                width={120}
                onPress={() => setShowCancelModal(false)}
              />
              <CustomButton
                title="Exit"
                width={120}
                onPress={cancelQuiz}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
