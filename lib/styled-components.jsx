import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet()
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Alternatively, you can use `styledComponentsStyleSheet.seal()`
    // But when using Suspense boundaries, the styles should be cleared:
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry = ({
    children,
  }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children }
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] ;
}
