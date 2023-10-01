import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "test",
    description: "test",
    id: 10008,
    active: true,
    positive_indicator: null,
    negative_indicator: null,
    competency_type: {
      id: 2,
      name: "Technical Competency",
      levels: 0,
    },
  },
  {
    name: "Brynne Frost",
    description:
      "Amet soluta magni excepturi assumenda ut aut quia labore molestiae enim atque quia maxime",
    id: 10007,
    active: false,
    positive_indicator: null,
    negative_indicator: null,
    competency_type: {
      id: 1,
      name: "Core Competency",
      levels: 2,
    },
  },
  {
    name: "mohamde test",
    description: "test ",
    id: 10006,
    active: true,
    positive_indicator: "<p>test</p>",
    negative_indicator: "<p>test</p>",
    competency_type: {
      id: 1,
      name: "Core Competency",
      levels: 2,
    },
  },
  {
    name: "test mk",
    description: "test mk",
    id: 6,
    active: false,
    positive_indicator: "<p>test mk</p>",
    negative_indicator: "<p>test mk</p>",
    competency_type: {
      id: 2,
      name: "Technical Competency",
      levels: 0,
    },
  },
];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});



export default dataSlice.reducer;
