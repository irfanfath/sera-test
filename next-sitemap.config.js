module.exports = {
  siteUrl: "https://picaso.id",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/dashboard" },
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["*/dashboard", "*/dashboard/developer-logs"],
};
