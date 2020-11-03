import React from "react";
import { ContributionGraph } from "react-native-chart-kit";
import { Dimensions } from "react-native";

function HeatMapComponent(props) {
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
  ];

  return (
    <ContributionGraph
      values={commitsData}
      endDate={new Date("2017-04-01")}
      numDays={365}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      squareSize={5}
      horizontal={true}
      showMonthLabels={true}
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

export default HeatMapComponent;
