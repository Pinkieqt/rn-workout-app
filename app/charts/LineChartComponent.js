import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

function LineChartComponent(props) {
  const line = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(250, 120, 90, ${opacity})`,
        // strokeWidth: 2, // optional
      },
      {
        data: [55, 78, 124, 32, 4, 15],
        color: (opacity = 1) => `rgba(50, 30, 250, ${opacity})`,
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <LineChart
      data={line}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      //   yAxisLabel={"$"}
      withHorizontalLines={true}
      withVerticalLines={false}
      segments={3}
      withShadow={true}
      chartConfig={{
        color: (opacity = 1) => `rgba(50, 30, 250, ${opacity})`,
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 2, // optional, defaults to 2dp
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
}

export default LineChartComponent;
