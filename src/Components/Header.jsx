import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <
      // @ts-ignore
      Box mb={isDashboard ? 2 : 4}>
      <
        // @ts-ignore
        Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <
        // @ts-ignore
        Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}

export default Header;