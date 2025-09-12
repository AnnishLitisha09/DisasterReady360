// src/components/PracticeModuleCard.js
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { moderateScale } from '../../utils/scalingUtils'

export const PracticeModuleCard = ({ title, time, venue, imageUrl, onJoin }) => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.card}
      imageStyle={styles.imageBackground}
    >
      <View style={styles.content}>
        {/* Left side - Title, Time, Venue */}
        <View style={styles.leftContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>{time}</Text>
          <Text style={styles.details}>{venue}</Text>
        </View>

        {/* Right side - Join button */}
        <TouchableOpacity style={styles.joinButton} onPress={onJoin}>
          <Text style={styles.joinText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  card: {
    width: moderateScale(355),
    height: moderateScale(122),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginBottom: moderateScale(15),
  },
  imageBackground: {
    borderRadius: moderateScale(20),
    // opacity: 0.1, // 100% opacity
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // light overlay for readability
    borderRadius: moderateScale(20),
  },
  leftContent: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000',
    marginBottom: moderateScale(5),
  },
  details: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#333',
  },
  joinButton: {
    alignSelf: 'center',
    backgroundColor: '#E35B33',
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  joinText: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
})
