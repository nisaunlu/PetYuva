<<<<<<< HEAD
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {kedi2} from '../../assent/images';
=======
import React from "react";
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { kedi2 } from "../../assent/images";
import ProfileEdit from "./ProfileEdit";
import NewListing from "./NewListing";
>>>>>>> 2dc02fdc60bc6af148cb1726ad130b532353117e

const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.profileImage} source={kedi2} resizeMode="cover" />
        <Text style={styles.nameText}>Nuran Güler</Text>
        <Text style={styles.subtitleText}>Kedi Gönüllüsü</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Sahiplendirilen Kedi</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>124</Text>
          <Text style={styles.statLabel}>Takipçi</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Aktif Destek</Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
      <TouchableOpacity 
  style={styles.actionButton}
  onPress={() => navigation.navigate("ProfileEdit")}
>
  <Text style={styles.actionButtonText}>Profili Düzenle</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.actionButton}
  onPress={() => navigation.navigate("NewListing")}
>
          <Text style={styles.actionButtonText}>Yeni İlan Oluştur</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Hakkımda</Text>
        <Text style={styles.descriptionText}>
          Sokak kedilerinin hayatını iyileştirmek için çalışan, gönüllü bir kedi
          koruyucusuyum. Her kedinin sıcak bir yuva ve sevgi hak ettiğine
          inanıyorum.
        </Text>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>İletişim Bilgileri</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactText}>İstanbul, Türkiye</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(227,221,207)',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.03,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    borderWidth: 3,
    borderColor: '#D29596',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'rgb(227,221,207)',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: 'white',
    borderColor: '#D29596',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginHorizontal: 1,
  },
  actionButtonText: {
    color: '#D29596',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoSection: {
    backgroundColor: 'rgb(227,221,207)',
    padding: 20,
    borderColor: '#D29596',
    borderWidth: 1,
    borderRadius: 12,
    margin: 4,
    marginVertical: 10,
  },
  contactSection: {
    backgroundColor: 'rgb(227,221,207)',
    padding: 20,
    borderColor: '#D29596',
    borderWidth: 1,
    borderRadius: 12,
    margin: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    color: 'black',
    lineHeight: 22,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 10,
    color: '#333',
  },
});

export default ProfileScreen;
