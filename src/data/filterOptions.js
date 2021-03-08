const filters = [
  {
    _id: 1,
    type: "Search",
    options: [
      {
        label: "All",
        onProperty: "",
      },
      {
        label: "Stories",
        onProperty: "",
      },
      {
        label: "Comments",
        onProperty: "comments",
      },
    ],
  },
  {
    _id: 2,
    type: "by",
    options: [
      {
        label: "",
        onProperty: "",
      },
      {
        label: "Points",
        onProperty: "points",
      },
      {
        label: "Date Post",
        onProperty: "timeToSort",
      },
    ],
  },
  {
    _id: 3,
    type: "for",
    options: [
      {
        label: "All time",
        onProperty: "dayPost",
        timeRange: "all",
      },
      {
        label: "Last 24h",
        onProperty: "dayPost",
        timeRange: "days",
      },
      {
        label: "Past Week",
        onProperty: "dayPost",
        timeRange: "weeks",
      },
      {
        label: "Past Month",
        onProperty: "dayPost",
        timeRange: "months",
      },
      {
        label: "Past Year",
        onProperty: "dayPost",
        timeRange: "years",
      },
    ],
  },
];

export function getFilters() {
  return filters.filter((f) => f);
}

export function getFilterById(filterId) {
  return filters.filter((f) => f._id === parseInt(filterId))[0];
}
