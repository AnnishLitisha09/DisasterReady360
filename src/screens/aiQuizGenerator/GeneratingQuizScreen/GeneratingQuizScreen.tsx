import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import GenerateQuizIcon from '../../../assets/icons/generateQuizIcon';

export const GeneratingQuizScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { topic, quizId, studentId, name } = route.params || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topic) {
      generateQuiz(topic);
    } else {
      console.warn('⚠️ No topic provided!');
    }
  }, [topic]);
const OPENAI_API_KEY =
  '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';

    const fetchWithRetry = async (url: string, options: any, retries = 3, delay = 2000) => {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url, options);

      if (response.status === 429) {
        console.warn(`⚠️ Rate limited. Retrying in ${delay / 1000}s...`);
        await new Promise(res => setTimeout(res, delay));
        delay *= 2; // exponential backoff
        continue;
      }

      return response;
    }
    throw new Error('❌ Too many requests. Try again later.');
  };

  const generateQuiz = async (trimmedText: string) => {
    try {
      setLoading(true);
      console.log('▶️ Generating quiz for:', trimmedText);

    const response = await fetchWithRetry('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'user',
              content: `Respond ONLY with a JSON array of 20 MCQs for ${trimmedText} for school children in this format (no text before or after):
[
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Berlin", "Rome"],
    "answer": "Paris"
  }
]`,
            },
          ],
          temperature: 0.7,
        }),
      });

      console.log('✅ API status code:', response.status);

      const data = await response.json();
      let content = data.choices?.[0]?.message?.content || '[]';

      // Cleanup formatting
      content = content.trim();
      if (content.startsWith("Here's") || content.startsWith('```')) {
        const startIndex = content.indexOf('[');
        const endIndex = content.lastIndexOf(']') + 1;
        content = content.substring(startIndex, endIndex);
      }
      content = content.replace(/```json|```/g, '').trim();

      let quizData = [];
      try {
        quizData = JSON.parse(content);
      } catch (e) {
        console.error('❌ JSON parsing failed:', e);
        Alert.alert('Error', 'Invalid response format. Try again.');
        navigation.goBack();
        return;
      }

      // ✅ Navigate only after quizData is ready
      navigation.replace('Quiz', {
        quizData,
        quizId,
        studentId,
        name,
      });
    } catch (error) {
      console.error('❌ Error generating quiz:', error);
      Alert.alert('Error', 'Failed to generate quiz. Please try again.');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <GenerateQuizIcon style={styles.icon} />
        <Text style={styles.title}>Generating your{'\n'}Quiz...</Text>
        <Text style={styles.subtitle}>
          The process may take a few seconds{'\n'}
        </Text>
        {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}
      </View>
    </SafeAreaView>
  );
};
