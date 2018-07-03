function permut(str) {
  const array = [...str];
  const newArray = [];
  //to save the first occurence
  newArray.push(str);

  //to permute the whole array
  array.forEach(() => {
    const [first, ...rest] = array;
    //to permute the whole rest
    rest.forEach(() => {
      rest.unshift(rest.pop());
      newArray.push([first, ...rest].join(""));
    });
    //to permute array once
    array.unshift(array.pop());
  });
  //to erase duplicate items
  return [...new Set(newArray)];
}

let test = permut("andonaryandriambelorasolonjatovo");
console.log(test);
