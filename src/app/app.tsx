import { Global, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";

import { router } from "@app/routes";
import { globalStyles } from "@app/global-styles";
import { theme } from "@app/theme";

export function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}
