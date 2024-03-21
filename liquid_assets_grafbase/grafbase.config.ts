import { graph, connector, config } from '@grafbase/sdk';

const g = graph.Standalone();
const liquidAsset = connector.OpenAPI('asset', {
  schema: 'https://raw.githubusercontent.com/SajjaRekhaSamrajyutha/liquid-assets/main/openAPI.yaml',
  url: "https://blockstream.info/liquid/api/",
});
g.datasource(liquidAsset);
export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
