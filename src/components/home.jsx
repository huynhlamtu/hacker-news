import React, { Component } from "react";
import HackerStory from "./hackerStory";
import { getStories, searchStories } from "../data/hackerStoriesFakeData";
import _ from "lodash";
import Header from "./header";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import "../styles/hackerStories.css";
import Select from "./select";
import { getFilters } from "../data/filterOptions";
import diffDates from "diff-dates";
import moment from "moment";
import HackerStories from "./hackerStories";
import SelectGroup from "./selectGroup";

class Home extends Component {
  state = {
    stories: [],
    currtentPage: 1,
    pageSize: 9,
    selectedFilters: [],
    logoSrc: "/images/logo-hn-search.png",
    searchPlaceholder: "Search stories by title",
    search: "",
  };

  componentDidMount() {
    const filters = getFilters();
    let filtersState = [];

    filters.forEach((filter) => {
      filtersState.push({
        _id: filter._id,
        type: filter.type,
        label: filter.label,
        onProperty: filter.options[0].onProperty,
      });
    });

    const stories = this.addTimeDiffProp(getStories());

    this.setState({
      stories,
      selectedFilters: filtersState,
    });
  }

  addTimeDiffProp = (stories) => {
    const addedStories = stories.map((story) => {
      const timeToSort = moment(story.dayPost.trim()).format("YYYYMMDDhhmm");
      const relativeTime = moment(
        story.dayPost.trim(),
        "MM/DD/YYYY, h:mm"
      ).fromNow();
      const addedStory = { timeToSort, relativeTime, ...story };
      return addedStory;
    });

    return addedStories;
  };

  handlePageChange = (page) => {
    this.setState({ currtentPage: page });
  };

  onSearchChange = (query) => {
    this.setState({ search: query, currtentPage: 1 });
  };

  onClearSearch = () => {
    this.setState({ search: "" });
  };

  onSelectChange = ({ currentTarget: select }) => {
    const selectArr = select.value.split(",");
    const filters = this.state.selectedFilters;
    for (var i = 0; i < filters.length; i++) {
      if (filters[i].type === select.name) {
        break;
      }
    }
    filters[i].onProperty = selectArr[0];

    filters[i].timeRange = selectArr[1] === "undefined" ? "" : selectArr[1];

    const currtentPage =
      selectArr[1] === "undefined" ? this.state.currtentPage : 1;

    this.setState({ selectedFilters: filters, currtentPage });
  };

  filterByTimeRange = (stories, timeRange) => {
    const present = new Date();

    if (timeRange === "all") return stories;

    const filtered = stories.filter((story) => {
      const datePost = new Date(Date.parse(story.dayPost.trim()));
      return diffDates(present, datePost, timeRange.trim()) <= 1;
    });

    return filtered;
  };

  searchStories(query, stories) {
    const matchStories = stories.filter(
      (story) => story.title.toLowerCase().search(query.toLowerCase()) > -1
    );
    return matchStories;
  }

  getPageData = () => {
    const {
      pageSize,
      currtentPage,
      stories: allStories,
      selectedFilters,
      search,
    } = this.state;

    const searchedStories = search
      ? this.searchStories(search, allStories)
      : [];

    let filtered = search ? searchedStories : allStories;

    selectedFilters.forEach((filter) => {
      if (filter.onProperty === "points") {
        filtered = _.orderBy(filtered, [filter.onProperty.trim()], ["desc"]);
      }
      if (filter.onProperty === "timeToSort") {
        filtered = _.orderBy(filtered, [filter.onProperty.trim()], ["desc"]);
      }
      if (filter.onProperty === "dayPost" && filter.timeRange) {
        filtered = this.filterByTimeRange(filtered, filter.timeRange);
      }
    });

    const stories = paginate(filtered, currtentPage, pageSize);

    return { totalCount: filtered.length, stories };
  };

  render() {
    //kiem tra trong database co stories nao khong
    const { length: count } = this.state.stories;
    const {
      pageSize,
      currtentPage,
      // selectedFilters,
      search,
      logoSrc,
      searchPlaceholder,
    } = this.state;

    //neu khong co story nao
    if (count === 0)
      return (
        <div
          key="noStories"
          className="my-4 d-flex justify-content-between align-items-center"
        >
          <div>There are no stories in the database.</div>
        </div>
      );

    const filterList = getFilters();

    //neu co stories thi tien hanh filter va paginate
    const { totalCount, stories } = this.getPageData();

    //sau do render
    return (
      <div key="stories" className="">
        <Header
          logoSrc={logoSrc}
          searchPlaceholder={searchPlaceholder}
          onChange={this.onSearchChange}
          searchValue={search}
          onClearSearch={this.onClearSearch}
        />
        <SelectGroup
          filterList={filterList}
          onSelectChange={this.onSelectChange}
        />
        <HackerStories stories={stories} />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currtentPage={currtentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
