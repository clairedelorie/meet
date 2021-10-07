import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const colors = ["#8884d7", "#d1ed57", "#a4de6b", "#8dd1e1", "#82a6ec"];

  useEffect(() => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;
      return {
        name: genre,
        value,
      };
    });
    setData(data);
  }, [events]);

  return (
    <ResponsiveContainer height={400} width={400}>
      <PieChart>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} - ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend align="center" height={45} />{" "}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
