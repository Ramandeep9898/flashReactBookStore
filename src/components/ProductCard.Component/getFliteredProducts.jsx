export const getFliteredProducts = (
  sortedproducts,
  bestseller,
  fiction,
  nonfiction,
  horror
) => {
  console.log(sortedproducts);
  const filteredlist = [];
  if (
    bestseller === false &&
    fiction === false &&
    nonfiction === false &&
    horror === false
  ) {
    return sortedproducts;
  }
  if (bestseller) {
    let newList = sortedproducts.filter(
      (item) => "bestseller" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (fiction) {
    let newList = sortedproducts.filter(
      (item) => "fiction" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (nonfiction) {
    let newList = sortedproducts.filter(
      (item) => "nonfiction" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (horror) {
    let newList = sortedproducts.filter(
      (item) => "horror" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }
  console.log("filtered list", filteredlist);
  return filteredlist;
};
