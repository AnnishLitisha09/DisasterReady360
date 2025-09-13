import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { CheckboxListItem, CurvedHeader, CustomDropdown, DateTimeRow, PrimaryButton } from '../../components';
import { moderateScale } from '../../utils/scalingUtils';

const CustomMultiSelectDropdown = ({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}: {
  label: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (val: string[]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSelection = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const filteredOptions = options.filter((o) => o.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={{ marginVertical: moderateScale(10) }}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          borderWidth: moderateScale(1),
          borderColor: '#ccc',
          borderRadius: moderateScale(10),
          padding: moderateScale(12),
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: moderateScale(14) }}>{label}</Text>
        <Text style={{ color: '#555', marginTop: moderateScale(5), fontSize: moderateScale(13) }}>
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : `Select ${label.toLowerCase()}`}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            marginTop: moderateScale(5),
            borderWidth: moderateScale(1),
            borderColor: '#ccc',
            borderRadius: moderateScale(10),
            backgroundColor: 'white',
            maxHeight: moderateScale(250),
            elevation: 4,
            zIndex: 1000,
          }}
        >
          <View style={{ borderBottomWidth: moderateScale(1), borderColor: '#eee', padding: moderateScale(8), borderRadius: moderateScale(20) }}>
            <TextInput
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              style={{ paddingVertical: moderateScale(6), fontSize: moderateScale(13) }}
            />
          </View>
          
          <ScrollView style={{ maxHeight: moderateScale(200) }}>
            {filteredOptions.map((item) => (
              <CheckboxListItem
                key={item}
                name={item}
                isSelected={selectedOptions.includes(item)}
                onToggle={() => toggleSelection(item)}
              />
            ))}
          </ScrollView>

          <TouchableOpacity
            style={{
              padding: moderateScale(12),
              alignItems: 'center',
              borderTopWidth: moderateScale(1),
              borderColor: '#eee',
              backgroundColor: '#f5f5f5',
            }}
            onPress={() => setIsOpen(false)}
          >
            <Text style={{ fontWeight: '600', color: '#E35B33', fontSize: moderateScale(14) }}>Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export const AssignDrillScreen = () => {
  // Pre-select first values for Drill Type and Level
  const drillOptions = ['Earthquake drill', 'Fire drill', 'Evacuation drill'];
  const levelOptions = ['Level 1', 'Level 2', 'Level 3'];

  const [drillType, setDrillType] = useState<string>(drillOptions[0]);
  const [type, setType] = useState<string>(levelOptions[0]);
  const [assignTo, setAssignTo] = useState<string[]>([]);

  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
  const [pickerTarget, setPickerTarget] = useState<'date' | 'from' | 'to' | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [fromTime, setFromTime] = useState<Date | null>(null);
  const [toTime, setToTime] = useState<Date | null>(null);

  const people = ['Annish', 'Litisha', 'Krithiga', 'Anu', 'Varshini', 'Anni', 'Liti'];

  // Calculate duration dynamically in "HH:MM" format
  const duration =
    fromTime && toTime
      ? (() => {
          let diffMs = toTime.getTime() - fromTime.getTime();
          if (diffMs < 0) {diffMs = 0;} // prevent negative
          const hours = Math.floor(diffMs / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          return `${hours > 0 ? hours + 'h ' : ''}${minutes}m`;
        })()
      : '';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <CurvedHeader title="Assign New Drill" onBackPress={() => console.log('Back pressed')} />

      <ScrollView style={{ flex: 1, padding: moderateScale(20) }}>
        <CustomDropdown
          label="Drill Type"
          value={drillType}
          options={drillOptions}
          onSelect={setDrillType}
        />

        <DateTimeRow
          fields={[
            {
              label: 'Date',
              value: selectedDate ? selectedDate.toDateString() : '',
              onPress: () => {
                setPickerMode('date');
                setPickerTarget('date');
                setShowPicker(true);
              },
            },
            {
              label: 'From',
              value: fromTime ? fromTime.toLocaleTimeString() : '',
              onPress: () => {
                setPickerMode('time');
                setPickerTarget('from');
                setShowPicker(true);
              },
            },
            {
              label: 'To',
              value: toTime ? toTime.toLocaleTimeString() : '',
              onPress: () => {
                setPickerMode('time');
                setPickerTarget('to');
                setShowPicker(true);
              },
            },
            {
              label: 'Duration',
              value: duration,
              onPress: () => console.log('Duration auto-calculated'),
            },
          ]}
        />

        {/* Level */}
        <CustomDropdown
          label="Type"
          value={type}
          options={levelOptions}
          onSelect={setType}
        />

        <CustomMultiSelectDropdown
          label="Assign To"
          options={people}
          selectedOptions={assignTo}
          setSelectedOptions={setAssignTo}
        />
      </ScrollView>

      <PrimaryButton
        title="Assign Drill"
        onPress={() =>
          console.log('Assigned to:', assignTo, 'Date:', selectedDate, 'From:', fromTime, 'To:', toTime)
        }
        disabled={assignTo.length === 0 || !selectedDate || !fromTime || !toTime}
      />

      <DatePicker
        modal
        open={showPicker}
        date={
          pickerTarget === 'from'
            ? fromTime || new Date()
            : pickerTarget === 'to'
            ? toTime || new Date()
            : selectedDate || new Date()
        }
        mode={pickerMode}
        onConfirm={(date) => {
          setShowPicker(false);
          if (pickerTarget === 'date') {setSelectedDate(date);}
          else if (pickerTarget === 'from') {setFromTime(date);}
          else if (pickerTarget === 'to') {setToTime(date);}
        }}
        onCancel={() => setShowPicker(false)}
      />
    </SafeAreaView>
  );
};
