import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

function BarChartComponent(props) {
  const line = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [27, 90, 56, 80, 45],
        color: (opacity = 1) => `rgba(250, 120, 90, ${opacity})`,
        // strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <BarChart
      data={line}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      //   yAxisLabel={"$"}
      withInnerLines={true}
      segments={2}
      fromZero={true}
      chartConfig={{
        color: (opacity = 1) => `rgba(50, 30, 250, ${opacity})`,
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 0, // optional, defaults to 2dp
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
}

export default BarChartComponent;
