import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, RefreshControl } from "react-native";
import {
  NativeBaseProvider,
  FlatList,
  Divider,
  Image,
  Text,
  Spinner,
} from "native-base";
import { services } from "../Services";
import moment from "moment";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function All() {
  const [newsData, setNewsData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    services("general")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <NativeBaseProvider>
      {newsData.length > 1 ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={newsData}
          renderItem={({ item }) => (
            <View>
              <View style={styles.newsContainer}>
                <Image
                  width="100%"
                  height={250}
                  resizeMode={"cover"}
                  source={{
                    uri: item.urlToImage,
                  }}
                  alt="Alternate Text"
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text fontSize="xs" my="1">
                  {moment(item.publishedAt).format("LLL")}
                </Text>
                <Text fontSize="sm">{item.description}</Text>
              </View>
              <Divider my={2} bg="#e0e0e0" />
            </View>
          )}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <View style={styles.spinner}>
          <Spinner color="danger.600" size="lg" />
        </View>
      )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
});
