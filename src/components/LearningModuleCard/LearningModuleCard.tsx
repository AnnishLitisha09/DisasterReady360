import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from '../../utils/scalingUtils'

export const LearningModuleCard = ({ title, imageUrl, progress }) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Image */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Percentage Text */}
      <Text style={styles.progressText}>{progress}%</Text>

      {/* Progress Bar */}
      <View style={styles.progressWrapper}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: moderateScale(130),
    height: moderateScale(174),
    backgroundColor: '#FFF',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation:4,
    padding: moderateScale(10),
    marginRight: moderateScale(20)

  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#333',
    marginBottom: moderateScale(5),
    textAlign: 'center',
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginBottom: moderateScale(8),
    borderRadius: moderateScale(50),
  },
  progressText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#333',
    marginBottom: moderateScale(5),
  },
  progressWrapper: {
    width: '100%',
    height: moderateScale(8),
    backgroundColor: '#eee',
    borderRadius: moderateScale(5),
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#E35B33', // Orange color
  },
})
