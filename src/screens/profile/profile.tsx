import React from "react";
import { View } from "react-native";
import { StudentProfileScreen } from "./StudentProfileScreen";
import { TeacherProfileScreen } from "./TeacherProfileScreen";
import { ParentProfileScreen } from "./ParentProfileScreen";
import { CommunityProfileScreen } from "./CommunityProfileScreen";

type User = {
  role: "Student" | "Teacher" | "Parent" | "Community";
  name?: string;
  email?: string;
  extra?: string; // childName, communityName, etc.
};

export const Profile: React.FC = () => {
  
  const user: User = {
    role: "Student", // change to "Teacher" | "Parent" | "Community" for testing
    name: "John Doe",
    email: "john.doe@email.com",
    extra: "Extra Info", // childName / communityName depending on role
  };

  switch (user.role) {
    case "Student":
      return (
        <StudentProfileScreen
          route={{ params: { name: user.name, email: user.email } }}
        />
      );
    case "Teacher":
      return (
        <TeacherProfileScreen
          route={{ params: { name: user.name, email: user.email } }}
        />
      );
    case "Parent":
      return (
        <ParentProfileScreen
          route={{
            params: { name: user.name, email: user.email, childName: user.extra },
          }}
        />
      );
    case "Community":
      return (
        <CommunityProfileScreen
          route={{
            params: {
              name: user.name,
              email: user.email,
              communityName: user.extra,
            },
          }}
        />
      );
    default:
      return <View />;
  }
};
