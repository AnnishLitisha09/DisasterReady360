import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { StudentCard } from '../../components/StudentCard';
import { SearchBar } from '../../components/SearchBar';
import { moderateScale } from '../../utils/scalingUtils';

const students = [
  { name: 'Annish Litisha', email: 'jonnishlitisha@gmail.com', level: 'Level - 1' },
  { name: 'Annish Litisha', email: 'jonnishlitisha@gmail.com', level: 'Level - 1' },
  { name: 'Annish Litisha', email: 'jonnishlitisha@gmail.com', level: 'Level - 1' },
  { name: 'Annish Litisha', email: 'jonnishlitisha@gmail.com', level: 'Level - 1' },
  { name: 'Annish Litisha', email: 'jonnishlitisha@gmail.com', level: 'Level - 1' },
];

export const ViewStudentsAccount = () => {
  const [search, setSearch] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>View Student's Account</Text>
      </View>

      {/* Search Bar */}
      <SearchBar value={search} onChangeText={setSearch} />

      {/* Student List */}
      {filteredStudents.length > 0 ? (
        <FlatList
          data={filteredStudents}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <StudentCard
              name={item.name}
              email={item.email}
              level={item.level}
              onPress={() => console.log('View pressed for', item.name)}
            />
          )}
        />
      ) : (
        <View style={styles.noResult}>
          <Text style={styles.noResultText}>No students found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#E35B33',
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(20),
    borderBottomLeftRadius: moderateScale(80),
    borderBottomRightRadius: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#FFF',
  },
  noResult: {
    marginTop: moderateScale(40),
    alignItems: 'center',
  },
  noResultText: {
    fontSize: moderateScale(16),
    color: '#888',
  },
});
