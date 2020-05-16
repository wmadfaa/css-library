exports.banner = {
  main: `/*
  - <%= package.name %> v<%= package.version %>
  - (c) ${new Date().getFullYear()} <%= package.author.name %>
  - <%= package.license %> License
  - <%= package.repository.url %>
*/\n
`,
};
