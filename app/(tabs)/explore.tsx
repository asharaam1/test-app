import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CategoryItem {
  name: string;
  image: string;
  url: string;
}

const categories: CategoryItem[] = [
  {
    name: "Restaurants",
    image:
      "https://www.shutterstock.com/image-vector/technology-logo-design-vector-clean-600nw-2670928497.jpg",
    url: "https://d7leadfinder.com/app/view-leads/14187554/",
  },
  {
    name: "Sports",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/041/943/427/small/sport-logo-black-color-2-vector.jpg",
    url: "https://d7leadfinder.com/app/view-leads/14187554/",
  },
  {
    name: "Health",
    image:
      "https://t3.ftcdn.net/jpg/05/28/97/80/360_F_528978063_hoXUak6fcFDiboHUVIbjxdAEK8sFMFZX.jpg",
    url: "https://www.healthline.com",
  },
  {
    name: "Entertainment",
    image:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/30153113/16_big2.png",
    url: "https://www.netflix.com",
  },
  {
    name: "Business",
    image:
      "https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161200915/67602462-business-stamp-sign-text-word-logo-blue.jpg",
    url: "https://www.bloomberg.com",
  },
  {
    name: "Science",
    image:
      "https://www.shutterstock.com/image-vector/science-logo-icon-black-white-600w-350144498.jpg",
    url: "https://www.nationalgeographic.com/science",
  },
  {
    name: "Travel",
    image:
      "https://img.freepik.com/premium-vector/travel-airplane-logo-text-design-inspiration_108832-51.jpg",
    url: "https://www.lonelyplanet.com",
  },
];

const trending = [
  {
    title: "biryani beef",
    image:
      "data:image/jpeg;base64,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",
    url: "https://www.theverge.com/ai-artificial-intelligence",
  },
  {
    title: "World Cup Highlights",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20",
    url: "https://www.fifa.com",
  },
  {
    title: "Top Travel Destinations",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    url: "https://www.lonelyplanet.com/best-in-travel",
  },
];

const Explore = () => {
  const renderCategory = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => Linking.openURL(item.url)}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 30, height: 30, marginBottom: 5 }}
      />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay for better text visibility */}
      <SafeAreaView style={styles.overlay}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <Text style={styles.header}>Categories</Text>

          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />

          <View style={styles.trendingContainer}>
            <Text style={styles.subHeader}>TOP ITEM</Text>

            {trending.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.trendingItem}
                onPress={() => Linking.openURL(item.url)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 100 }}
                />
                <Text style={styles.trendingText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Explore;

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }, // Dark overlay for readability
  container: { flex: 1, paddingTop: 20 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 16,
    color: "#fff",
  },
  listContent: { paddingHorizontal: 16 },
  categoryCard: {
    backgroundColor: "#19c8ec",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 12,
    alignItems: "center",
  },
  categoryText: { color: "white", fontWeight: "bold", fontSize: 16 },
  trendingContainer: { marginTop: 30, marginHorizontal: 16 },
  subHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#fff",
  },
  trendingItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  trendingText: { fontSize: 16, color: "#333", marginTop: 5 },
});
