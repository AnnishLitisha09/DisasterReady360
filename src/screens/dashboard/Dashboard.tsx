import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from '../../utils/scalingUtils'
import { LearningModuleCard, PracticeModuleCard } from '../../components'
import { useNavigation } from '@react-navigation/native';
import SosScreen from '../SosScreen/SosScreen';

export const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Orange Header */}
        <View style={styles.header}>
          {/* Greeting and Profile */}
          <Text style={styles.greeting}>Hey Aswath!</Text>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/a/ACg8ocJUDVcUKiE7vKDEZiBiHdfVkEa8dPU1vioE9hyLdZMQevYJ-eoK=s192-c',
            }}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* White Container with Achievements */}
          <View style={styles.achievementsBox}>
            <Text style={styles.achievementsTitle}>ACHIEVEMENTS</Text>

            {/* Achievements Row */}
            <View style={styles.achievementsRow}>
              <View style={styles.item}>
                <Image source={require('../../assets/images/badge.png')} style={styles.icon} />
                <Text style={styles.infoText}>3 Badges</Text>
              </View>

              <View style={styles.item}>
                <Image source={require('../../assets/images/rank.png')} style={styles.icon} />
                <Text style={styles.infoText}>300 Points</Text>
              </View>

              <View style={styles.item}>
                <Image source={require('../../assets/images/star.png')} style={styles.icon} />
                <Text style={styles.infoText}>1st Rank</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Learning Section */}
        <View style={styles.learningWrapper}>
          <View style={styles.learningHeader}>
            <Text style={styles.learningText}>Learning</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          {/* Horizontal Scroll for Modules */}
          <View style={styles.modulesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <LearningModuleCard
                title="React"
                imageUrl="https://reactnative.dev/img/tiny_logo.png"
                progress={65}
              />
              <LearningModuleCard
                title="Node.js"
                imageUrl="https://nodejs.org/static/images/logo.svg"
                progress={40}
              />
              <LearningModuleCard
                title="Python"
                imageUrl="https://www.python.org/static/community_logos/python-logo.png"
                progress={80}
              />
              <LearningModuleCard
                title="Java"
                imageUrl="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                progress={55}
              />
            </ScrollView>
          </View>

          {/* Practice Section */}
          <View style={styles.learningHeader}>
            <Text style={styles.learningText}>Practice</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <PracticeModuleCard
            title="Earthquake Drill"
            time="10:00 AM - 11:00 AM"
            venue="Main Auditorium"
            imageUrl="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            onJoin={() => Alert.alert('Joined Earthquake Drill!')}
          />
          <PracticeModuleCard
            title="Fire Safety Drill"
            time="2:00 PM - 3:00 PM"
            venue="Block A - Ground Floor"
            imageUrl="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg"
            onJoin={() => Alert.alert('Joined Fire Safety Drill!')}
          />
          <PracticeModuleCard
            title="Flood Safety Awareness"
            time="4:00 PM - 5:00 PM"
            venue="Community Hall"
            imageUrl="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg"
            onJoin={() => Alert.alert('Joined Flood Safety Awareness!')}
          />
        </View>
      </ScrollView>

      {/* Floating SOS Button */}
      <TouchableOpacity
        style={styles.sosButton}
       onPress={() => navigation.navigate('SosScreen')}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    width: '100%',
    height: 274,
    backgroundColor: '#E35B33',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    borderBottomLeftRadius: moderateScale(70),
    borderBottomRightRadius: moderateScale(70),
    position: 'relative',
  },
  greeting: {
    color: '#fff',
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(50),
  },
  achievementsBox: {
    position: 'absolute',
    bottom: moderateScale(-85),
    left: '55%',
    transform: [{ translateX: -moderateScale(177.5) }],
    width: moderateScale(355),
    backgroundColor: '#fff',
    borderRadius: moderateScale(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    padding: moderateScale(15),
  },
  modulesContainer: {
    height: moderateScale(180),
  },
  achievementsTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000',
    marginBottom: moderateScale(15),
  },
  achievementsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginBottom: moderateScale(5),
  },
  infoText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  learningWrapper: {
    marginTop: moderateScale(100),
    paddingHorizontal: moderateScale(20),
  },
  learningHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(15),
    marginTop: moderateScale(10),
  },
  learningText: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: '#000',
  },
  viewAll: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#E35B33',
  },
  sosButton: {
    position: 'absolute',
    bottom: moderateScale(30),
    right: moderateScale(20),
    backgroundColor: 'red',
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sosText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
})
