'use client';

import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { CurvedHeader } from '../../components';
import { moderateScale } from '../../utils/scalingUtils';

const { width, height } = Dimensions.get('window');

const leaderboardData = [
  { name: 'Litisha', points: 2569, rank: 1 },
  { name: 'Alena Donin', points: 1469, rank: 2 },
  { name: 'Craig Gouse', points: 1053, rank: 3 },
  { name: 'Madelyn Dias', points: 590, rank: 4 },
  { name: 'Zain Vaccaro', points: 448, rank: 5 },
  { name: 'Skylar Geidt', points: 448, rank: 6 },
  { name: 'Justin Bator', points: 400, rank: 7 },
    { name: 'Litisha', points: 2569, rank: 8 },
  { name: 'Alena Donin', points: 1469, rank: 9 },
  { name: 'Craig Gouse', points: 1053, rank: 10 },
  { name: 'Madelyn Dias', points: 590, rank: 11 },
  { name: 'Zain Vaccaro', points: 448, rank: 12 },
  { name: 'Skylar Geidt', points: 448, rank: 13 },
  { name: 'Justin Bator', points: 400, rank: 14 },
];

export const LeaderboardPage = () => {
  const renderItem = ({ item }) => {
    if (item.rank <= 3) return null; // hide top 3 from list

    return (
      <View style={styles.listItem}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: moderateScale(18) }}>👤</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.points}>{item.points} points</Text>
        </View>
        <Text style={styles.rank}>{item.rank}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CurvedHeader title="LeaderBoard" onBackPress={() => console.log('Back pressed')} />

      {/* Fixed Podium Section */}
      <View style={styles.podiumContainer}>
        {/* 2nd place */}
        <View style={[styles.podiumPerson, { left: width * 0.17, top: height * 0.09 }]}>
          <Image source={require('../../assets/images/person.png')} style={styles.podiumAvatar} />
          <Text style={styles.podiumName}>{leaderboardData[1].name}</Text>
        </View>

        {/* 1st place */}
        <View style={[styles.podiumPerson, { left: width / 2 - moderateScale(20), top: height * 0.03 }]}>
          <Text style={styles.crown}>👑</Text>
          <Image source={require('../../assets/images/person.png')} style={styles.podiumAvatar} />
          <Text style={styles.podiumName}>{leaderboardData[0].name}</Text>
        </View>

        {/* 3rd place */}
        <View style={[styles.podiumPerson, { right: width * 0.16, top: height * 0.13 }]}>
          <Image source={require('../../assets/images/person.png')} style={styles.podiumAvatar} />
          <Text style={styles.podiumName}>{leaderboardData[2].name}</Text>
        </View>

        {/* Podium background */}
        <Image source={require('../../assets/images/Podium.png')} style={styles.podiumImage} />
      </View>

      {/* Scrollable List */}
      <View style={styles.listContainer}>
        <FlatList
          data={leaderboardData}
          renderItem={renderItem}
          keyExtractor={(item) => item.rank.toString()}
          contentContainerStyle={{ padding: moderateScale(15), paddingBottom: moderateScale(40) }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    height: height * 0.35,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  podiumPerson: {
    position: 'absolute',
    alignItems: 'center',
  },
  podiumAvatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  crown: {
    fontSize: moderateScale(24),
    position: 'absolute',
    top: moderateScale(-20),
  },
  podiumName: {
    fontWeight: 'bold',
    marginTop: moderateScale(5),
    color: '#333',
    fontSize: moderateScale(12),
  },
  podiumImage: {
    position: 'absolute',
    top: height * 0.13,
    bottom: 0,
    width: width,
    resizeMode: 'contain',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#ffe5e0',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
    marginVertical: moderateScale(6),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: moderateScale(3),
    elevation: 2,
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  userName: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  points: {
    color: 'gray',
    fontSize: moderateScale(14),
  },
  rank: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: '#888',
  },
});
