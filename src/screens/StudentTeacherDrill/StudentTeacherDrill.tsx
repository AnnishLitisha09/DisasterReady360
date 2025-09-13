// screens/StudentTeacherDrill.tsx
import React, { useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { moderateScale } from '../../utils/scalingUtils';
import { CurvedHeader, EventCard } from '../../components';

interface Drill {
  id: string;
  title: string;
  totalJoined: number;
  venue: string;
  type: string;
  startTime: Date;
  endTime: Date;
}

// 🔹 Mock drills
const mockDrills: Drill[] = [
  {
    id: '1',
    title: 'Earthquake',
    totalJoined: 4,
    venue: 'bit auditorium',
    type: 'Level 1',
    startTime: new Date(Date.now() - 30 * 60 * 1000), // started 30 min ago
    endTime: new Date(Date.now() + 30 * 60 * 1000),   // ends in 30 min
  },
  {
    id: '2',
    title: 'Fire Safety',
    totalJoined: 6,
    venue: 'main building',
    type: 'Level 2',
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // starts in 2 hours
    endTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
  },
];

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-GB'); // dd/mm/yyyy
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const StudentTeacherDrill: React.FC = () => {
  const now = new Date();

  // 🔹 Separate into current vs upcoming
  const { currentDrills, upcomingDrills } = useMemo(() => {
    const current = mockDrills.filter(
      (drill) => now >= drill.startTime && now <= drill.endTime
    );
    const upcoming = mockDrills.filter((drill) => now < drill.startTime);
    return { currentDrills: current, upcomingDrills: upcoming };
  }, [now]);

  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      {/* Header */}
      <CurvedHeader title="Annish Litisha"  />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(20),
        }}
      >
        {/* Current Drills */}
        {currentDrills.length > 0 && (
          <View style={{ marginBottom: moderateScale(24) }}>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: '700',
                color: '#222',
                marginBottom: moderateScale(12),
              }}
            >
              CURRENT DRILL
            </Text>

            {currentDrills.map((drill) => (
              <EventCard
                key={drill.id}
                title={drill.title}
                totalJoined={drill.totalJoined}
                venue={drill.venue}
                type={drill.type}
                date={formatDate(drill.startTime)}
                time={formatTime(drill.startTime)}
                buttonOption="joinnow"
                onJoin={() => console.log('Joining', drill.id)}
              />
            ))}
          </View>
        )}

        {/* Upcoming Drills */}
        {upcomingDrills.length > 0 && (
          <View style={{ marginBottom: moderateScale(24) }}>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: '700',
                color: '#222',
                marginBottom: moderateScale(12),
              }}
            >
              UPCOMING DRILLS
            </Text>

            {upcomingDrills.map((drill) => (
              <EventCard
                key={drill.id}
                title={drill.title}
                totalJoined={drill.totalJoined}
                venue={drill.venue}
                type={drill.type}
                date={formatDate(drill.startTime)}
                time={formatTime(drill.startTime)}
                buttonOption="none"
              />
            ))}
          </View>
        )}

        {/* If no drills */}
        {currentDrills.length === 0 && upcomingDrills.length === 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(40),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: '600',
                color: '#555',
                marginBottom: moderateScale(8),
              }}
            >
              No Drills Available
            </Text>
            <Text style={{ fontSize: moderateScale(14), color: '#888' }}>
              Please check back later.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

