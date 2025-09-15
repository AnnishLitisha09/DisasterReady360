import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { moderateScale } from '../../utils/scalingUtils';
import { EventCard, LearningModuleCard, PracticeModuleCard } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { getAuthData } from '../../store/authStorage';
import { Addicon, PersonIcon } from '../../assets/icons';


export const Dashboard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('User');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [role, setRole] = useState<string>('student'); // default to student

  useEffect(() => {
    const fetchData = async () => {
      const authData = await getAuthData();
      if (authData?.name) setName(authData.name);
      if (authData?.avatar) setAvatar(authData.avatar);
      if (authData?.role) setRole(authData.role);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hey {name}!</Text>

          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image
              source={{
                uri: avatar
                  ? avatar
                  : "https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg",
              }}
              style={styles.logo}
              resizeMode="cover"
            />
          </TouchableOpacity>

          {/* White Container */}
          <View style={styles.achievementsBox}>
            <Text style={styles.achievementsTitle}>
              {role === 'teacher' ? 'OVERALL STUDENT PROGRESS' : 'ACHIEVEMENTS'}
            </Text>

            {/* Student View */}
            {role === 'student' && (
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
            )}

            {/* Teacher View */}
            {role === 'teacher' && (
              <View style={{ padding: moderateScale(10) }}>
                <Text style={{ fontSize: moderateScale(16), color: '#333', marginBottom: moderateScale(10) }}>
                  School Average: 85%
                </Text>

                <View
                  style={{
                    height: moderateScale(12),
                    width: '100%',
                    backgroundColor: '#E0E0E0',
                    borderRadius: moderateScale(6),
                    overflow: 'hidden',
                  }}
                >
                  <View
                    style={{
                      height: '100%',
                      width: '85%',
                      backgroundColor: '#FB5E2C',
                      borderRadius: moderateScale(6),
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Learning & Practice Sections for Students */}
        {role === 'student' && (
          <View style={styles.learningWrapper}>
            <View style={styles.learningHeader}>
              <Text style={styles.learningText}>Learning</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>
            <View style={styles.modulesContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LearningModuleCard
                  title="Earthquake"
                  imageUrl="https://cdn-icons-png.flaticon.com/512/854/854929.png"
                  progress={65}
                  onPress={() => navigation.navigate('Learningmodules', { topic: 'earthquake' })}
                />
                <LearningModuleCard
                  title="Fire"
                  imageUrl="https://t3.ftcdn.net/jpg/02/35/26/30/360_F_235263034_miJw2igmixo7ymCqhHZ7c8wp9kaujzfM.jpg"
                  progress={40}
                  onPress={() => navigation.navigate('Learningmodules', { topic: 'fire' })}
                />
                <LearningModuleCard
                  title="Flood"
                  imageUrl="https://cdn-icons-png.flaticon.com/512/3439/3439089.png"
                  progress={80}
                  onPress={() => navigation.navigate('Learningmodules', { topic: 'flood' })}
                />
                <LearningModuleCard
                  title="Cyclone"
                  imageUrl="https://www.shutterstock.com/image-vector/icon-tornadoes-linear-flat-style-600nw-552867940.jpg"
                  progress={55}
                  onPress={() => navigation.navigate('Learningmodules', { topic: 'cyclone' })}
                />
              </ScrollView>
            </View>

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
        )}

        {/* Teacher Quick Action */}
        {role === 'teacher' && (
          <View style={styles.learningWrapper}>
            <View style={[styles.learningHeader, { justifyContent: 'space-between', alignItems: 'center' }]}>
              <Text style={styles.learningText}>Quick Actions</Text>

              <TouchableOpacity
                style={styles.teacherQuickActionCard}
                onPress={() => navigation.navigate('LeaderboardPage')}
              >
                <Image
                  source={require('../../assets/images/rank.png')}
                  style={styles.teacherQuickActionIcon}
                />
                <Text style={styles.teacherQuickActionText}>Leaderboard</Text>
              </TouchableOpacity>
            </View>

            {/* Two Buttons in a row */}
            <View style={styles.teacherButtonsRow}>
             <TouchableOpacity 
  style={styles.teacherButton} 
  onPress={() => navigation.navigate("AssignDrillScreen")}
>
  <Addicon width={25} height={24} />
  <Text style={styles.teacherButtonText}>Assign New Drill</Text>
</TouchableOpacity>


              <TouchableOpacity style={styles.teacherButton} onPress={() => navigation.navigate("ViewStudentsAccount")}>
                 <PersonIcon/>
                <Text style={styles.teacherButtonText}>View Student’s Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.learningHeader1}>
              <View>
                <Text style={styles.learningText}>UPCOMMING DRILLS</Text>
              </View>
              <View>
                <Text style={styles.viewAll}>View all</Text>
              </View>
            </View>
            <View>
              <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
               <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
                <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
                 <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
                  <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
                   <EventCard title={'Earthquake'} totalJoined={0} venue={' bit auditorium'} type={'Level 1 '} time={'12:00'} buttonOption={'editDelete'} date={'16-09-2025'} />
            </View>
          </View>
          
        )}

      </ScrollView>

      {role === 'student' && (
        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => navigation.navigate('SosScreen')}
        >
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
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
  greeting: { color: '#fff', fontSize: moderateScale(30), fontWeight: 'bold' },
  logo: { width: moderateScale(70), height: moderateScale(70), borderRadius: moderateScale(50) },
  achievementsBox: {
    position: 'absolute',
    bottom: moderateScale(-55),
    left: '60%',
    transform: [{ translateX: -moderateScale(177.5) }],
    width: moderateScale(322),
    backgroundColor: '#fff',
    borderRadius: moderateScale(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    padding: moderateScale(15),
  },
  modulesContainer: { height: moderateScale(180) },
  achievementsTitle: { fontSize: moderateScale(18), fontWeight: '700', color: '#000', marginBottom: moderateScale(15) },
  achievementsRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  item: { alignItems: 'center' },
  icon: { width: moderateScale(50), height: moderateScale(50), marginBottom: moderateScale(5) },
  infoText: { fontSize: moderateScale(14), fontWeight: '500', color: '#333', textAlign: 'center' },
  learningWrapper: { marginTop: moderateScale(70), paddingHorizontal: moderateScale(20), },
  learningHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(15), marginTop: moderateScale(10) },
  learningHeader1:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(15), marginTop: moderateScale(25)},
  learningText: { fontSize: moderateScale(20), fontWeight: '700', color: '#000' },
  viewAll: { fontSize: moderateScale(14), fontWeight: '600', color: '#E35B33' },
  teacherQuickActionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(10),
    width: moderateScale(128),
    height: moderateScale(35),
    borderRadius: moderateScale(15),
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  teacherQuickActionIcon: { width: moderateScale(20), height: moderateScale(20), marginRight: moderateScale(5) },
  teacherQuickActionText: { fontSize: moderateScale(14), fontWeight: '700', color: '#000' },
  teacherButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(15),
  },
  teacherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E35B33',
    width: moderateScale(172),
    height: moderateScale(57),
    borderRadius: moderateScale(20),
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: moderateScale(10),
    gap:moderateScale(6)
  },
  teacherButtonIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(8),
  },
  teacherButtonText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: 'white',
  },
  sosButton: { position: 'absolute', bottom: moderateScale(30), right: moderateScale(20), backgroundColor: 'red', width: moderateScale(60), height: moderateScale(60), borderRadius: moderateScale(30), justifyContent: 'center', alignItems: 'center', elevation: 6, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 4 },
  sosText: { color: '#fff', fontWeight: 'bold', fontSize: moderateScale(18) },
}); 