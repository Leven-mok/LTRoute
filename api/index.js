const { createRequestHandler } = require("@remix-run/vercel");

module.exports = createRequestHandler({
  build: require("./_build")

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
