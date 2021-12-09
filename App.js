import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import Item from "./Item";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
