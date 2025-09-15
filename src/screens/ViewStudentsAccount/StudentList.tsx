import React from 'react';
import { FlatList } from 'react-native';
import { StudentCard } from '../../components/StudentCard';

type Student = {
  name: string;
  email: string;
  level: string;
};

type StudentListProps = {
  students: Student[];
};

export const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <FlatList
      data={students}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <StudentCard name={item.name} email={item.email} level={item.level} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
