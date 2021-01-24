import { StoryFn } from "@storybook/addons"
import GlobalStyles from  "../src/styles/globals"

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles;
