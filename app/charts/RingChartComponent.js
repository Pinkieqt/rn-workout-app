import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

function RingChartComponent(props) {
  const data = {
    labels: ["Jan", "Tue", "Wed"], // optional
    data: [0.4, 0.6, 0.8],
  };

  return (
    <ProgressChart
      data={data}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      strokeWidth={18}
      radius={32}
      hideLegend={false}
      chartConfig={{
        color: (opacity = 1) => `rgba(50, 30, 250, ${opacity})`,
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        style: {
          borderRadius: 16,
        },
      }}
    />
  );
}

export default RingChartComponent;
