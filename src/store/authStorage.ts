// store/authStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'AUTH_DATA';

// Define type for student/teacher data
export interface AuthData {
  token?: string;
  role: string;
  role_id: number;
  user_id: number;
  email: string;
  name?: string;
  avatar?: string | null;
  student_id?: number;
  institute_id?: number;
  institute_name?: string;
  address?: string;
  rank?: number;
  badge?: number;
  total_avg?: number;
  student_level?: number;
}

export const saveAuthData = async (data: AuthData) => {
  try {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving auth data:', error);
  }
};

export const getAuthData = async (): Promise<AuthData | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(AUTH_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting auth data:', error);
    return null;
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Error clearing auth data:', error);
  }
};
