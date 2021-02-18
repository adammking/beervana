


function formatSearchData(data) {
    //Filters through search data to ensure correct parameters are added to url
      let newData = Object.fromEntries(Object.entries(data).filter(pair => pair[1] !== ""))
      return newData
  }

  export default formatSearchData;