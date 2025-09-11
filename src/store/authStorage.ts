import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'AUTH_DATA';

export const saveAuthData = async (data: {
  token: string;
  role: string;
  user_id: number;
  email: string;
}) => {
  try {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving auth data:', error);
  }
};

export const getAuthData = async () => {
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
