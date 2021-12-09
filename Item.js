import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Item = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
          }}
          style={{ width: 64, height: 64 }}
        />
        <View style={styles.texts}>
          <Text>{item.symbol}</Text>
          <Text>{item.name}</Text>
          <Text>{item.quote.USD.price}$</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  texts: {
    marginStart: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
    marginStart: 96,
  },
});

export default Item;
