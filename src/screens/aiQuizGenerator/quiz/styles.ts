import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
    paddingTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#E4572E',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 24,
    marginHorizontal: 10,
    marginVertical: 100,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginVertical: 32,
  },
  modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
modalContent: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 24,
  width: '100%',
  maxWidth: 360,
  alignItems: 'center',
},
modalTitle: {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: 12,
  color: '#000',
},
modalSummary: {
  fontSize: 16,
  fontWeight: '500',
  textAlign: 'center',
  marginBottom: 12,
  color: '#333',
},
modalWarning: {
  fontSize: 14,
  color: '#888',
  textAlign: 'center',
  marginBottom: 24,
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  gap: 12,
},
  modalText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 24,
    textAlign: 'center',
  },
});
