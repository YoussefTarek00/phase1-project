import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import DataCards from "./DataCards";
import { useState } from "react";
import { LoadMoreButton } from "../../../Components/style/Buttons";
import { selectFilteredNames } from "../../../Services/data/dataSlice";

import { useMemo } from "react";

const ArrayOfData = () => {
  const [show, setShow] = useState(2);

  const filter =
    new URLSearchParams(window.location.search).get("filter") || "all";

  const AllData = useSelector((state) => selectFilteredNames(state, filter));

  // Memoize the selector using the useMemo hook
  const AllDataSlice = useMemo(() => AllData.slice(0, show));

  const handleLoadMore = () => {
    setShow(AllData.length);
  };

  return (
    <Grid container spacing={2}>
      {AllDataSlice.map((data) => (
        <Grid item key={data.id} xs={12} md={12} lg={12}>
          <DataCards data={data} />
        </Grid>
      ))}

      {show < AllData.length && <LoadMoreButton onClick={handleLoadMore} />}
    </Grid>
  );
};
export default ArrayOfData;
