import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from '../../utils/scalingUtils'

type LearningModuleCardProps = {
  title: string
  imageUrl: string
  progress: number
  onPress: () => void
  bannerText?: string   // 🔥 optional
  disabled?: boolean    // 🔥 optional disable
}

export const LearningModuleCard: React.FC<LearningModuleCardProps> = ({
  title,
  imageUrl,
  progress,
  onPress,
  bannerText,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabledCard]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled} // disables touch
    >
      {/* Optional Banner */}
      {bannerText ? (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>{bannerText}</Text>
        </View>
      ) : null}

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
    </TouchableOpacity>
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
    elevation: 4,
    padding: moderateScale(10),
    marginRight: moderateScale(20),
    position: 'relative', // needed for absolute banner
  },
  disabledCard: {
    opacity: 0.5, // visual feedback for disabled
  },
  banner: {
    position: 'absolute',
    top: moderateScale(8),
    right: moderateScale(8),
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(6),
  },
  bannerText: {
    color: 'red',
    fontSize: moderateScale(10),
    fontWeight: '700',
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#333',
    marginBottom: moderateScale(5),
    textAlign: 'center',
    marginTop: moderateScale(10),
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
