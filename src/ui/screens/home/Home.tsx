//packages
import {View, Text, FlatList} from "react-native";
import React, {useEffect} from "react";
import Spinner from "react-native-spinkit";
import {Card} from "react-native-paper";

//redux
import {connect} from "react-redux";
import {fetchTodoList} from "@src/redux/actions";

const HomeScreen: React.FC = (props: any) => {
  const {fetchTodoList_, todoList, loading} = props;

  useEffect(() => {
    fetchTodoList_();
  }, [fetchTodoList_]);

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Spinner
              isVisible={loading}
              size={50}
              type={"9CubeGrid"}
              color={"#000000"}
            />
            <Text>Loading...</Text>
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={todoList}
            renderItem={({item}) => {
              return (
                <Card style={{margin: 20}}>
                  <Card.Title title={item.title} />
                  <Card.Cover source={{uri: item.url}} />
                </Card>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  const {todoList, loading} = state.home;
  return {todoList, loading};
};

export default connect(mapStateToProps, {fetchTodoList_: fetchTodoList})(
  HomeScreen,
);
