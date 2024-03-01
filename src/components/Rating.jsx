import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({ rating }) {
  return (
    <Stack spacing={1}>
      <Rating
        sx={{ width: "66px" }}
        name="half-rating-read"
        value={rating}
        precision={0.5}
        readOnly
        size="small"
      />
    </Stack>
  );
}
