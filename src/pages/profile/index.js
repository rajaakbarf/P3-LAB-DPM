import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ProfileNavBar from '../../components/navBarProfile';

export default function ProfileScreen() {
  const [followers, setFollowers] = useState(100); 
  const [inputValue, setInputValue] = useState(''); 
  const [videos, setVideos] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

 
  useEffect(() => {
    setTimeout(() => {
      setVideos([
        { id: '1', image: 'https://via.placeholder.com/150' },
        { id: '2', image: 'https://via.placeholder.com/150' },
        { id: '3', image: 'https://via.placeholder.com/150' },
        { id: '4', image: 'https://via.placeholder.com/150' },
        { id: '5', image: 'https://via.placeholder.com/150' },
        { id: '6', image: 'https://via.placeholder.com/150' },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  // Update jumlah pengikut saat input selesai
  const handleFollowersUpdate = () => {
    const newFollowers = parseInt(inputValue, 10);
    if (!isNaN(newFollowers)) {
      setFollowers(newFollowers);
      setInputValue(''); // Reset input setelah submit
    }
  };

  // Tampilkan layar loading jika data belum selesai difetch
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <ProfileNavBar />
      
      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@barrfebs</Text>
        <Text style={styles.bio}>Raja Akbar Febriano</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statLabel}>Mengikuti</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{followers}</Text>
            <Text style={styles.statLabel}>Pengikut</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.3M</Text>
            <Text style={styles.statLabel}>Suka</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Input untuk jumlah pengikut */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan jumlah pengikut"
            keyboardType="numeric"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.updateButton} onPress={handleFollowersUpdate}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Suka</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Posting Ulang</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Video Content */}
      <FlatList
        data={videos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.videoThumbnail} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
    fontSize: 12,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 5,
    width: '60%',
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 10,
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  videoThumbnail: {
    width: '33%',
    height: 120,
  },
});
