const { createRequestHandler } = require("@remix-run/vercel");

module.exports = createRequestHandler({
  build: require("./_build")
  
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />;
      }}
    />
  );
}
});
